
    var xmlhttp = new XMLHttpRequest();
	
	if(localStorage.getItem("session")!=1)
	{
		window.open("http://localhost/cb/kkk/project/login.html","_self");
	}
	
    xmlhttp.onreadystatechange = function()
    {
       if (this.readyState == 4 && this.status == 200) 
	   {
          var myObj = JSON.parse(this.responseText);
		
		  for(var i in myObj)
		  {
			 document.getElementById("show").innerHTML += "<tr style='text-align:center;'>" + "<td>"+myObj[i].appname+"</td>" + "<td>"+status(myObj[i].appstatus)+"</td>" + 
			 
			 "<td>"+myObj[i].edit+"</td>" + "<td>"+myObj[i].deleteapp+"</td>" + "<td>"+/*myObj[i].download*/download(myObj[i].email,myObj[i].appname,myObj[i].download)+"</td>";
		  }
       }
    };

    xmlhttp.open("GET", "http://localhost/cb/kkk/project/php/dashboard.php?email=" + localStorage.getItem("logmail"), true);
    xmlhttp.send();

function status(cstatus)
{
     if(cstatus == 0)
	 {
		 return "<p>Pending</p>";
	 }
	 else
	 {
		 return "<p>Complete</p>";
	 }
}

function deleteApp(name)
{
	var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://localhost/cb/kkk/project/php/delete.php?email=" + localStorage.getItem("logmail") + "&name=" + name, true);
    xmlhttp.send();
	location.reload();
}

function logout()
{
	window.open("http://localhost/cb/kkk/project/login.html","_self");
	localStorage.setItem("session",0);
}

function download(email,name,status)
{
	if(status == "Not")
	{
		return "Not Available"
	}
	else
	{
	    var links = "http://localhost/cb/kkk/project/users/"+email+"/"+name+'/android-debug.apk';
	
	    return "<a href='"+links+"'download><button>Download</button></a>";	
	}
}
