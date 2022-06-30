function scroll(buttonSelector, scrollToSelector) {
    const menuButtonScroll = document.querySelector(buttonSelector);
    const menuCards = document.querySelector(scrollToSelector);

    const scrollTo = (element) => {
        window.scroll({
            left: 0, 
            top: element.offsetTop, 
            behavior: 'smooth'
        })
    };

    menuButtonScroll.addEventListener('click', () => scrollTo(menuCards));

};

export default scroll;