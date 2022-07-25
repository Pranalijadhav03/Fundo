function validation(){
    var Email = document.getElementById('Email').value;

    if(Email == ""){
        document.getElementById('email').innerHTML = "Enter email or phone Number";
        return false;
    }

    else{
        document.getElementById('email').innerHTML = " ";
    }


    let data={
        email:Email,
           
      }

      console.log(data);
    $.ajax({
        // url:'http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp',
        url: 'http://fundoonotes.incubation.bridgelabz.com/api/user/reset',
        type: 'POST',
        data:data,
        'Content-Type': 'application/json',
        // headers: {
        //    'Authorization': 'Bearer <token>'
        // },
        success: function (result) {
            console.log(result);
        },
        error: function (error) {
          console.log(error);
        }
     });
}