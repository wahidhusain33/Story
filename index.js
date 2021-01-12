function sub() {
    var animal11 = document.getElementById('animal1').value;
    var animal12 = document.getElementById('animal2').value;
    var animal13 = document.getElementById('animal3').value;
    var adjective = document.getElementById('adj').value;
    var verb = document.getElementById('verb').value;
    var number = document.getElementById('num').value;
    var areaText = document.getElementById('text').value;
    var motQuote = document.getElementById('quote').value;
    var yesX = document.getElementById('yes').value;
    var noX = document.getElementById('no').value;

    localStorage.setItem('animalA', animal11);
    localStorage.setItem('animalB', animal12);
    localStorage.setItem('animalC', animal13);
    localStorage.setItem('adjectiveX', adjective);
    localStorage.setItem('verbX', verb);
    localStorage.setItem('numberX', number);
    localStorage.setItem('areaTextX', areaText);
    localStorage.setItem('motQuoteX', motQuote);

    if (yesX != undefined) {
        localStorage.setItem('yesX', yesX);
    }
    else {
        localStorage.setItem('noX', noX);
    }


}
function loading(){
 const title ='The '+localStorage.getItem("animalA")+' and '+localStorage.getItem("animalB");
 document.getElementById("title").innerHTML=title;

 const story = `A <strong>${localStorage.getItem("animalA")}</strong> was making fun of the <strong>${localStorage.getItem("animalB")}</strong> one day for being so slow. <br><br> "Do you ever get anywhere?"he asked with a mocking laugh. <br><br>  <strong>"${localStorage.getItem("yesX")}"</strong>, replied the <strong>${localStorage.getItem("animalB")} " </strong>but I get there runner than you think. I will run you a race prove it." <br><br> The <strong>${localStorage.getItem("animalA")}</strong> was much <strong>${localStorage.getItem("adjectiveX")}</strong> at the idea of running a race with the <strong>${localStorage.getItem("animalB")}</strong>. but for the fun of the thing he agreed. So the <strong>${localStorage.getItem("animalC")}</strong>. who had consented to act as judge, marked the distance yelled, <strong>"${localStorage.getItem("motQuoteX")}"</strong>. <br><br> The <strong>${localStorage.getItem("animalA")}</strong> was soon far out of sight,and to make the <strong>${localStorage.getItem("animalB")}</strong> feel very deeply how rediculous it was for him to try a race with a ${localStorage.getItem("animalA")}. he went off the course to practice <strong>${localStorage.getItem("verbX")}</strong> for <strong>${localStorage.getItem("numberX")} </strong> hours until the <strong>${localStorage.getItem("animalB")}</strong> should catch up. <br><br> The <strong>${localStorage.getItem("animalB")}</strong> meanwhile kept going slowly but steadily. and, after a time, passed the place where the <strong>${localStorage.getItem("animalA")} </strong> was <strong>${localStorage.getItem("verbX")}</strong> .The <strong>${localStorage.getItem("animalA")}</strong> was so caught up in <strong>${localStorage.getItem("verbX")};</strong> and when at last he did stop, the <strong>${localStorage.getItem("animalB")}</strong> was near the goal.The <strong>${localStorage.getItem("animalA")}</strong> now ran his swiftesy, but he could not overtake the <strong>${localStorage.getItem("animalB")}</strong> in time.`;

 document.getElementById('paragraph').innerHTML = story;

 const moralX = localStorage.getItem('motQuoteX');
 document.getElementById('moral').innerHTML=moralX;
}






