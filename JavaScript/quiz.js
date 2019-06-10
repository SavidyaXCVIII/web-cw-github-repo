var pos = 0;
var correct = 0;
var marks = 0;
var time = 0;
var results, quiz, question, choice, choices, chA, chB, chC, chD, duration;
var correctQuestionsArray = [];


var Questions = [
    ["Who is the author of this work? <br> &nbsp;Romeo And Juliet","Christopher Marlowe", "Jane Austen", "Lewis Carroll", "William Shakespeare","D"],
    ["Who is the author of this work? <br> &nbsp;The Great Gatsby","Ernest Hemingway", "F. Scott Fitzgerald", "Charles Dickens", "J.D. Salinger","B"],
    ["Who is the author of this work? <br> &nbsp;Harry Potter and the Prisoner of Azkaban","Edith Wharton", "J.K. Rowling", "William Golding", "Rudyard Kipling","B"],
    ["Who is the author of this work? <br> &nbsp;The Lord of The Rings","Vladimirovich Nabokov","J.K. Rowling", "J.R.R. Tolkien",  "Roald Dahl","C"],
    ["Who is the author of this work? <br> &nbsp;The Adventures of Huckleberry Finn","Oscar Wilde","Mark Twain", "James Fenimore Cooper", "Jules Verne","B"],
    ["Who is the author of this work? <br> &nbsp;The Dark Room","Micheal Collins","Hisham Matar", "Sarah Waters", "Rachel Seiffert","D"],
    ["Who is the author of this work? <br> &nbsp;The Three Musketeers","Robert L.B. Stevenson","Alexandre Dumas", "Miguel De Cervantes Saaverda", "William Shakespeare","B"],
    ["Who is the author of this work? <br> &nbsp;Moby Dick","William Golding","Herman Melville", "F. Scott Fitzgerald", "Mark Twain","B"],
    ["Who is the author of this work? <br> &nbsp;A Song of Ice and Fire","Sinclair Lewis","James Jones", "George R. R. Martin", "Joseph Heller","C"],
    ["Who is the author of this work? <br> &nbsp;The Good Doctor","Monica Ali","Rohinton Mistry", "Philip Hensher", "Damon Galgut","D"],


];

function get(x) {
    return document.getElementById(x);
}


function hideModal() {
    document.getElementById("main-modal").style.cssText = 'display: none;';
    c = 100;
    document.getElementById("quiz").style.cssText = "filter: none; transform: translateY(0); opacity: 1;";
    document.getElementById("results").style.cssText = "filter: none;  transform: translateY(0); opacity: 1;";
    generateQuestion();
}

function generateQuestion() {
    results = get("results");

    if (pos >= Questions.length){
        results.innerHTML = " <h4> You got " + correct + " of " + Questions.length + " questions correct </h4>";
        results.innerHTML += "<h2> Your Score is : " + marks + "</h2>";
        results.innerHTML += "<h4> You took " + duration + " seconds to complete the quiz.</h4>";
        results.innerHTML += "<h4>Correct answers are : </h4> <br> <div class=answers''>";
        for (var i in correctQuestionsArray){
            results.innerHTML += correctQuestionsArray[i] + "<br><br>";
        }
        results.innerHTML += "</div>";
        get("quiz").innerHTML = "Test Completed";
        hideTimer();
        pos = 0;
        correct = 0;
        return false;
    }

    get("quiz").innerHTML = "Question " + (pos + 1) + " of " + Questions.length;
    question = Questions[pos][0];
    chA = Questions[pos][1];
    chB = Questions[pos][2];
    chC = Questions[pos][3];
    chD = Questions[pos][4];

    results.innerHTML = "<h3>" + question + "</h3>";
    results.innerHTML += "<p><input type='radio' name='choices' value='A' checked='checked'> " + chA + "</p><br>";
    results.innerHTML += "<p><input type='radio' name='choices' value='B'> " + chB + "</p><br>";
    results.innerHTML += "<p><input type='radio' name='choices' value='C'> " + chC + "</p><br>";
    results.innerHTML += "<p><input type='radio' name='choices' value='D'> " + chD + "</p><br>";
    results.innerHTML += "<button onclick='checkAnswer(question)'>Submit Answer</button>";

}
function checkAnswer(correctQuestion) {
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    if (choice == Questions[pos][5]) {
        correct++;
        marks += 2;
        console.log(correctQuestion);
        correctQuestionsArray.push(correctQuestion);

    }
    else {
        marks -= 1;
    }
    pos++;
    
    generateQuestion();
}
function timer001() {
    time = get("time001");
    c = c -  1;
    duration = 100 - c;
    if (c < 100){
        time.innerHTML = c;
    }
    if (c < 1){
        window.clearInterval(update);
        results.innerHTML = " <h4> You got " + correct + " of " + Questions.length + " questions correct </h4>";
        results.innerHTML += "<h2> Your Score is : " + marks + "</h2>";
        results.innerHTML += "<h4>Correct answers are : </h4> <br> <div class=answers''>";
        for (var i in correctQuestionsArray){
            results.innerHTML += correctQuestionsArray[i] + "<br><br>";
        }
        results.innerHTML += "</div>";
        get("quiz").innerHTML = "Test Completed";
        pos = 0;
        correct = 0;
        return false;
    }
}
function hideTimer(){
    document.getElementsByClassName("timer").style.cssText = "display: none;";
}
update = setInterval("timer001()", 1000);


window.addEventListener("load", generateQuestion, false);
