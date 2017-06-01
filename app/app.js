"use strict";

var app = angular.module("bookApp",['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: './partials/main.html',
		controller: 'bookCtrl'
	}).
	otherwise('/');
});