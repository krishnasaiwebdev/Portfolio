function login(){
    let username=
    document.getElementById("username").value;
    let password=
    document.getElementById("password").value;
  
    if (username === "admin" && password === "1234"){
        document.getElementById("loginpage").style.display="none";
        document.getElementById("Portfolio").style.display="block";

    }else{
        alert("invalid username or password");
    }
}


