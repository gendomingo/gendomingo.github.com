
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
        answer6.innerHTML=`Because trees absorb carbon dioxide, and without them, carbon dioxide will fill up the whole atmosphere producing global warming. Trees are also responsible for preventing soil erosion, if storm came and there are no trees, it will result to flooding`; 

    });

       