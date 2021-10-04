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

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
}

const randColor = () => {
    let color = "rgb(";
    for (let i = 0; i < 3; i++) {
        if (i == 2) color += Math.floor(Math.random() * 256).toString() + ")";
        else color += Math.floor(Math.random() * 256).toString() + ", ";
    }
    return color;
};

const invertColor = color => {
    const splittedColor = color.split(",");
    // returns ['rgb(r', ' g', ' b)']
    // then we replace useless stuff with a void string
    const r = splittedColor[0].replace("rgb(", "");
    const g = splittedColor[1].replace(" ", ""); 
    const b = splittedColor[2].replace(" ", "").replace(")", "");
    // we also put them into an array to loop over it easily
    const rgb = [parseInt(r), parseInt(g), parseInt(b)];
    for (let i = 0; i < rgb.length; i++) rgb[i] = (i === 3 ? 1 : 255) - rgb[i];
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;

    shuffleArray(collegues);
const article = document.querySelector("article");
let newSection, newP, textToAppend;
for (let collegue of collegues) {
    const sectionBackgroundColor = randColor();
    const pColor = invertColor(sectionBackgroundColor);
    newSection = document.createElement("section");
    newP = document.createElement("p");
    textToAppend = document.createTextNode(collegue);
    newP.appendChild(textToAppend);
    newP.style.color = pColor;
    // Just because you're important I put your names in bold
    newP.style.fontWeight = "bold";
    newSection.appendChild(newP);
    newSection.style.backgroundColor = sectionBackgroundColor;
    article.appendChild(newSection);
}
}