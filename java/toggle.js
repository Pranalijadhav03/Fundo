
function replace() {
  document.getElementById("div1").style.display = "none";
  document.getElementById("myDIV").style.display = "block";
  // let a =document.getElementById('ntitle');
  //   a.addEventListener('click');
}


function closediv() {

  var title = document.getElementById('title').value;
  var note = document.getElementById('note').value;
  let xyz = document.getElementById('btn');
  xyz.addEventListener('click', () => {
    let data = {
      title: title,
      description: note,
    }

    console.log(data);
    let token = localStorage.getItem('token')
    $.ajax({
      url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',
      type: 'POST',
      data: data,
      // 'Content-Type: multipart/form-data'
      'Content-Type': 'application/json',
      headers: { 'Authorization': token },
      success: function (result) {
        console.log(result);
      },
      error: function (error) {
        console.log(error);
      }
    });
  });

  window.onload = function () {
    document.getElementById('btn').onclick = function () {
      document.getElementById('myform').submit();
      return false;


    }
  }

  let data = {
    title: title,
    description: note
  }

  console.log(data);
  let token = localStorage.getItem('token')
  $.ajax({
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList',
    type: 'GET',
    data: data,
    // 'Content-Type: multipart/form-data'
    'Content-Type': 'application/json',
    headers: { 'Authorization': token },
    success: function (result) {
      console.log(result.data.data);
      let note = result.data.data;
      {
        document.getElementById('demo').innerHTML = note.map((e) =>
          `
            <div class="box1 "  style =" height:auto; width:250px; margin-bottom:20px; border: 2px solid rgb(230,224,224); display:flex; flex-direction:column; flex-wrap: wrap;" >
            <div onclick="togglePopup()">
            <p>${e.title}</p>
            <p>${e.description}</p>
            </div>
            <div class="box2">
            <img src="../assets/download1.svg" style=" height: 18px; width: 18px;  margin-bottom: 10px; margin-right: 15px;">
            <img src="../assets/download2.svg" style=" height: 18px; width: 18px;  margin-bottom: 10px; margin-right: 15px;">
            <div class="dropdown2">
            <button class="imgbtn2"><img src="../assets/download3.svg" style=" height: 18px; width: 18px;  margin-bottom: 10px; margin-right: 15px;"></button>
            <div class="dropdown-content2">
            <div class="color">
            <div class="chooseColor "  style="background-color:#f28b82"> </div>
        <div class="chooseColor "  style="background-color:#fbbc04"> </div>
        <div class="chooseColor "  style="background-color:#fff475"> </div>
        <div class="chooseColor "  style="background-color:#ccff90"> </div>
        <div class="chooseColor "  style="background-color:#a7ffeb"> </div>
        <div class="chooseColor " style="background-color:#cbf0f8"> </div>
        <div class="chooseColor"  style="background-color:#aecbfa"> </div>
        <div class="chooseColor"  style="background-color:#fdcfe8"> </div>
        <div class="chooseColor"  style="background-color: #e6c9a8"></div>
       </div>
           
          </div>
          </div>
           
       
          <button class="imgbtn3 id=id=${e.id}><img src="../assets/download4.svg" style=" height: 18px; width: 18px;  margin-bottom: 10px; margin-right: 15px;" >
            <img src="../assets/download5.svg" style=" height: 18px; width: 18px;  margin-bottom: 10px; margin-right: 15px;">
            <div class="dropdown1">
           <button class="imgbtn"> <img src="../assets/download6.svg"  style=" height: 18px; width: 18px;  margin-bottom: 10px; margin-right: 15px;"></button>
          <div class="dropdown-content1">
              <a href="#" id=${e.id}>delete note</a>
            <a href="#">Add lable</a>
            <a href="#">Add Drowing</a>
            <a href="#">make a copy</a>
            <a href="#">Show checkbox</a>
            <a href="#">copy to google top</a>
  </div>
</div>
            </div> </div>`

        )
      }
    },
    error: function (error) {
      console.log(error);
    }
  });

  const deletenote = document.querySelector('#demo')
  deletenote.addEventListener('click', (e) => {
    console.log(e.target.id);

    let req = {
      noteIdList: [e.target.id],
      isDeleted: true,
    }
    console.log(token);
    $.ajax({
      url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes',
      type: 'POST',
      data: req,
      'Content-Type': 'application/json',
      headers: { 'Authorization': token },
      success: function (result) {
        console.log(result);
      },
      error: function (error) {
        console.log(error);
      }
    });
  })

  const archivedata = document.querySelector('#demo')
archivedata.addEventListener('click',(e)=>{
  console.log(e.target.id);

let req1 = {
  noteIdList: [e.target.id],
  isArchived: true,
}

let token=localStorage.getItem('token');
$.ajax({
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes',
    type: 'POST',
    data:JSON.stringify(req1),
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': token
     },
    success: function (result) {
        console.log(result);
    },
    error: function (error) {
      console.log(error);
    }
 });
})




}

function togglePopup() {
  $(".popup").toggle();
}


// function open(){
//   document.getElementById("myDIV").style.display = "block";
 
// }

// function close() {
//   document.getElementById("myDIV").style.display = "none";
// }
