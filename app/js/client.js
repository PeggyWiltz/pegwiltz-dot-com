'use strict';

require('angular/angular');
require('angular-route/angular-route');

var myPage = angular.module('myPageApp', []);

//directives
require('./directives/mainDirective.js')(myPage);
require('./directives/contactDirective.js')(myPage);
