'use strict';

/****************données********************/
let zoneTexte = document.querySelector('#zonetexte');
const bouton = document.querySelector('button');
let divModifiable = document.querySelector('#modifiable');
let backgroundColors = document.getElementById("backgroundColors") ;
let fontColors = document.getElementById("fontColors");
let fontSizes = document.getElementById("fontSizes");
let afficheurFontsize = document.getElementById("afficheurFontsize");
afficheurFontsize.innerHTML = fontSizes.value;

/****************fonctions******************/
function onClickTester()
{
	const choix = document.querySelector('input[type=radio]:checked');
	switch(choix.value)
	{
		case 'add':
          add();      
          updateListe();
            break;
		case 'insertAt':
            insert();
            updateListe();
            break;
		case 'remove':
            remove();
            updateListe();
            break;
		case 'replace':
            replace(); 
            updateListe();
            break;
	}	
}


function replace() {
    let index = liste.selectedIndex;
    let paragraphe = document.createElement('p');
    let leTexte = document.createTextNode(zoneTexte.value);
    paragraphe.setAttribute("style", "background-color:"+backgroundColors.value+ ';' + "color:"+fontColors.value+";" + "font-size:"+fontSizes.value+"px;");
    paragraphe.appendChild(leTexte);
    divModifiable.replaceChild(paragraphe,divModifiable.childNodes[index]);     
}


function remove() {
    let index = liste.selectedIndex;
    divModifiable.removeChild(divModifiable.childNodes[index]);          
}


function insert() {
    let index = liste.selectedIndex;
    let paragraphe = document.createElement('p');
    let leTexte = document.createTextNode(zoneTexte.value);
    console.log(leTexte);
    paragraphe.setAttribute("style", "background-color:"+backgroundColors.value+ ';' + "color:"+fontColors.value+";" + "font-size:"+fontSizes.value+"px;");
    paragraphe.appendChild(leTexte);
    divModifiable.insertBefore(paragraphe, divModifiable.childNodes[index]);
}



function add() {
    console.log('Un ajout');
     let paragraphe = document.createElement('p');
     let leTexte = document.createTextNode(zoneTexte.value);
     console.log(leTexte);
     paragraphe.setAttribute("style", "background-color:"+backgroundColors.value+ ';' + "color:"+fontColors.value+";" + "font-size:"+fontSizes.value+"px;");
     paragraphe.appendChild(leTexte);
     divModifiable.appendChild(paragraphe);
        
}


function updateListe() {
    const liste = document.querySelector('#liste');
    liste.innerHTML="";
    let nombreDeParagraphes = divModifiable.childNodes.length;

    for (let i = 1; i <= nombreDeParagraphes; i++) {
        let option = document.createElement('option');
        option.textContent = i  ;
        liste.appendChild(option);  
    }
}

function afficheFontSize() {
    
    fontSizes.oninput = function() {
        afficheurFontsize.innerHTML = this.value;
      }

    
}
 
function onClickAdd(){
    bouton.innerHTML="Ajouter";
}
function onClickRemove(){
    bouton.innerHTML="Supprimer ";
}
function onClickInsertAt(){
    bouton.innerHTML="Insérer";
}
function onClickReplace(){
    bouton.innerHTML="Remplacer";
}


/************code principal ***************/

bouton.addEventListener('click',onClickTester);
let choixAdd = document.querySelector('#add').addEventListener('click',onClickAdd);
let choixRemove = document.querySelector('#remove').addEventListener('click',onClickRemove);
let choixInsertAt = document.querySelector('#insertAt').addEventListener('click',onClickInsertAt);
let choixReplace = document.querySelector('#replace').addEventListener('click',onClickReplace);
afficheFontSize();