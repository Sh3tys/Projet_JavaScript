// Récupère le premier 'Button' de l'index et le stock dans button.
// 'const' ne peux pas etre modifier variable constante.
const button = document.querySelector('button');
console.log(button);
console.dir(button);

// Variable qu'on peux changer ce qu'il y a 'let' [nom] = l'élément.
let myVar = 'teste'

// Affiche une pop-up quand button est cliqué sur le bouton.
button.onclick = function(){
    alert('You clicked me !');
};

let age = prompt('Quelle est votre age ?');

if (age >= 18){
    alert(`Tu es majeur avec ${age} ans`)
} else {
    alert(`Tu es mineur avec ${age} ans`)
}
let note1 = parsefloat(prompt("Entrer un chiffre:"))
let note2 = parsefloat(prompt("Entrer un chiffre:"))
let note3 = parsefloat(prompt("Entrer un chiffre:"))

let average = (not1 + note2 + note3)/3

