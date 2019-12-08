let baseURL = location.protocol + '//' + location.host + '/api';

window._ = require('lodash');

try {
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}


window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.baseURL = baseURL;

