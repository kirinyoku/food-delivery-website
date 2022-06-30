function openModal(modalSelector, modalTimerId) {
    const modalWindow = document.querySelector(modalSelector);
    modalWindow.style.display = 'block';
    document.body.style.overflow = 'hidden';
    if (modalTimerId) {
        clearInterval(modalTimerId);
    };       
};

function closeModal(modalSelector) {
    const modalWindow = document.querySelector(modalSelector);
    modalWindow.style.display = 'none';
    document.body.style.overflow = '';    
};

function modal(triggerSelector, modalSelector, modalTimerId) {
    const openModalWindow = document.querySelectorAll(triggerSelector),
          modalWindow = document.querySelector(modalSelector);

    modalWindow.addEventListener('click', (event) => {
        if (event.target === modalWindow || event.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);        
        }
    });

    openModalWindow.forEach(item => {
        item.addEventListener('click', () => {
            openModal(modalSelector, modalTimerId);
            clearTimeout(modalTimerId);       
        });
    });


    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            clearTimeout(timerId);
        };
    }

    window.addEventListener('scroll', showModalByScroll);
};

export default modal;
export {closeModal};
export {openModal};