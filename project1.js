function seterror(id,error){
    Element = document.getElementById(id);
    Element.getElementsByClassName('formerror')[0].innerHTML = error;

    
}
function clearerror(){
    error = document.getElementsByClassName('formerror');
    for(let item of error){
        item.innerHTML = "";
    }
}
function validateform(){
    var returnval = true;
    clearerror();
    var name = document.forms['myform']["fname"].value;
    var email = document.forms['myform']["femail"].value;
    var phone = document.forms['myform']["fphone"].value;
    var password = document.forms['myform']["fpassword"].value;
    var cpassword  = document.forms['myform']["cfpassword"].value;
    if(name.length<5){
        seterror("name","length of name is too short");
        returnval = false;
    }
    if(name.length == 0 ){
        seterror("name","length of name should not zero");
        returnval = false;
        return returnval;

    }
    

    
    if(email.length>25){
        seterror("email","length of email is too long");
        returnval = false;
        return returnval;

    }
    if(email.length==0){
        seterror("email","please write email")
        returnval = false;
        return returnval;
    }
    
    
    if(phone.length!=10 ){
        seterror("phone","length of phone should be 10 digit");
        returnval = false;
        return returnval;

    }
   

    
    if(password.length<8 ){
        seterror("password","length of password should be 8 digit");
        returnval = false;
        return returnval;

    }
    
    if(cpassword !=password ){
        seterror("cpassword"," Password should be match");
        returnval = false;
        return returnval;

    }    
}
