    //.. Our variables
    let correctAnswers = 0;
    let wrongAnswers = 0;
    let answered = 0;
    let unAnswered = 0;
    let answersOne = ["5", "3","4"];
    let answersTwo = ["yes"];
    let answersThree = ["no"];
    let answersFour = ["maybe"];
    let questionOne = "This is a question";
    let questionTwo = "This is another question";
    let questionThree = "This is the 3rd question";
    let questionFour = " This is the 4th and final question";
    let counter = 0;
    let timeOut = 65;
    //..
    //..This is for block one
    $("#question1").html(questionOne);
    $("#oneOne").html(answersOne[0]);
    $("#oneTwo").html(answersOne[1]);
    $("#oneThree").html(answersOne[2]);
    //.. Block 2
    $("#question2").html(questionTwo);
    $(".two").html(answersTwo);
    //.. Block 3
    $("#question3").html(questionThree);
    $(".three").html(answersThree);
    //.. Block 4
    $("#question4").html(questionFour);
    $(".four").html(answersFour);

    //.. 
    function start(){
        $("#strtBtn").on("click", function() {
            setup();
            timeIt();
        });
        //..This is for block one
    $("#question1").html(questionOne);
    $("#oneOne").html(answersOne[0]);
    $("#oneTwo").html(answersOne[1]);
    $("#oneThree").html(answersOne[2]);
    //.. Block 2
    $("#question2").html(questionTwo);
    $(".two").html(answersTwo);
    //.. Block 3
    $("#question3").html(questionThree);
    $(".three").html(answersThree);
    //.. Block 4
    $("#question4").html(questionFour);
    $(".four").html(answersFour);
    }

    let interval = setInterval(timeIt, 1000);

    function timeIt() {
        counter++;
        $("#timer").html(timeOut - counter);
        if (timeOut === counter){
            clearInterval(interval);
        }
    }