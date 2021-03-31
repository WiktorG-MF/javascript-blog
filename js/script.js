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
  /* remove contents of titleList */
  /* ... */
  document.querySelector(optTitleListSelector).innerHTML = '';
  /* find all the articles and save them to variable: articles */
  /* ... */
  const articles = document.querySelectorAll(optArticleSelector);

  let html = '';

  for(let article of articles){
    /* get the article id */
    /* ... */
    const articleId = article.getAttribute('id');
    /* find the title element */
    /* ... */
    const articleTitle = article.querySelector(optTitleSelector);
    /* get the title from the title element */
    /* ... */
    const titleContent = articleTitle.innerHTML;
    /* create HTML of the link */
    /* ... */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + titleContent + '</span></a></li>';
    console.log(linkHTML);
    /* insert link into html variable */
    html = html + linkHTML;
  }
  const titleList = document.querySelector(optTitleListSelector);

  titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
}
  generateTitleLinks();