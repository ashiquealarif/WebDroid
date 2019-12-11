<script type="text/javascript">
  email = localStorage.email;
  appName = localStorage.appName;
  Button1Name=localStorage.btn1Name;
  Button1Action=localStorage.btn1Action;
  //ab=Button1Action.trim();
  Button2Name=localStorage.btn2Name;
  Button2Action=localStorage.btn2Action;
  Button3Name=localStorage.btn3Name;
  Button3Action=localStorage.btn3Action;
  Button4Name=localStorage.btn4Name;
  Button4Action=localStorage.btn4Action;
  document.cookie="btn1Action="+Button1Action;
  document.cookie="btn2Action="+Button2Action;
  document.cookie="btn3Action="+Button3Action;
  document.cookie="btn4Action="+Button4Action;
  document.cookie="btn1Name="+Button1Name;
  document.cookie="btn2Name="+Button2Name;
  document.cookie="btn3Name="+Button3Name;
  document.cookie="btn4Name="+Button4Name;
  document.cookie="email="+email;
  document.cookie="appName="+appName;
 
</script>

<?php
if (isset($_COOKIE["btn1Action"])) {
  $Button1Action=$_COOKIE["btn1Action"];
}
if (isset($_COOKIE["btn2Action"])) {
  $Button2Action=$_COOKIE["btn2Action"];
}
if (isset($_COOKIE["btn3Action"])) {
  $Button3Action=$_COOKIE["btn3Action"];
}
if (isset($_COOKIE["btn4Action"])) {
  $Button4Action=$_COOKIE["btn4Action"];
}
if (isset($_COOKIE["btn1Name"])) {
  $Button1Name=$_COOKIE["btn1Name"];
}
if (isset($_COOKIE["btn2Name"])) {
  $Button2Name=$_COOKIE["btn2Name"];
}
if (isset($_COOKIE["btn3Name"])) {
  $Button3Name=$_COOKIE["btn3Name"];
}
if (isset($_COOKIE["btn4Name"])) {
  $Button4Name=$_COOKIE["btn4Name"];
}
if (isset($_COOKIE["email"])) {
  $email=$_COOKIE["email"];
}
if (isset($_COOKIE["appName"])) {
  $appName=$_COOKIE["appName"];
}
//echo $email." ".$appName;
$first='<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <title></title>
    <link rel="manifest" href="C:/xampp/htdocs/cb/kkk/project/app/www/manifest.json">
    <link rel="manifest" href="http://localhost/cb/kkk/project/app/www/manifest.json">
    <link href="C:/xampp/htdocs/cb/kkk/project/app/www/lib/ionic/css/ionic.css" rel="stylesheet">
    <link href="C:/xampp/htdocs/cb/kkk/project/app/www/css/style.css" rel="stylesheet">
    <link href="http://localhost/cb/kkk/project/app/www/lib/ionic/css/ionic.css" rel="stylesheet">
    <link href="http://localhost/cb/kkk/project/app/www/css/style.css" rel="stylesheet">
    <script src="C:/xampp/htdocs/cb/kkk/project/app/www/lib/ionic/js/ionic.bundle.js"></script>
    <script src="http://localhost/cb/kkk/project/app/www/lib/ionic/js/ionic.bundle.js"></script>
    <script src="cordova.js"></script>
    <script src="C:/xampp/htdocs/cb/kkk/project/app/www/js/app.js"></script>
    <script src="http://localhost/cb/kkk/project/app/www/js/app.js"></script>
	<script src="C:/xampp/htdocs/cb/kkk/project/app/www/js/angular-admob.js"></script>
  <script src="http://localhost/cb/kkk/project/app/www/js/angular-admob.js"></script>
  </head>
  <body ng-app="starter" >
    <ion-pane>      
	  <ion-header-bar id="myHeader" title="myHeader">	  
	   <button class="button icon-left ion-home" id="hButton1" title="hButton1" onClick=""><b>hButton1</b></button>
      <h1 class="title" id="titleText" title="titleText">titleText</h1>
		  <button class="button icon-right" id="hButton2" title="hButton2" onClick=""><b>hButton2</b></button>		
    </ion-header-bar> 	  
	 <ion-content id="myBody" title="myBody">
	   <div class="row responsive-sm" id="div1">';

// $Button1Name="button";
// $Button1Action="alert('ok')";
// $Button2Name="button";
// $Button2Action='alert()';
// $Button3Name="button";
// $Button3Action='alert()';
// $Button4Name="button";
// $Button4Action='alert()';
$Button1='<div class="col" id="div2"><button style="padding: 40%;" id="Button1" title="Button1" onclick="'.$Button1Action.'">'.$Button1Name.'</button></div>';
$Button2='<div class="col" id="div3"><button style="padding: 40%;" id="Button2" title="Button2" onclick="'.$Button2Action.'">'.$Button2Name.'</button></div>';
$middle='</div><div class="row responsive-sm" id="div4">';
$Button3='<div class="col" id="div5"><button style="padding: 40%;" id="Button3" title="Button3" onclick="'.$Button3Action.'">'.$Button3Name.'</button></div>';
$Button4='<div class="col" id="div6"><button style="padding: 40%;" id="Button4" title="Button4" onclick="'.$Button4Action.'">'.$Button4Name.'</button></div>';
$last='</div></ion-content></ion-pane></body></html>';
$full=$first;
$full.=$Button1;
$full.=$Button2;
$full.=$middle;
$full.=$Button3;
$full.=$Button4;
$full.=$last;
//echo($full);
?>
<?php
$url = "J:xampp/htdocs/cb/kkk/project/users/".$email."/".$appName."/index.html";
$myfile = fopen($url, "w") or die("Unable to open file!");
fwrite($myfile, $full);
fclose($myfile);
header("Refresh:1");
echo $url;
echo  "<script type='text/javascript'>";
echo "setTimeout('window.close()', 2000);";
echo "</script>";

?>

