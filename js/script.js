'use strict';

function titleClickHandler(event){
  event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked')
  
  
// [DONE]  remove class 'active' from all article links

const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  console.log("pętla usunięcie");
  activeLink.classList.remove('active');
}

//   remove class 'active' from all articles 

const activeArticles = document.querySelectorAll('.post');

for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}
//  [In PROGRESS] add class 'active' to the clicked link

console.log('clickedElement:', clickedElement);
console.log('clickedElement (with plus): ' + clickedElement);
clickedElement.classList.add('active');
console.log('clickedElement:', clickedElement);

//   get 'href' attribute from the clicked link

let articleSelector = clickedElement.getAttribute('href');
console.log(articleSelector);

//   find the correct article using the selector (value of 'href' attribute)

let correctArticle = document.querySelector(articleSelector);
console.log(correctArticle);

//   add class 'active' to the correct acticle

correctArticle.classList.add('active');

}
const links = document.querySelectorAll('.titles a');
  
for(let link of links){
  link.addEventListener('click', titleClickHandler);
}