const article = document.querySelector('article');
const collegues = [
    "Antoine Ghysens",
    "Aurore Remy",
    "Baptiste Geron",
    "Batsheeba Deepijan",
    "Bruno Presti",
    "Fabrice Castrogiovanni",
    "Francis François",
    "Frederic Van Overmeire",
    "JC Molhant",
    "Maxim K.",
    "Michael Tesfay",
    "Philippe Meulemans",
    "Raoni Gillet",
    "René",
    "Rouslan Boyko",
    "Stephane Genet",
    "Thomas Beckers",
    "Tiffany Dessouroux",
];

const addNewArticle = (learner) => {
    let newSection = document.createElement('section');
    let newP = document.createElement('p');
    let newText = document.createTextNode(learner);
    newP.appendChild(newText);
    newSection.appendChild(newP);
    let colorChoice = colorPicker();
    newSection.style.backgroundColor = colorChoice.color;
    newSection.style.color = colorChoice.brightness > 140 ? "black" : "white";
    article.appendChild(newSection);
}