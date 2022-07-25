
function replace(){
  document.getElementById("div1").style.display="none";
  document.getElementById("myDIV").style.display="block";
}

function closediv(){

        var title = document.getElementById('title').value;
    var note = document.getElementById('note').value;
    let xyz=document.getElementById('btn');
    xyz.addEventListener('click',()=>{
      let data={
        title:title,
        description:note,   
      }
      
      console.log(data);
    let token = localStorage.getItem('token')
      $.ajax({
        url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',
        type: 'POST',
        data:data,
        // 'Content-Type: multipart/form-data'
        'Content-Type': 'application/json',
        headers:{'Authorization': token},
        success: function (result) {
            console.log(result);
        },
        error: function (error) {
          console.log(error);
        }
     });


    });

    const mybtn = document.getElementById('btn');

mybtn.addEventListener('click', function handleClick(event) {
  document.getElementById("myDIV").style.display = "none";
});

    window.onload = function() {
      document.getElementById('btn').onclick = function() {
          document.getElementById('myform').submit();
          return false;
    
    
}
 }

 let data={
  title:title,
  description:note 
}

console.log(data);
let token = localStorage.getItem('token')
$.ajax({
  url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList',
  type: 'GET',
  data:data,
  // 'Content-Type: multipart/form-data'
  'Content-Type': 'application/json',
  headers:{'Authorization': token},
  success: function (result) {
      console.log(result.data.data);
      let note = result.data.data;
          // for (let i = 0; i < note.length; i++) {
          //   console.log(note[i].title)
            document.getElementById('demo').innerHTML = note.map((e) =>
            `
            <div class="box1" style =" height:auto; width:250px; border: 2px solid rgb(230,224,224); display:flex; flex-direction:column; flex-wrap: wrap; border:2px solid red;" >
            <p>${e.title}</p>
            <p>${e.description}</p>
            
            <div class="box2"><img src="../assets/download1.svg" style=" height: 18px; width: 18px;  margin-bottom: 10px; margin-right: 15px;">
            <img src="../assets/download2.svg" style=" height: 18px; width: 18px;  margin-bottom: 10px; margin-right: 15px;">
            <img src="../assets/download3.svg"  style=" height: 18px; width: 18px;  margin-bottom: 10px; margin-right: 15px;">
            <img src="../assets/download4.svg"  style=" height: 18px; width: 18px;  margin-bottom: 10px; margin-right: 15px;" >
            <img src="../assets/download5.svg"  style=" height: 18px; width: 18px;  margin-bottom: 10px; margin-right: 15px;">
            <img src="../assets/download6.svg"  style=" height: 18px; width: 18px;  margin-bottom: 10px; margin-right: 15px;">
            </div> </div>`
            )       

  },
  error: function (error) {
    console.log(error);
  }
});

}