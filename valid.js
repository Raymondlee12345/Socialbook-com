function myfunction(){
    var x =document.getElementById("pass");

    if(x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password";     
    }
}

function validate(){
    var password = document.getElementById("pass");
    var lengt = document.getElementById("length");

    if(password.value.length >= 8){
        alert("Signup succesfull");
        window.location.replace("");
        return false;
    }
    else{
        alert("Signup Failed");
    }
}