function mail()
{
	document.getElementById( "emailId" ).value = localStorage.getItem("logmail");
}

function check()
{
   var name = document.getElementById( "appTitleId" ).value;
   
     if( name == "" )
     {
          document.getElementById( "error" ).innerHTML = " This field has to be filled";
     }
	 
	  if( name !="" )
	  {
		   var xmlhttp = new XMLHttpRequest();
		   var appName = "";
		   
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
						    appName += myObj[i].appname+" ";
						}
						
						if( appName.indexOf(name) ==-1 )
						{
							  localStorage.setItem("appsName",name);
							  var myJsonString2 = JSON.stringify(values);
		                      xmlhttp.open("POST", "http://localhost/cb/kkk/project/php/appcreate.php", true);
                              xmlhttp.send(myJsonString2);
							  window.open("dashBoard.html", "_self");
						}
						else
						{
							document.getElementById( "error" ).innerHTML = " [ Already Picked ]";
						}
				 }
		   };
		   
		   xmlhttp.open("POST", "http://localhost/cb/kkk/project/php/appnameCheck.php", true);
           xmlhttp.send();
	  }
}

if(localStorage.getItem("session")!=1)
{
	window.open("http://localhost/cb/kkk/project/login.html","_self");
}