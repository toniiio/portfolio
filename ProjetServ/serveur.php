<?php

	function ConnectDB() 
	{
	$id = mysqli_connect('localhost','root','','ex');
		if(!$id)
		{
		echo "erreur connexion";
		}
		else
		
		{
		echo "connexion au serveur réussit <br/>";	
		}	
	
	return $id;
	}

	function ExecuterRequete($id,$req) 
	{
	$res = mysqli_query ($id,$req);
	return $res;
	}
?>


