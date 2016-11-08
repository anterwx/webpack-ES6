/*
require('./css/main.scss');
var sub = require('./js/sub');
var $ = require('jquery');
var moment = require('moment');
var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World</h1>';
app.appendChild(sub());
1
1111!$('body').append('<p>look at me! now is ' + moment().format() + ' </p>');

*/

import './css/main.scss';
import generateText from './js/sub';
import $ from 'jquery';
import moment from 'moment';

let app = document.createElement('div');
const myPromise = Promise.resolve(42);
myPromise.then((number) =>{
    $('body').append('<p>promise result is ' + number + ' now is ' + moment().format() + '</p>');
});

app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
app.appendChild(generateText());

