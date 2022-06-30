import {getResource} from '../services/services.js';

function cards() {
    class MenuCard {
        constructor(src, altimg, title, description, price, parentSelector) {
            this.src = src;
            this.alt = altimg;
            this.title = title;
            this.description = description;
            this.price = price;
            this.transfer = 32;
            this.parent = document.querySelector(parentSelector);
        }

        convertCurrency() {
            this.price = this.price * this.transfer;       
        }

        render() {
            this.convertCurrency();
            const element  = document.createElement('div');
            element.innerHTML = `
                <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
            `;
            this.parent.append(element);
        }
    };

    getResource('https://api.jsonbin.io/b/62bca434192a674d2920f6e6')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });
};

export default cards;