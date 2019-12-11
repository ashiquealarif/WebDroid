function validate()
{
	var vcode = document.getElementById( "vcodeId" ).value;
    var pass = document.getElementById( "passId" ).value;
	
	// If name field is empty
     if( vcode == "" )
     {
          document.getElementById( "verify_error" ).innerHTML = " This field have to be filled ";
     }
	 
     if( pass.length <= 5 )
     {
          document.getElementById( "pass_error" ).innerHTML = " Password Must Be More Than Or Equal To 5 characters";
     }
	 
	  if( vcode !="" && pass.length >= 5 )
	  {
		   var xmlhttp = new XMLHttpRequest();
		   var fcodes = "";
		   
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
						if(vcode != myObj[i].fcode)
						{
							document.getElementById( "verify_error" ).innerHTML = "Wrong Verification Code";
						}
						else
						{
							 document.getElementById( "message" ).innerHTML = "You have successfully Changed your Password.<a href='login.html'>Click Here</a> to login with your new password";
							 var myJsonString2 = JSON.stringify(values);
		                     xmlhttp.open("POST", "http://localhost/cb/kkk/project/php/changePass.php", true);
                             xmlhttp.send(myJsonString2);
						}
						
					}
				 }
		   };
		   
		   xmlhttp.open("GET", "http://localhost/cb/kkk/project/php/forgetVerify.php?email="+localStorage.getItem("forgetEmail"), true);
           xmlhttp.send();
	  }
	  
}