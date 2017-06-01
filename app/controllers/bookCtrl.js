"use strict";
console.log("bookCtrl");
app.controller("bookCtrl", function($scope, bookFactory){
	let thoseBooks = [];
	bookFactory.getBooks()
	.then(function(itemCollection){
		
        $scope.books = itemCollection.guides;
        console.log("books", $scope.books);
     });
});