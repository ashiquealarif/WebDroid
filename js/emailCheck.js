function check()
{
	var email = document.getElementById( "emailId" ).value;
	   
	   // If email field is empty
     if( email == "" )
     {
          document.getElementById( "email_error" ).innerHTML = "Email field can not be empty";
     }
	 
	 if( email != "" )
	  {
		   var xmlhttp = new XMLHttpRequest();
		   var emails = "";
		   
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
							 emails += myObj[i].email+",";				  
						}
						
						if(emails.indexOf(email) ==-1)
						{
							document.getElementById( "email_error" ).innerHTML = "This email is not Registered";
						}
						else
						{
							 window.open("changePassword.html", "_self");
							 localStorage.setItem("forgetEmail",email);
							 localStorage.setItem("backEmail",1);
							  
							 var myJsonString2 = JSON.stringify(values);
		                     xmlhttp.open("POST", "http://localhost/cb/kkk/project/php/sendFcode.php", true);
                             xmlhttp.send(myJsonString2);
						}
				 }
		   };
		   
		   xmlhttp.open("POST", "http://localhost/cb/kkk/project/php/nameAndEmail.php", true);
           xmlhttp.send();
	  }
	   
}