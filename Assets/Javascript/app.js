    //.. Our variables
    let correctAnswers = 0;
    let wrongAnswers = 0;
    let answered = 0;
    let unAnswered = 0;
    let answersOne = ["5", "3","4"];
    let answersTwo = ["1995", "1987", "2019"];
    let answersThree = ["Qui-gon", "Maul", "Anakin"];
    let answersFour = ["Zira", "Scar", "Kovu"];
    let questionOne = "How many Toy Story films have been released?";
    let questionTwo = "The Movie, Avengers Endgame, was released in the year?";
    let questionThree = "Obi-wan's mentor in The Phantom Menace, is called?";
    let questionFour = "What is the name of the antagonist in the disney film, The Lion King?";
    let counter = 0;
    let timeOut = 65;
    //..
    $("#strtBtn").show();
    $("section").hide();

    //.. 
    function timeIt() {
            $("#timer").html(timeOut - counter);
            if (timeOut === counter){
                clearInterval(interval)
            } else {
                counter++;
            }
    }

    //.. Click the Start button to start the game
    $("#strtBtn").on("click", function(){
        $("section").show();
        let interval = setInterval(timeIt, 1000);   
    //..This is for block one
    $("#question1").html(questionOne);
    $("#oneOne").html(answersOne[0]);
    $("#oneTwo").html(answersOne[1]);
    $("#oneThree").html(answersOne[2]);
    //.. Block 2
    $("#question2").html(questionTwo);
    $("#twoOne").html(answersTwo[0]);
    $("#twoTwo").html(answersTwo[1]);
    $("#twoThree").html(answersTwo[2]);
    //.. Block 3
    $("#question3").html(questionThree);
    $("#threeOne").html(answersThree[0]);
    $("#threeTwo").html(answersThree[1]);
    $("#threeThree").html(answersThree[2]);
    //.. Block 4
    $("#question4").html(questionFour);
    $("#fourOne").html(answersFour[0]);
    $("#fourTwo").html(answersFour[1]);
    $("#fourThree").html(answersFour[2]);
 
    });
    //.. Submit button
    $("#submit").on("click", function(){
    });