    //.. Our variables
    let correctAnswers = 0;
    let wrongAnswers = 0;
    let answered = 0;
    let unAnswered = 0;
    let answersOne = ["yes", "no","maybe So"];
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
    
    $("#question1").html(questionOne);
    $(".one").html(answersOne);
    $("#question2").html(questionTwo);
    $(".two").html(answersTwo);
    $("#question3").html(questionThree);
    $(".three").html(answersThree);
    $("#question4").html(questionFour);
    $(".four").html(answersFour);
    //.
    for (i = 0; i < answersOne.length; i++){
        let multipleChoiceOne = answersOne[i]; 
    }

    //.. 
    function setup(){
        let timer = select("#timer");
        $("#timer").html(timeOut - counter);
    }

    let interval = setInterval(timeIt, 1000);

    function timeIt() {
        counter++;
        $("#timer").html(timeOut - counter);
        if (timeOut === counter){
            clearInterval(interval);
            

        }
    }
