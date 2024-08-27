const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

/* const cleanInputString = (str) => {
	const regex = /[^abcdefghinklmnopqrstuvwxyz]/gi;
	const cleanString = str.replace(regex, '');
}; 

this was giving me an error because it 'replace' only works on strings and it doesn't know str is a string until an argument is passed, the new 
function below is giving the same error, but correctly outputs to the console

*/

function cleanInputString (str) {
	const regex = /[^abcdefghijnklmnopqrstuvwxyz0123456789]/gi;
	return str.replace(regex, '');
	/* tested and this removes all characters other than letters and numbers (alphanumeric), including spaces */
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
	const lowerCaseString = cleanString.toLowerCase();
	const stringArray = lowerCaseString.split("");
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

checkButton.addEventListener("click", checkOutput(textInput.value));

/* dang they just used the 'reverse' function and checked if it was equal to the original, smart */
