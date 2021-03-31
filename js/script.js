'use strict';

function titleClickHandler(event){
  event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked')

const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  console.log("pętla usunięcie");
  activeLink.classList.remove('active');
}

const activeArticles = document.querySelectorAll('.post');

for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}

console.log('clickedElement:', clickedElement);
clickedElement.classList.add('active');
console.log('clickedElement:', clickedElement);

let articleSelector = clickedElement.getAttribute('href');
console.log(articleSelector);

let correctArticle = document.querySelector(articleSelector);
console.log(correctArticle);

correctArticle.classList.add('active');
}

// Generate Title Links

const optArticleSelector = '.post',
optTitleSelector = '.post-title',
optTitleListSelector = '.titles';

function generateTitleLinks(){

document.querySelector(optTitleListSelector).innerHTML = '';

const articles = document.querySelectorAll(optArticleSelector);
for(let article of articles){

  const articleId = article.getAttribute('id');

  const articleTitle = article.querySelector(optTitleSelector).innerHTML;

  const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
  console.log(linkHTML);

  const titleList = document.querySelector(optTitleListSelector);

  titleList.insertAdjacentHTML('beforeend', linkHTML);
  
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
  }

generateTitleLinks();

