'use strict';

const burgerBtn = document.querySelector('.js-burger-btn'),
    navigation = document.querySelector('.js-navigation'),
    navigationClose = document.querySelector('.js-navigation-close');


burgerBtn.addEventListener('click', () => {
    navigation.style.right = '0';
});

navigationClose.addEventListener('click', () => {
    navigation.style.right = '';
});