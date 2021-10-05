//var last = document.querySelector('ol').lastElementChild
//li.parentElement.insertBefore(last, li) 

//Put the last child of ol on the begining of the list
const ol = document.querySelector('ol');
const li = document.querySelector('ol').children;
const lastChild = li[li.length - 1];
ol.insertBefore(lastChild, li[0]);