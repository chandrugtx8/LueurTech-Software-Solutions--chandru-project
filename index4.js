function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="chandru"&& password=="2299")
{
    alert("login succesfully");
    return false;

}
else
{
    alert("login failed");
}


}
