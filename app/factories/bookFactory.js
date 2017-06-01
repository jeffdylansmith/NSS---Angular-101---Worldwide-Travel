"use strict";

app.factory('bookFactory', function($q, $http){
	let getBooks = () => {
		let books = []; 
		return $q((resolve, reject) => {
			$http.get('./data/guides.json')
			.then((itemObject) => {
				let itemCollection = itemObject.data;
				resolve(itemCollection);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};
	return {getBooks};

});