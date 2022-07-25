
function validation(){
    var Email = document.getElementById('Email').value;
    var password = document.getElementById('password').value;

    if(Email == ""){
        document.getElementById('email').innerHTML = "Enter email or phone Number";
    }
   
    else {
        document.getElementById('email').innerHTML = " ";
    
    }

    
    // if(password.length <= 8){
    //     document.getElementById('pass').innerHTML = "Password length must be 8";
        
    // }

    if(password == ""){
        document.getElementById('pass').innerHTML = "Enter password";
        
    }


else{
    document.getElementById('pass').innerHTML = " ";
        
}


let data={
    email:Email,
    password:password,  
  }
console.log(data)
$.ajax({
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/user/login',
    type: 'POST',
    data:data,
    'Content-Type': 'application/json',
    success: function (result) {
        console.log(result);
        localStorage.setItem('token',result.id)
    },
    error: function (error) {
      console.log(error);
    }
 });

 
}


   