const tableauDeContact =[];

class Contact{
	constructor(nom,prenom){
	this.prenom = prenom;
	this.nom = nom;
}
decrire (){
	return `nom : ${this.nom}, prenom : ${this.prenom}`
	};
};
tableauDeContact.push(new Contact("Lévisse","Carole"));
tableauDeContact.push(new Contact("Nelsonne","Mélodie"));


let choix ="";
console.log("Bienvenue dans le gestionnaire des contacts");
while (choix!=="0")
{
	console.log(" 1 : lister les contats");
	console.log(" 2 : ajouter un contact");
	console.log(" 0 : Quitter");
	choix = prompt("choissisez une option");
	switch (choix){
	case "1":
		console.log("voici la liste de tous vos contacts");
		tableauDeContact.forEach(contact =>
		{console.log(contact.decrire())});
	break;
	case "2":
		nouveauNom = prompt("entrer le nom du contact");
		nouveauPrenom = prompt("entrer le prénom du contact");
		console.log("Le nouveau contact a été ajouter");
		tableauDeContact.push(new Contact(nouveauNom,nouveauPrenom));
	break;
	case "0":
		console.log("Aurevoir!");
	break;
	default:
		console.log("Choix incompris");
}
}
