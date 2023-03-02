import { createMainPage, createPopularNews } from './js/sendrequest';

import { mobileMenu } from './js/mobileMenu';

import { startWeatherApp } from './js/weather';

import { getCategories } from './js/categories';

const inputSearch = document.getElementById('searchForm');

getCategories();

startWeatherApp();

createPopularNews();


inputSearch.addEventListener('submit', createMainPage);

import './js/read-show-hide';