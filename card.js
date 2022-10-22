const question1 = document.querySelector(".question1");
const arrow1 = document.querySelector(".arrow1");
const answer1 = document.querySelector(".answer1");

const question2 = document.querySelector(".question2");
const arrow2 = document.querySelector(".arrow2");
const answer2 = document.querySelector(".answer2");

const question3 = document.querySelector(".question3");
const arrow3 = document.querySelector(".arrow3");
const answer3 = document.querySelector(".answer3");

const question4 = document.querySelector(".question4");
const arrow4 = document.querySelector(".arrow4");
const answer4 = document.querySelector(".answer4");

const question5 = document.querySelector(".question5");
const arrow5 = document.querySelector(".arrow5");
const answer5 = document.querySelector(".answer5");


const arrows = [arrow1, arrow2, arrow3, arrow4, arrow5]



arrows.forEach (function (arrowElement){
        arrowElement.addEventListener("click", function(){
            if (arrowElement === arrow1 && answer1.style.display === "none"){
                answer1.style.display = "block";
                question1.classList.add("weight")
            }else if (arrowElement === arrow1 && answer1.style.display === "block"){
                answer1.style.display = "none"
                question1.classList.remove("weight")
            }else {
                answer1.style.display = "none"
                question1.classList.remove("weight")
            }

            if (arrowElement === arrow2 && answer2.style.display === "none"){
                answer2.style.display = "block";
                question2.classList.add("weight")
            }else if (arrowElement === arrow2 || answer2.style.display === "block"){
                answer2.style.display = "none"
                question2.classList.remove("weight")
            }else {
                answer2.style.display = "none"
                question2.classList.remove("weight")
            }

            if (arrowElement === arrow3 && answer3.style.display === "none"){
                answer3.style.display = "block";
                question3.classList.add("weight")
            }else if (arrowElement === arrow3 || answer3.style.display === "block"){
                answer3.style.display = "none"
                question3.classList.remove("weight")
            }else {
                answer3.style.display = "none"
                question3.classList.remove("weight")
            }

            if (arrowElement === arrow4 && answer4.style.display === "none"){
                answer4.style.display = "block";
                question4.classList.add("weight")
            }else if (arrowElement === arrow4 || answer4.style.display === "block"){
                answer4.style.display = "none"
                question4.classList.remove("weight")
            }else {
                answer4.style.display = "none"
                question4.classList.remove("weight")
            }

            if (arrowElement === arrow5 && answer5.style.display === "none"){
                answer5.style.display = "block";
                question5.classList.add("weight")
            }else if (arrowElement === arrow5 || answer5.style.display === "block"){
                answer5.style.display = "none"
                question5.classList.remove("weight")
            }else {
                answer5.style.display = "none"
                question5.classList.remove("weight")
            }

        });

    });


