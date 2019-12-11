function check()
{
	var email = document.getElementById( "emailId" ).value;
	var valid = document.getElementById( "validId" ).value;
	 
	 // If email field is empty
     if( email == "" )
     {
          document.getElementById( "email_error" ).innerHTML = " You have to write a valid email";
     }
	 
	  // If valid field is empty
     if( valid == "" )
     {
          document.getElementById( "valid_error" ).innerHTML = " You have to enter validation code";
     }
	 
	  if( email !="" && valid != "" )
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
							
						  if( myObj[i].email != email || myObj[i].vcode != valid  )
						  {
						      document.getElementById( "final" ).innerHTML = "Either email id or verification code is wrong";
						  }
						  
						  else
						  {   
						      document.getElementById( "final" ).innerHTML = "Successfully Registered."+"<a href='login.html'>"+" Log In"+"</a> To view your account";
							  var myJsonString2 = JSON.stringify(values);
		                      xmlhttp.open("POST", "http://localhost/cb/kkk/project/php/memberInsert.php", true);
                              xmlhttp.send(myJsonString2);
						  }
						  
						}
				 }
		   };
		   
		   xmlhttp.open("POST", "http://localhost/cb/kkk/project/php/validation.php", true);
           xmlhttp.send();
	  }
	  
	  else
	  {
		   return true;
	  }
	  
}