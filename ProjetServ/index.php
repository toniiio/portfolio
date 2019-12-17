<!DOCTYPE html>
<html>
	<head> 
		<meta charset="utf-8" /> 
		<script type="text/javascript" src="inscription.js"></script>
		<link rel="stylesheet" href="page.css"/>
		<title>excercice</title>		
	</head> 
	
	<body>
		 <div id="bloc_page">
			<?php
			require_once('serveur.php');
			$id=ConnectDB();
			if(isset($_POST['choixCompte']))
			{
			foreach($_POST as $cle=>$val) 
				$$cle=$val;	
			if($choixCompte=='Connexion')
			{
			$req="select nom,prenom,mdp,idutilisateur from utilisateur where nom='$nom' and prenom='$prenom' and mdp='$pass1'";		
			$res=ExecuterRequete($id,$req);
			if(mysqli_num_rows($res))		
			{
			$tab=mysqli_fetch_assoc($res);    // il extrait les tableaux
			setcookie("nom",$nom,time()+3600);
			$_COOKIE["nom"] = $nom;      //recuperer le nom pour pouvoir l'utiliser 
			header('page.php');
			echo time();
			?>	
			<?php
			}
			else
			{
			echo "Vous n'etes pas inscrit";
			}
			}
			if ($choixCompte=='Inscription')
			{	
			$req="INSERT INTO utilisateur(nom,prenom,mail,mdp) VALUES ('$nom','$prenom','$mail','$pass1')";
			$res=ExecuterRequete($id,$req);
			$_COOKIE["nom"] = $nom; 		
			?>
			<?php		
			}
			}
			if(isset($_GET['deconnexion']))
			{
			setcookie("nom",null,time()-3600); 
			unset($_COOKIE["nom"]);  
			unset($_COOKIE["nom"]); 
			header('page.php');
			echo time();
			}
			?>
		
			<nav>
				<div class="menu">
				<a href="page.php">Accueil</a>
					<?php	
					if(!isset($_COOKIE["nom"]))   
					{	
					?>	
					<a onclick="choixConnexion('inscription')">Inscription</a>
					<a onclick="choixConnexion('connexion')">Connexion</a>
					<?php
					}
					else
					{
					echo $_COOKIE["nom"];	                   
					?>
					<a href="page.php?deconnexion">Déconnexion</a>
					<?php
					}
					?>
				</div>
			</nav>
			
			<aside>
				<div id="formulaireConnexion"></div>
			</aside>
			<?php
				if(isset($_COOKIE["nom"]))  
				{
				echo '<a href="planning mensuel.html">planning mensuel</br><a>';
				echo '<a href="planning journalier.html">planning journalier</br><a>';
				echo '<a href="planning semaine.html">planning semaine</br><a>';
				echo '<a href="planning trimestriel.html">planning trimestriel</br><a>';
				}
			?>		
		</div>	
	</body>
</html>