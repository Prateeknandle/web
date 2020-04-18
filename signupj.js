function validate()
{
    var username = document.getElementById("uname");
    var password = document.getElementById("pass");
    if(username.value.trim()=="")
    {
        //alert("Blank username");
        uname.style.border="solid 1px red";
        document.getElementById("user").style.visibility="visible";
        return false;
    }
    else if(password.value.trim()=="")
    {
        //alert("Blank password");
        pass.style.border="solid 1px red";
        document.getElementById("pass2").style.visibility="visible";
        return false;
    }
    else if(password.value.trim().length<5)
    {
        //alert("Password too short");
        pass.style.border="solid 1px red";
        document.getElementById("pass2").style.visibility="visible";
        return false;
    }
    else{
        true;}
    }