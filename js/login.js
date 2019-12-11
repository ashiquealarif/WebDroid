function check()
{
	var email = document.getElementById( "emailId" ).value;
	var pass = document.getElementById( "passId" ).value;
	   
	   // If email field is empty
     if( email == "" )
     {
          document.getElementById( "email_error" ).innerHTML = "Email field can not be empty";
     }
	 
	 // If password is empty
      if( pass == "" || pass.length <= 4)
      {
          document.getElementById( "pass_error" ).innerHTML = "Invalid Password";
      }
	   
	   // check email and password
	   if(email != "" && pass !="")
	   {
	       var xmlhttp = new XMLHttpRequest(); 
		   
		    var values = $("input").map(function () {
            return $(this).val();
        }).get();
		   
		   xmlhttp.onreadystatechange = function() 
		   {
		         if (this.readyState == 4 && this.status == 200)
				 {
				        myObj = JSON.parse(this.responseText);
						
						for(var i in myObj)
						{	
						  if(myObj[i].pass == pass)
						  {
						       window.open("http://localhost/cb/kkk/project/dashBoard.html", "_self");
						       localStorage.setItem("username",myObj[i].name);
							   localStorage.setItem("logmail",email);
							   localStorage.setItem("session",1);
						  }
						  else
						  {
						     document.getElementById( "finalError" ).innerHTML = "Wrong Password";
						  }
						}
				 }
		   };
		   
		   var myJsonString = JSON.stringify(values);
		   xmlhttp.open("POST", "http://localhost/cb/kkk/project/php/loginCheck.php", true);
           xmlhttp.send(myJsonString);
	   }
	   
}