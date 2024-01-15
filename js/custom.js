let username;
let password;

let getInput = (e) =>{
    username =  e.value; 
}
let getPassword = (e) =>{
    password =  e.value; 
}

let checkLogin = (e) =>{
    e.preventDefault();
    if(username == 'pawan' && password == '12345')
{
    window.location.href = "next.html";
}
else{
    alert('invalid username or password');
}
}
