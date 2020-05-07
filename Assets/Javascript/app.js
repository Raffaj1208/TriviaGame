    //.. Our variables
    let correctAnswers = 0;
    let wrongAnswers = 0;
    let answered = 0;
    let unAnswered = 0;
    let answersOne = ["..", "..",".."];
    let answersTwo = ["..", "..", ".."];
    let answersThree = ["..", "..", ".."];
    let answersFour = [".", ".", ".."];
    let questionOne = "?";
    let questionTwo = "?";
    let questionThree = "?";
    let questionFour = "?";
    let counter = 0;
    let timeOut = 65;
    //..
    $("#strtBtn").show();
    $("section").hide();

    //..
    function checked(){
        let a1 = document.getElementById("a1").checked;
        let b1 = document.getElementById("a2").checked;
        let c1 = document.getElementById("a3").checked;
        if (a1 == true && b1 == false && c1 == false){
            correctAnswers++;
            results();
        }
    }

    // 
    function unchecked(){

    }
    //..
    function results() {
        $("main").hide();
        $("aside").show();
        $("#answered").html("Answered:" + answered);
        $("#unAnswered").html("Unanswered:" + unAnswered);
        $("#wrongAnswers").html("Wrong:" + wrongAnswers);
        $("#correctAnswers").html("Correct:" + correctAnswers);
    }


    //.. 
    function timeIt() {
            $("#timer").html(timeOut - counter);
            if (timeOut === counter){
                results();
                clearInterval(interval)
            } else {
                counter++;
            }
    }

    //.. Click the Start button to start the game
    $("#strtBtn").on("click", function(){
        $("section").show();
        let interval = setInterval(timeIt, 1000);   
    //Question 1
    $("#question1").html(questionOne);
    $("#oneOne").html(answersOne[0]);
    $("#oneTwo").html(answersOne[1]);
    $("#oneThree").html(answersOne[2]);
    //Question 2
    $("#question2").html(questionTwo);
    $("#twoOne").html(answersTwo[0]);
    $("#twoTwo").html(answersTwo[1]);
    $("#twoThree").html(answersTwo[2]);
    //Question 3
    $("#question3").html(questionThree);
    $("#threeOne").html(answersThree[0]);
    $("#threeTwo").html(answersThree[1]);
    $("#threeThree").html(answersThree[2]);
    //Question 4
    $("#question4").html(questionFour);
    $("#fourOne").html(answersFour[0]);
    $("#fourTwo").html(answersFour[1]);
    $("#fourThree").html(answersFour[2]);
 
    });

    //.. Submit button
    $("#submit").on("click", function(){
        checked();
    });