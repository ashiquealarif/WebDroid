function validate()
{
	var name = document.getElementById( "unameId" ).value;
    var pass = document.getElementById( "passId" ).value;
	var email = document.getElementById( "emailId" ).value;
	var fcode = document.getElementById( "forgetCodeId" ).value;
	
	// If name field is empty
     if( name == "" )
     {
          document.getElementById( "name_error" ).innerHTML = " This field have to be filled ";
     }
	 
	 // If email field is empty
     if( email == "" )
     {
          document.getElementById( "email_error" ).innerHTML = " You have to write a valid email";
     }
	 
     if( pass.length <= 5 )
     {
          document.getElementById( "pass_error" ).innerHTML = " Password Must Be More Than Or Equal To 5 characters";
     }
	 
	  if( name !="" && email != "" && pass.length >= 5 )
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
						
						if(emails.indexOf(email) !=-1)
						{
							document.getElementById( "email_error" ).innerHTML = "Already Registered";
						}
						else
						{
							 window.open("validate.html", "_self");
							 localStorage.setItem("name",name);
							 localStorage.setItem("pass",pass);
							 localStorage.setItem("email",email);
							 localStorage.setItem("fcode",fcode);
							  
							 var myJsonString2 = JSON.stringify(values);
		                     xmlhttp.open("POST", "http://localhost/cb/kkk/project/php/verifyInsert.php", true);
                             xmlhttp.send(myJsonString2);
						}
				 }
		   };
		   
		   xmlhttp.open("POST", "http://localhost/cb/kkk/project/php/nameAndEmail.php", true);
           xmlhttp.send();
	  }
	  
}