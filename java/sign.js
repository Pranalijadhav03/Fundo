function validation(){
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var userName= document.getElementById('userName').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;

    
    // if(firstName == ""){
    //     document.getElementById('fname').innerHTML = "Enter first name";
    // }

    if((firstName.length <=3) || (firstName.length > 10)){
        document.getElementById('fname').innerHTML = "length must be between 3 an 10";
        return false;
    }

    else{
        document.getElementById('fname').innerHTML = "";
    }
    // else{
    //     document.getElementById('fname').innerHTML = " "; 
    //     firstName.addEventListener('keyup',()=>{
    //         let regex=/^[A-Z]{1}[a-z]{2,}$/;
    //         let str=firstName.value;
        
    //     console.log(regex,str);
    //     if(regex.test(str)){
    //         console.log('it matched');
        
    //     }
    //     else{
    //         console.log('it no matched');
         
    //     }
        
    //  });


      if((lastName.length <=3) || (lastName.length > 10)){
                document.getElementById('lname').innerHTML = "length must be between 3 an 10";
                return false;
            }
   
            else{
                document.getElementById('lname').innerHTML = "";
            }

            // if(lastName == ""){
            //     document.getElementById('lname').innerHTML = "Enter last name";
            //      }

        
    if(userName == ""){
        document.getElementById('uname').innerHTML = "Enter user name";
        }

        else{
        document.getElementById('uname').innerHTML = " ";
    }

    if(password == ""){
        document.getElementById('pass').innerHTML = "Enter password";
        
    }

    if(password.length <= 8){
        document.getElementById('pass').innerHTML = "Password length must be 8";
        
    }

else{
    document.getElementById('pass').innerHTML = " ";
        
}

if(cpassword== ""){
    document.getElementById('cpass').innerHTML = "Renter password";
   
}

if(cpassword!=password){
    document.getElementById('cpass').innerHTML = "password not match";
   
}

else{
    document.getElementById('cpass').innerHTML = "";
   
}  

let data={
    firstName:firstName,
    lastName:lastName,
    email:userName,
    password:password ,
    service:"advance"
  }
console.log(data);
$.ajax({
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp',
    type: 'POST',
    data:data,
    'Content-Type': 'application/json',
    success: function (result) {
        console.log(result);
    },
    error: function (error) {
      console.log(error);
    
    }
 });



}


   










