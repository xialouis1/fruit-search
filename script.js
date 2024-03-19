const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	// If parameter is empty, return an empty array.
	if(str.length === 0) {
		return [];
	}

	// Filter through fruit array to find parameter as a substring of a given element.
	// return filtered array
	return fruit.filter((fruit) => {
		return fruit.toLowerCase().indexOf(str.toLowerCase()) !== -1;	
	});
}

function searchHandler(e) {
	const inputString = input.value;
	const suggestions = search(inputString);

	showSuggestions(suggestions, inputString);
}

function showSuggestions(results, inputVal) {
	// Clear suggestions from DOM to avoid duplicate suggestions
	suggestions.innerHTML = "";

	// For each suggested result create an li element.
	// Replace substring of suggested fruit with bold text
	results.forEach((fruitName) => {
		const suggestion = document.createElement("li");
		const highlighted = fruitName.replace(
			new RegExp(inputVal, 'gi'), 
			(substring) => `<b>${substring}</b>`
		);
		suggestion.innerHTML = highlighted;
		suggestions.appendChild(suggestion);
	});
}

function useSuggestion(e) {
	// onClick, replace the input text with the target element's text.
	const selectedText = e.target.innerText;
	input.value = selectedText;

	// Clear suggestions from DOM
	showSuggestions([], selectedText);
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);