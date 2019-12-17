/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web
var listesElt = document.createElement("ul");
listeLiens.forEach(function (lien)
{
	var listeElt = document.createElement("li");
	var liensElt = document.createElement("span");
	var titreElt = document.createElement("a");
	titreElt.textContent = lien.titre;
	titreElt.style.color = "#428bca";
	titreElt.href = lien.url;
	titreElt.style.marginRight= "5px";
	titreElt.style.textDecoration = "none";
	
	liensElt.textContent = lien.url;
    liensElt.appendChild(document.createTextNode(lien.url));
	
	listeElt.style.listStyleType = "none";
	listeElt.classList.add("lien");
	listeElt.appendChild(titreElt);
	listeElt.appendChild(liensElt);
	listeElt.appendChild(document.createElement("br"));
	listeElt.appendChild(document.createTextNode("Ajouter par "));
	listeElt.appendChild(document.createTextNode(lien.auteur));
	listesElt.appendChild(listeElt);
});
document.getElementById("contenu").appendChild(listesElt);

