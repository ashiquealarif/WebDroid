<?php
if (isset($_REQUEST['email'])) {
	$email=$_REQUEST['email'];
}
if (isset($_REQUEST['appName'])) {
	$appname=$_REQUEST['appName'];
}
function getJSONFromDB($sql,$type){
	$conn = mysqli_connect("localhost", "root", "","cb");
	if ($type=="select") {
		$result = mysqli_query($conn, $sql) or die(mysqli_error());
		$arr=array();
		while($row = mysqli_fetch_assoc($result)) {
			$arr[]=$row;
		}
		return json_encode($arr);
	}
	else if ($type=="addCol") {
		$result = mysqli_query($conn, $sql) or die(mysqli_error());
		return $result;
	}
	else if ($type=="update") {
		$result = mysqli_query($conn, $sql) or die(mysqli_error());
		return $result;
	}
	else{

	}	
}
if(isset($_REQUEST['name']) && $_REQUEST['tag']==1){
	if (isset($_REQUEST['name'])) {
		$name=$_REQUEST['name'];
	}
	$path="localhost/cb/kkk/project/users/".$email."/".$appname."/".$name.".html";
	$sql="select noOfPages from appinfo where email='".$email."' and appname='".$appname."'";
	$jsonData= getJSONFromDB($sql,"select");
	$pageNo=json_decode($jsonData,true);
	$page=$pageNo[0]["noOfPages"];
	$page++;
	if ($page>=1) {
		$colName="path".$page;
		//$pagePrev=$page-1;
		//$colNamePrev="path".$pagePrev;
		//$sql="ALTER TABLE page ADD `".$colName."` VARCHAR(200) NULL";
		//$check=getJSONFromDB($sql,"addCol");

		if (true) {
			$sql="UPDATE appinfo SET `".$colName."`='".$path."' , noOfPages='".$page."' where email='".$email."' and appname='".$appname."'";
			$check=getJSONFromDB($sql,"update");
			if ($check) {
				copy("J:/xampp/htdocs/cb/kkk/p101/themes/textTheme/start.html", "J:/xampp/htdocs/cb/kkk/project/users/".$email."/".$appname."/".$name.".html");
				echo($name);
			}
		}
	}
}
if($_REQUEST['tag']==2){
	$sql="select noOfPages from appinfo where email='".$email."' and appname='".$appname."'";
	$jsonData= getJSONFromDB($sql,"select");
	$pageNo=json_decode($jsonData,true);
	$page=$pageNo[0]["noOfPages"];
	$sql="SELECT path";
	if ($page>1) {
		for ($i=2; $i <= $page; $i++) { 
			$sql.=",path".$i;
		}
		$sql.=" FROM appinfo where email='".$email."' and appname='".$appname."'";
		//echo($sql);
		$jsonData=getJSONFromDB($sql,"select");
		echo($jsonData);
	}
	else{
		$sql.=" FROM appinfo where email='".$email."' and appname='".$appname."'";
		//echo($sql);
		$jsonData=getJSONFromDB($sql,"select");
		echo($jsonData);
	}
}
else{
	echo "invalid parameter";
}
?>