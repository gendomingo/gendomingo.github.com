
    "use strict"

    //the parallax scrolling method
    const parallax = document.getElementById ("article");

    window.addEventListener("scroll", function(){
        let offset = window.pageYOffset;
            parallax.style.backgroundPositionY = offset * 0.7 + "px";
    });

    //Some "Did you know facts" on section 2 and 6
    const bttn = document.querySelector("#button1");
    const btn = document.querySelector("#button2");
    const answer2 = document.querySelector(".answer2");
    const answer6 = document.querySelector(".answer6"); 

    bttn.addEventListener("click", function(){
        answer2.innerHTML=`Because they absorb carbon dioxide and give out oxygen.
        They provide us our necessities such as wood and paper. And also, they provide shelter for different kinds of animals particularly wild animals`;
    });

    btn.addEventListener("click", function(){
        answer6.innerHTML=`Because trees absorb carbon dioxide, and without them, carbon dioxide will fill up the whole atmosphere resulting to global warming. Trees are also responsible for preventing soil erosion, if storm came and there are no trees, it will result to flooding. <br> Other factors include agricultural expansion, mining and forest fire`; 
        

    });



    // parallax3 items
    var tissue = document.querySelector('#tissue');
    var book = document.querySelector('#book');
    var desk = document.querySelector('#desk');
    var house = document.querySelector('#house');

    // Description box overlay
    var tissueoverlay = document.querySelector('#tissueoverlay');
    var bookoverlay = document.querySelector('#bookoverlay');
    var deskoverlay = document.querySelector('#deskoverlay');
    var houseoverlay = document.querySelector('#houseoverlay');

    // Close affordance
    var tissueclose = document.querySelector('#tissueclose');
    var bookclose = document.querySelector('#bookclose');
    var deskclose = document.querySelector('#deskclose');
    var houseclose = document.querySelector('#houseclose');


    tissue.addEventListener('click', function() {
    tissueoverlay.style.display = 'block';
    }, false);
    tissueclose.addEventListener('click', function() {
    tissueoverlay.style.display = 'none';
    }, false);
      
    book.addEventListener('click', function() {
    bookoverlay.style.display = 'block';
      }, false);
    bookclose.addEventListener('click', function() {
    bookoverlay.style.display = 'none';
      }, false);
      
    desk.addEventListener('click', function() {
    deskoverlay.style.display = 'block';
      }, false);
    deskclose.addEventListener('click', function() {
    deskoverlay.style.display = 'none';
      }, false);

    house.addEventListener('click', function() {
    houseoverlay.style.display = 'block';
          }, false);
    houseclose.addEventListener('click', function() {
    houseoverlay.style.display = 'none';
          }, false);




    //top button scroll
    const topbutton = document.getElementById("topbutton");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topbutton.style.display = "block";
        } else {
            topbutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    topbutton.onclick = function (){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    //carbon dioxide effect

    const carbon = document.querySelector("#sketch1");
    function setup(){
        const myCanvas = createCanvas(windowWidth,500);
        frameRate(8);
        noStroke();
        myCanvas.parent(carbon);
    }

    function draw(){
        if(mouseIsPressed){
            fill(random(225),random(225),random(225), random(225));
        }
        else {
            fill(random(225),random(225),random(225), random(225));
        }
        const circSize = random(50);
        ellipse(mouseX, mouseY, 50, 50);
    }

    //changing background
    const switchBackground = document.getElementById('parallax8');

    switchBackground.addEventListener('mouseover', function(){
        switchBackground.style.backgroundColor = "darkgray";
    });
    switchBackground.addEventListener('mouseout', function(){
        switchBackground.style.backgroundColor = "#84cc97";
    });

    //planting trees
    const replant = document.getElementById('replant');

    replant.addEventListener('mouseover', function(){
        replant.src = "images/trees.svg";
    });
    replant.addEventListener('mouseout', function(){
        replant.src = "images/seedlings.svg";
    });

