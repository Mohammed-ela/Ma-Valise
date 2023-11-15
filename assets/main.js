// Reset le formulaire 
function reset(event) {
    event.preventDefault();
    document.getElementById("Mavaliseform").reset();
    document.getElementById("ListeAffairesdiv").style.display = "none";
}

//fct pour affiché la liste de nos affaire en fonction de certaine condition dans un tableau
function generatePackingList() {
    // on stock les valeurs du formulaire saisie par l'utilisateur (nb nuit et climat)
    const numNights = document.getElementById("numNights").value;
    const climate = document.getElementById("climate").value;

    // Vérifier si le nombre de nuits est valide
    if (numNights <= 0) {
        alert("Veuillez rentré un nombre de nuit valide");
        return;
    }

    // le nombre articles max vaut 10
    const maxItems = 10;

    // initialise un tableau vide quon va stocker des affaires
    let packingList = [];

    // Ajouter le sac à dos/valise a chaque fois 
    packingList.push("Un sac à dos ou une valise");

    // Ajouter le nombre de paires de chaussettes
    if (numNights == 1) {
        packingList.push(`${numNights} paire de chaussette`);
    } else {
        packingList.push(`${numNights} paires de chaussettes`);
    }

   

    // Ajouter le nombre de sous-vêtements
    packingList.push(`${numNights} sous-vêtement`);

    // Ajouter le nombre de t-shirts
    packingList.push(`${numNights} t-shirt `);

    // Ajouter le nombre de pulls/sweats en fonction du nombre de nuits
    let numPulls;
    if (numNights < 4) {
        numPulls = 1;
    } else if (numNights >= 4 && numNights <= 6) {
        numPulls = 2;
    } else {
        numPulls = 3;
    }
    packingList.push(`${numPulls} pull ou sweat`);

    // Ajouter le nombre de pantalons en fonction du nombre de nuits
    let numPants;
    if (numNights < 4) {
        numPants = 1;
    } else if (numNights >= 4 && numNights <= 6) {
        numPants = 2;
    } else {
        numPants = 3;
    }
    packingList.push(`${numPants} Nombre de pantalons`);


    // Chaussures ?
    if (numNights >= 6) {
        packingList.push(`1 paire de chaussure`);
    }
    

    // Ajouter en fonction du climat :
    if (climate === "hot") {
        packingList.push("1 tong ou claquette");
    } else if (climate === "cold") {
        packingList.push("1 veste");
        packingList.push("gants et bonnets");
        if (numNights > 10) {
            packingList.push("Faites des machines. Voyagez léger !");
        }
    }

    // Afficher la liste des affaires dans le ul en ajoutant des li
    const listContainer = document.getElementById("ListeAffaires");
    listContainer.innerHTML = "";
    // je parcours le tableau , ajoute des li avec createelement a chaque donnée du tableau , et je append pour ajouté a la suite
    packingList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        listContainer.appendChild(li);
    });

    // Afficher la div contenant la liste des affaires avec display block
    document.getElementById("ListeAffairesdiv").style.display = "block";
}






// Lorsque mon formulaire est lancé :
document.getElementById("Mavaliseform").addEventListener("submit", function (e) {
    //j'evite le chargement de la page 
    e.preventDefault();
    //j'appel ma fonction qui gere les affaires
    generatePackingList();
});
