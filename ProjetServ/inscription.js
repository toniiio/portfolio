function choixConnexion(choix){
		
	if(choix=='connexion')
	{
		x='<form action="page.php" name="formulaireConnexion" method="post">';
		x=x+'<table id="tableConnexion">';
		x=x+'<tr><td>Nom:</td><td><input type="text" name="nom" /></td></tr>';
		x=x+'<tr><td>Prénom:</td><td><input type="text" name="prenom" /></td></tr>';
		x=x+'<tr><td>Mot de passe:</td><td><input type="password" name="pass1" /></td></tr>';
		x=x+'<tr><td colspan="2"><input type="submit" value="Connexion" name="choixCompte"/></td></tr>';
	}
	else{
		 
		x='<form action="page.php" name="formulaireConnexion" method="post" onsubmit="return verifPass()">';
		x=x+'<table id="tableConnexion">';
		x=x+'<tr><td>Nom:</td><td><input type="text" name="nom" /></td></tr>';
		x=x+'<tr><td>Prénom:</td><td><input type="text" name="prenom" /></td></tr>';
		x=x+'<tr><td>E-mail:</td><td><input type="email" name="mail" value="mail@gmail.com" /></td></tr>';
		x=x+'<tr><td>Mot de passe:</td><td><input type="password" name="pass1" /></td></tr>';
		x=x+'<tr><td>Confirmer le mot de passe :</td><td><input type="password" name="pass2" /></td></tr>';
		x=x+'<tr ><td colspan="2"><input type="submit" value="Inscription" name="choixCompte" /></td></tr>';
	}
	x=x+'</form>';
	x=x+'</table>';
	
	document.getElementById('formulaireConnexion').innerHTML=x;
}

function verifPass(){
	pass1=document.getElementsByName('pass1')[0].value;
	pass2=document.getElementsByName('pass2')[0].value;

	if (pass1==pass2)	
	return true;
	else{
		alert('Mot de passe différents');
		return false;
	 }
}