//var last = document.querySelector('ol').lastElementChild
//li.parentElement.insertBefore(last, li) 

//Put the last child of ol on the begining of the list
const ol = document.querySelector('ol');
const li = document.querySelector('ol').children;
const lastChild = li[li.length - 1];
ol.insertBefore(lastChild, li[0]);

//Put the h2 of the thirdSection in the secondSection
//Spécifié l'id des sections dans l'html
const h2 = document.querySelectorAll("h2");
const secondSection = h2[1].parentNode;
const thirdSection = h2[2].parentNode;
secondSection.insertBefore(h2[2], h2[1]);
thirdSection.insertBefore(h2[1], thirdSection.firstChild);

//Delete the last section from the DOM, we don't need it anyways
const section = document.getElementById("second");
section.remove();