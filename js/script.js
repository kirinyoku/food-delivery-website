import tabs from './modules/tabs.js';
import timer from './modules/timer.js';
import modal from './modules/modal.js';
import cards from './modules/cards.js';
import calculator from './modules/calculator.js';
import forms from './modules/forms.js';
import slider from './modules/slider.js';
import scroll from './modules/scroll.js';
import {openModal} from './modules/modal.js';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 100000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer();
    modal('[data-modal]', '.modal', modalTimerId);
    cards();
    calculator();
    forms('form', modalTimerId);
    slider({
         slide: '.offer__slide',
         nextArrow: '.offer__slider-next',
         prevArrow: '.offer__slider-prev',
         totalCounter: '#total',
         currentCounter: '#current',
         wrapper: '.offer__slider-wrapper',
         field: '.offer__slider-inner'
    });
    scroll('#menu', '.menu');
});