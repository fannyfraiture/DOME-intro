let docTitle = document.title;
console.log(docTitle);
docTitle = "Modifying the DOM";
console.log(docTitle);
for (let childNode of document.body.childNodes) {
    console.log(childNode);
}
/**
 * Math.floor(Math.random()* 256) formule pour avoir une couleur random rgb, 256 car le max n'est pas inclu, donc +1 car rgb s'arr à 255
 * .toString c'est pour transformer un nombre en text
 *  if (i==2) car c'est le dernier tour, on doit s'arreter à 3 mais vu qu'on commence à 0
 */
const background = () => {
    let color = "rgb(";
    for (let i=0; i<3; i++) {
        if (i==2) color += Math.floor(Math.random()* 256).toString() + ")";
        else color += Math.floor(Math.random()* 256).toString() +", ";
    }
    return color;

} 

document.body.style.backgroundColor = background();