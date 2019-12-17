
function dessinerBalle() {

	context.beginPath();
	context.arc(ballePositionX, ballePositionY, tailleBalle,0, Math.PI*2,true);
	context.fillStyle = couleurBalle;
	context.fill();
}
// Droite
function dessinerRaquette() {

	context.beginPath();
	context.rect(positionXRaquette , positionYRaquette , longueurRaquette , largeurRaquette);
	context.fillStyle = couleurRaquette;
	context.fill();

}
// Gauche 
function dessinerRaquette2() {

	context.beginPath();
	context.rect(positionXRaquette2 , positionYRaquette2 , longueurRaquette2 , largeurRaquette2);
	context.fillStyle = couleurRaquette;
	context.fill();

}

function animerBalle() {

	ballePositionX = ballePositionX + bx;
	ballePositionY = ballePositionY + by;

	if (ballePositionX+tailleBalle >= terrainLongueur || ballePositionX<= 0+tailleBalle)
	{
		bx*=-1;
	}

	if (ballePositionY+tailleBalle >= terrainLargeur || ballePositionY<= 0+ tailleBalle) 
	{
		by*=-1;
	}

}

function animerRaquette() {

	//Droite
	if (positionYRaquette<=275)
	{
		positionYRaquette += deplacer;
	}

	if (positionYRaquette <= 0) 
	{
		positionYRaquette -= deplacer;
	}

	if (positionYRaquette>=275)
	{
		positionYRaquette += deplacer;
	}

	if (positionYRaquette >= 545) 
	{
		positionYRaquette -= deplacer;
	}

	//Gauche
	if (positionYRaquette2<=275)
	{
		positionYRaquette2 += deplacer2;
	}

	if (positionYRaquette2 <= 0) 
	{
		positionYRaquette2 -= deplacer2;
	}

	if (positionYRaquette2>=275)
	{
		positionYRaquette2 += deplacer2;
	}

	if (positionYRaquette2 >= 545) 
	{
		positionYRaquette2 -= deplacer2;
	}
}

function collisionRaquette() {

//Dessus Droite
    if((ballePositionX+tailleBalle==positionXRaquette
        &&ballePositionY+tailleBalle>positionYRaquette
        &&ballePositionY+tailleBalle<=positionYRaquette+largeurRaquette)
        ||(ballePositionX-tailleBalle==positionXRaquette+longueurRaquette
        &&ballePositionY+tailleBalle>positionYRaquette
        &&ballePositionY+tailleBalle<=positionYRaquette+largeurRaquette))
    {
        bx=-1;
    }

    //Dessus Gauche
    if((ballePositionX+tailleBalle==positionXRaquette2
        &&ballePositionY+tailleBalle>positionYRaquette2
        &&ballePositionY+tailleBalle<=positionYRaquette2+largeurRaquette2)
        ||(ballePositionX-tailleBalle==positionXRaquette2+longueurRaquette2
        &&ballePositionY+tailleBalle>positionYRaquette2
        &&ballePositionY+tailleBalle<=positionYRaquette2+largeurRaquette2))
    {
        bx=+1;
    }

}

function principale() {

	context.clearRect(0,0,terrainLongueur,terrainLargeur);
	animerBalle();
	animerRaquette();
	dessinerRaquette2();
	dessinerRaquette();
	dessinerBalle();
	collisionRaquette();
	afficherScoreD();
	ScorePartie();
	afficherScoreG();
}



//FONCTION ONKEY
function OnKeyDown(event) {
	//UP et DOWN	
	if (event.keyCode == '40')
	{
		deplacer = 2;
	}
		
	if (event.keyCode == '38')
	{
		deplacer = -2;
	}

	//Z et S
	if (event.keyCode == '83') 
	{
		deplacer2 = 2;
	}

	if (event.keyCode == '90')
	{
		deplacer2 = -2;
	}
}

function OnkeyUp(event) {
	//UP et DOWN
	if (event.keyCode == '40') 
	{
		deplacer = 0;
	}

	if (event.keyCode == '38') 
	{
		deplacer = 0;
	}

	//Z et S
	if (event.keyCode == '83') 
	{
		deplacer2 = 0;
	}

	if (event.keyCode == '90')
	{
		deplacer2 = 0;
	}

}

function OnKeyPressed(event) {

	 if (event.keyCode == '32') 
	 	{
	 		stop++
	 	}

	 if (stop ==1)
	  	{
			if (event.keyCode == '32')
			{
				play = setInterval(function(){principale();},5);
			}
		}	

	if (stop ==2) 
	{
		if (event.keyCode == '32')
		{
			stop = 0;
			clearInterval(play);
		}
	}
}

function afficherScoreD() {

	scd = "SCORE Droite :"+" "+ scoreD;
	document.getElementById('ScoreDroite').innerHTML= scd;
}

function afficherScoreG() {

	scg = "SCORE Gauche :"+" "+ scoreG;
	document.getElementById('ScoreGauche').innerHTML = scg;
}

function ScorePartie() {
	if (ballePositionX == positionXRaquette + 3 ) 
	{
 		clearInterval(play);
 		
 		alert("joueur de droite a perdu!");
 		context.clearRect(0,0,terrainLongueur,terrainLargeur);
 		scoreG++;
		ballePositionY = 302;
		ballePositionX = 576;
		positionXRaquette = 1135;
		positionYRaquette = 275;
		positionXRaquette2 = 8;
		positionYRaquette2 = 275;
		dessinerBalle();
		principale();
		
	}

 	if (ballePositionX == positionXRaquette2 - 3 ) 
 	{
 		clearInterval(play);
 		
 		alert("joueur de gauche a perdu!");
 		context.clearRect(0,0,terrainLongueur,terrainLargeur);	
 		scoreD++; 		
 		ballePositionX = 576;
		ballePositionY = 302;
		positionXRaquette = 1135;
		positionYRaquette = 275;
		positionXRaquette2 = 8;
		positionYRaquette2 = 275;
		bx =- 1;
		dessinerBalle();
		principale();
	
 	}	

 	if (scoreD == 5 || scoreG == 5) 
 	{
 		clearInterval(play);
 		if (scoreD == 5) 
 		{
 			alert("Joueur de Droite a gagner !");
 			context.clearRect(0,0,terrainLongueur,terrainLargeur);
 			window.refresh();
 		}
 		else if (scoreG == 5) 
 		{
 			alert("Joueur de Gauche a gagner !");
	  		context.clearRect(0,0,terrainLongueur,terrainLargeur);	
	  		window.refresh();
 		}
 	}
}