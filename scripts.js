console.log('hahah');
function submitFunction()
    {
      var nm=document.myform.name.value;
      var errmsg="";
      var letters=/^[A-Za-z, ]+$/;
      var mail=document.myform.email.value;
      var atpos=mail.indexOf("@");
      var mailvailid=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      var dotpos=mail.lastIndexOf(".");
      var re = /((http|https)\:\/\/)?[a-zA-Z0-9\.\/\?\:@\-_=#]+\.([a-zA-Z0-9\&\.\/\?\:@\-_=#])*/;
      var web=document.myform.url.value;
      if((nm==null)||(!nm.match(letters))||(nm.length>25))
      {
        errmsg=" give a valid name ";
      }
      if(atpos==null || atpos<1 || dotpos<atpos+2|| dotpos+2>=mail.length || dotpos==null ||(!mail.match(mailvailid)))
      {
        errmsg=errmsg+"give a valid email ";

      }

     if (!web.match(re))
       {
         errmsg=errmsg+"give a valid url";

      }
      if(errmsg!="")
      {
      alert(errmsg);
    }
      return false;
    }
