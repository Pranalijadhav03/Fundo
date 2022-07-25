function validation(){
    var Password = document.getElementById('Password').value;
    var CPassword = document.getElementById('CPassword').value;


    if(Password == ""){ 
        
        document.getElementById('pass').innerHTML = "Enter new password";
        return false;
    }

   
if(CPassword== ""){
    document.getElementById('cpswd').innerHTML = "Renter password";
    return false;
}


let data={
    password:Password,
    password:CPassword,
      }

  console.log(data);

  $.ajax({
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/user/reset',
    type: 'POST',
    data:data,
    'Content-Type': 'application/json',
    // // headers: {
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



