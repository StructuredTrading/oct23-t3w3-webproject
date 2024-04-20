// Declare JS data that we want to store 
let cssThemes = [

];

let pageTheme = "dark";



/**
 * Retrieve, assign, and return the latest stored CSS theme list from the browser localstorage.
 * @date 'April 20th 2024, 10:23:11 am'
 * @author Structured Trading
 *
 * @returns Array of objects.
 */
function getStoredCssThemes(){
	// Update the cssTheme array
	let rawJsonStringCssThemes = localStorage.getItem("cssThemes");
	cssThemes = JSON.parse(rawJsonStringCssThemes);
	// Return the updated data 
	return cssThemes;
}



/**
 * Retrieve, assign, and return the latest stored page theme from the browser localstorage.
 * @date 'April 20th 2024, 10:22:38 am'
 * @author Structured Trading
 *
 * @returns String. Should be "light" or "dark".
 */
function getStoredPageTheme(){
    pageTheme = localStorage.getItem("pageTheme")
    return pageTheme;
}

// Create/Update localstorage
function setCssThemesToStorage() {
    let dataAsJasonString = JSON.stringify(cssThemes);
    localStorage.setItem("cssThemes", dataAsJasonString)
}


/*

cssThemes = [
	{
		name: "blah blah 100",
		hex: "000000"
	},
	{
		name: "blah blah 100",
		hex: "000000"
	}
]

"[[Object object], [Object object]]"

JSON.stringify(cssThemes);

"[{'name':'blah blah 100', 'hex': '000000'}, {'name':'blah blah 100', 'hex': '000000'}]""

*/



// Delete localstorage 