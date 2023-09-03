import './scss/styles.scss';

import Choices from 'choices.js'

const dropdownHandler = (event) => {
    if (event.target.classList.contains('header__mobile')) {
        const dropdown = event.target.querySelector('.header__mobile-dropdown');
        if (!dropdown.classList.contains('active')) {
            dropdown.classList.add('active');
        } else {
            dropdown.classList.remove('active');
        }
    }
}

if (document.querySelector('.select__category')) {
    const select = document.querySelector('.select__category');
    const choices = new Choices(select, {
        loadingText: 'Загрузка...',
        noResultsText: 'Не найдено результатов поиска.',
        itemSelectText: 'Нажми для выбора'
    });
}

if (document.querySelector('.header__mobile')) {
    document.querySelector('.header__mobile').addEventListener('click', dropdownHandler)
}
