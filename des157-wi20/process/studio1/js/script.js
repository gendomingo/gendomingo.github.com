
(function(){
	'use strict'
	// listen for the submission of the form
	document.getElementById("form").addEventListener("submit", function(event){
		// prevent the default behavior
		event.preventDefault();

		// get all the text fields from the form
		const formData = document.querySelectorAll("input[type=text]");
		// create an array to hold values from the form
		const words = [];

		//loop through the fields and add the words to the array, one at a time.
		for( let i=0; i<formData.length; i++){
			words.push(formData[i].value);    
		}
		//You can see the array in the console, if you want...
		console.log(words);

		//run a function to put the words into the madlib... Function below...
		//Pass the array of words the user typed into the function
		submit(words);

	});

	//This function takes an array input, then constructs the madlib, peppering
	//in the user's words where necessary.
	function submit(theWords){
        const madlib = `Welcome to the Wizarding World, ${theWords[0]}! <br> 
        A ${theWords[1]} year old student at Hogwarts School, who loves to ${theWords[2]} and owns a ${theWords[3]}.
        <br>
        The most ${theWords[4]} student in Hogwarts School. 
        </p>`;

		//Get the madlib container
		const mlContainer = document.getElementById('madlib');

		//Change the guts of the container to your madlib
		mlContainer.innerHTML = `<p>${placeholder}</p>`;

		//change the class on the madlib container so you can see it.
		mlContainer.setAttribute("class", "visible");
	}

	/*******************************
	TO DO:
	1. Add interesting graphics/fun madlib content/theme
	2. Change styling (add fonts from google fonts, colors, etc)
	3. Change the way the madlib appears (add a css animation?)
	4. Adjust JS to suit your madlib
	5. Refactor JS (put in external script file, put in enclosure, 
	change var to const or let, etc.)
	6. Have fun!
	*********************************/
}());


        