
(function(){
	'use strict'
		var submit = document.getElementById("click");
		var closeLink = document.getElementById("close");
		var movePopUp = document.getElementById("move");
		var thePopUp = document.querySelector("div");


		submit.addEventListener("click", function(){
			thePopUp.className="fadein";
		});

		closeLink.addEventListener("click", function(){
			thePopUp.className="fadeout";
		});	  
	

			document.getElementById("myform").addEventListener("submit", function(event){
				event.preventDefault();
	
				var formData = document.querySelectorAll("input[type=text]");
				var words = [];
	
				for( var i=0; i<formData.length; i++){
					words.push(formData[i].value);    
				}.
				console.log(words);
	
				//run a function to put the words into the madlib... Function below...
				//Pass the array of words the user typed into the function
				makeMadLib(words);
	
			});
	
			//This function takes an array input, then constructs the madlib, peppering
			//in the user's words where necessary.
			function makeMadLib(theWords){
				var madlib = `Lorem ipsum dolor ${theWords[0]} sit amet consectetur adipisicing elit. Doloremque ${theWords[1]} iste  ratione cum amet! Vitae ${theWords[2]} earum dolorem nesciunt nam eos sunt, itaque alias, minima ${theWords[3]} explicabo repellendus animi sapiente nobis inventore doloremque? `;
	
				//Get the madlib container
				var mlContainer = document.getElementById('madlib');
	
				//Change the guts of the container to your madlib
				mlContainer.innerHTML = `<p>${madlib}</p>`;
	
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


        