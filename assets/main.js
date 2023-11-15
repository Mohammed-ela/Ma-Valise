// Reset le formulaire 
function reset(event) {
    event.preventDefault();
    document.getElementById("Mavaliseform").reset();
    document.getElementById("ListeAffairesdiv").style.display = "none";
}

//fct pour affiché la liste de nos affaire en fonction de certaine condition dans un tableau
function generatePackingList() {

    // initialise un tableau vide quon va stocker des affaires
    let packingList = [];
    // le nombre articles max vaut 10
    const maxItems = 10;
    // on stock les valeurs du formulaire saisie par l'utilisateur (nb nuit et climat) 
    //nb nuit est compris entre 1 et 10 maximum
    const numNights = Math.min(parseInt(document.getElementById("numNights").value),maxItems);
    const climate = document.getElementById("climate").value;
    // valeur non modifié pour affiché msg si numNights sup a 10 
    const numNightsdepart = document.getElementById("numNights").value;
    if (numNightsdepart > 10) {
        packingList.push("Faites des machines. Voyagez léger !");
    }
    // Vérifier si le nombre de nuits est valide
    if (numNights <= 0) {
        alert("Veuillez rentré un nombre de nuit valide");
        return;
    }


    // Ajouter le sac à dos/valise a chaque fois 
    packingList.push("Un sac à dos ou une valise");

    // Ajouter le nombre de paires de chaussettes
    if (numNights == 1) {
        packingList.push(`${numNights} paire de chaussette`);
    } else {
        packingList.push(`${numNights} paires de chaussettes`);
    }


   

    // Ajouter le nombre de sous-vêtements

    if (numNights == 1) {
        packingList.push(`${numNights} sous-vêtement`);
    } else {
        packingList.push(`${numNights} sous-vêtements`);
    }
    

    // Ajouter le nombre de t-shirts
    if (numNights == 1) {
        packingList.push(`${numNights} t-shirt `);
    } else {
        packingList.push(`${numNights} t-shirts `);
    }
   

    // Ajouter le nombre de pulls/sweats en fonction du nombre de nuits
    let numPulls;
    if (numNights < 4) {
        numPulls = 1;
    } else if (numNights >= 4 && numNights <= 6) {
        numPulls = 2;
    } else {
        numPulls = 3;
    }
        // j'ajoute en fonction du nb 
        if (numPulls == 1) {
            packingList.push(`${numPulls} pull ou sweat`);
        } else {
            packingList.push(`${numPulls} pulls ou sweats`);
        }
    

    // Ajouter le nombre de pantalons en fonction du nombre de nuits
    let numPants;
    if (numNights < 4) {
        numPants = 1;
    } else if (numNights >= 4 && numNights <= 6) {
        numPants = 2;
    } else {
        numPants = 3;
    }

     // j'ajoute en fonction du nb 
     if (numPulls == 1) {
        packingList.push(`${numPants} pantalon`);
    } else {
        packingList.push(`${numPants} pantalons`);
    }
   


    // Chaussures ?
    if (numNights >= 6) {
        packingList.push(`1 paire de chaussures`);
    }
    

    // Ajouter en fonction du climat :
    if (climate === "moderate") {
        packingList.push("1 veste");
    }
    if (climate === "hot") {
        packingList.push("1 tong ou claquette");
    } else if (climate === "cold") {
        packingList.push("1 veste");
        packingList.push("1 paire de gants et bonnets");
    }

    // Afficher la liste des affaires dans le ul en ajoutant des li
    const listContainer = document.getElementById("ListeAffaires");
    listContainer.innerHTML = "";
    // je parcours le tableau , ajoute des li avec createelement a chaque donnée du tableau , et je append pour ajouté a la suite
    packingList.forEach((item, index) => {
        const li = document.createElement("li");
    
        // Ajouter une case à cocher
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `item-${index}`;
    
        // Ajouter le texte de l'élément
        const label = document.createElement("label");
        label.htmlFor = `item-${index}`;
        label.textContent = item;
    
        // Ajouter la case à cocher et le texte à l'élément li
        li.appendChild(checkbox);
        li.appendChild(label);
    
        // Ajouter l'élément li au conteneur de liste
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
