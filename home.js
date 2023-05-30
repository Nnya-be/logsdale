'use strict';

//------------------   Class Selectors   --------------------------

///////////   HEADER SELECTORS /////////////////
const header = document.querySelector('.header');
const navigation = document.querySelector('.navigation');
const navigationItem = document.querySelector('.navigation__items');
const navigationLinks = document.querySelectorAll('.navigation__links');

///////////   ABOUT SELECTORS  /////////////////
const about = document.querySelector('.about');
///////////   DISPLAY SELECTORS  /////////////////
const display = document.querySelector('.display');
const displayHeader = document.querySelector('.display__heading');
const popular = document.querySelector('.popular');
const popularSearch = document.querySelector('.popular__search');
const popularSearchName = document.querySelector('.popular__search--name');

///////////   ACCOUNT SELECTORS  /////////////////

const account = document.querySelector('.accounts');
const accountHeader = document.querySelector('.accounts__header');
const accountCard = document.querySelector('.acc-card');
const accountCardHeader = document.querySelector('.acc-card__header');
const accountCardHeaderImg = document.querySelector('.acc-card__header--img');
const accountUserName = document.querySelector('.acc-card__name--username');
const accountProfileName = document.querySelector(
  '.acc-card__names--profilename'
);
const verify = document.querySelector('.acc-card__names--username-verify');
const description = document.querySelector('.acc-card__description');
const info = document.querySelector('.acc-card__info');
const infoFollowers = document.querySelector('.acc-card__info--followers');
const infoFollowersNumber = document.querySelector(
  '.acc-card__info--followers-number'
);
const infoFollowersText = document.querySelector(
  '.acc-card__info--followers-text'
);
const infoFollowing = document.querySelector('.acc-card__info--following');
const infoFollowingNumber = document.querySelector(
  '.acc-card__info--following-number'
);
const infoFollowingText = document.querySelector(
  '.acc-card__info--following-text'
);
const infoDate = document.querySelector('.acc-card__info--date');
 ////////////////////////////         USER  CLASS           //////////////////////////////////

 


////////////////////////////              HEADER CARD           //////////////////////////////////

navigation.addEventListener('click', function (e) {
    e.preventDefault();

  if(e.target.classList.contains('navigation__links')){
    const id = e.target.getAttribute('href');

    document.querySelector(id).scrollIntoView({
        behavior:'smooth',
        block:'center'
    });
  }
});

/*let options = {
    root:null,
    rootMargin: '0px',
    threshold: 0.1
}

const callback = function(entries){
    const [entry] = entries;

    if(!entry.isIntersecting){
        header.classList.add('sticky');
    }

    else header.classList.remove('sticky');

    
};

const observer1 = new IntersectionObserver(callback , options);
observer1.observe(about);*/
