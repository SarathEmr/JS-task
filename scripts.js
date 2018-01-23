

var letters=/^[A-Za-z, ]+$/;


var mailvailid=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  var re = /((http|https)\:\/\/)?[a-zA-Z0-9\.\/\?\:@\-_=#]+\.([a-zA-Z0-9\&\.\/\?\:@\-_=#])*/;

  var namef=0,emailf=0,webf=0;
function checkName(nm){
  if((nm==null)||(!nm.match(letters))||(nm.length>25))
  {
    document.getElementById("errorname").innerHTML="invalid name";
  }
  else {
    namef=1;
    document.getElementById("errorname").innerHTML=" ";
  }
}
function checkEmail(mail)
{
  var atpos=mail.indexOf("@");
var dotpos=mail.lastIndexOf(".");
  if(atpos==null || atpos<1 || dotpos<atpos+2|| dotpos+2>=mail.length || dotpos==null ||(!mail.match(mailvailid)))
  {

    document.getElementById("erroremail").innerHTML="invalid email";
  }
  else {
    emailf=1;
    document.getElementById("erroremail").innerHTML=" ";
  }
}
function checkweb(url)
{
  if (!url.match(re))
    {

      document.getElementById("errorweb").innerHTML="invalid url";
    }
    else {

      document.getElementById("errorweb").innerHTML=" ";
    }

}
function checkfield()
{
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;

  if(name.length==0)
  {
    document.getElementById("errorname").innerHTML="name field is empty";
  }
  else {

    namef=2;
      checkName(name);
    document.getElementById("errorname").innerHTML=" ";
  }

  if(email.length==0)
  {
    document.getElementById("erroremail").innerHTML="email field is empty";
  }
  else {
    emailf=2;
    checkEmail(email);

    document.getElementById("erroremail").innerHTML=" ";
  }

if(namef==1){
  if(emailf==1){
   {

  alert("submit successfully");
}
}
}
else if(namef==2 && emailf==2)
{
  alert("name  & email incorrect format");
}
else if(emailf==2)
{
  alert("email incorrect format");

}
else if(namef==2 )
{
  alert("name incorrect format");
}

}
