import {closeModal, openModal} from './modal.js';
import {postData} from '../services/services.js';

function forms(formSelector, modalTimerId) {
    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/form/spinner.svg',
        success: "Дякуємо! Очікуйте дзвінка менеджера",
        failure: 'Щось пішло не так... Спробуйте, будь ласка, ще раз.'    
    };

    forms.forEach(item => {
       bindPostData(item);  
    });

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('#', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();    
            }).catch(() => {
                showThanksModal(message.failure);    
            }).finally(() => {
                form.reset();
            });
        });
    };

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        
        prevModalDialog.style.display = 'none';
        openModal('.modal', modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class='modal__content'>
                <div class='modal__close' data-close>&times;</div>
                <div class='modal__title'>${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.style.display = 'block';
            closeModal('.modal');
        }, 4000);
    };

    fetch('https://api.jsonbin.io/b/62bca434192a674d2920f6e6').then(data => data.json()).then(res => console.log(res));
};

export default forms;