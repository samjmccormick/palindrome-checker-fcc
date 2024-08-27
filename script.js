const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-button");
const result = document.getElementById("result");

/* const cleanInputString = (str) => {
	const regex = /[^abcdefghinklmnopqrstuvwxyz]/gi;
	const cleanString = str.replace(regex, '');
}; 

this was giving me an error because it 'replace' only works on strings and it doesn't know str is a string until an argument is passed, the new 
function below is giving the same error, but correctly outputs to the console

*/

function cleanInputString (str) {
	const regex = /[^abcdefghijnklmnopqrstuvwxyz]/gi;
	return str.replace(regex, '');
	/* tested and this removes all characters other than letters, including spaces */
}

function checkPalindromeArray (array) {
	for (let i = 0; i < (array.length / 2); i++) {
		if (array[i] !== array[array.length - i - 1]) {
			return false 
	} 
	} 
}


function checkPalindromeString (str) {
	const cleanString = cleanInputString (str);
	const stringArray = cleanString.split("");
	return checkPalindromeArray(stringArray);
}

function checkOutput (str) {
	if (checkPalindromeString(str) === false) {
		result.innerHTML = `
		<p><b>${str}</b> is not a palindrome.<p> `
	} else {
		result.innerHTML = `
		<p><b>${str}</b> is a palindrome.<p> `
	}
}

checkOutput('te5465stts446654et');

checkButton.addEventListener("submit", checkOutput(textInput));