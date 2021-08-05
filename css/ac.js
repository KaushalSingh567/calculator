function ab(){

var username=document.getElementById("name").value;
var password=document.getElementById("name1").value;

if(username == "kaushal" && password == "12345")
{
    document.getElementById("msg").innerHTML="welcome"+username;
}
else{
    document.getElementById("msg").innerHTML="invalid user";
}

}
