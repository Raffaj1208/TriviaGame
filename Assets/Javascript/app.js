    //.. Our variables
    let correctAnswers = 0;
    let wrongAnswers = 0;
    let unAnswered = 0;
    let answersOne = ["Mcdonalds", "Jack in the Box","Carl's Jr"];
    let answersTwo = ["1767", "1752", "1776"];
    let answersThree = ["Ravens and Seahawks", "Steelers and Patriots", "Giants and Packers"];
    let answersFour = ["Bill Gates", "Steve Jobs", "Mark Zuckerberg"];
    let questionOne = "What franchise famously uses the slogan, 'Im Loving It!'?";
    let questionTwo = "In what year was the declaration of independence signed?";
    let questionThree = "Which two NFL teams, have the most won Superbowls?";
    let questionFour = "This man is famously known for being a founder for Microsoft?";
    let counter = 0;
    let timeOut = 35;

    //..
    $("#strtBtn").show();
    $("section").hide();

    //..
    function checked(){
        let a1 = document.getElementById("a1").checked;
        let b1 = document.getElementById("b1").checked;
        let c1 = document.getElementById("c1").checked;
        let a2 = document.getElementById("a2").checked;
        let b2 = document.getElementById("b2").checked;
        let c2 = document.getElementById("c2").checked;
        let a3 = document.getElementById("a3").checked;
        let b3 = document.getElementById("b3").checked;
        let c3 = document.getElementById("c3").checked;
        let a4 = document.getElementById("a4").checked;
        let b4 = document.getElementById("b4").checked;
        let c4 = document.getElementById("c4").checked;

        // Question 1
        if (a1 == true && b1 == false && c1 == false){
            correctAnswers++;
            
        } else if (a1 == false && b1 == true){
            wrongAnswers++;
            
        } else if (a1 == false && c1 == true){
            wrongAnswers++;
            
        } else if (a1 == false && b1 == false && c1 == false){
            unAnswered++;
            wrongAnswers++;
            
        }

        // Question 2
        if (a2 == false && b2 == false && c2 ==true){
            correctAnswers++;
            
        } else if (c2 == false && a2 == true){
            wrongAnswers++;
            
        } else if (c2 == false && b2 == true){
            wrongAnswers++;
            
        } else if (a2 == false && b2 == false && c2 == false){
            wrongAnswers++;
            unAnswered++;
            
        }

        // Question 3
        if (a3 == false && b3 == true && c3 == false){
            correctAnswers++;
            
        } else if ( b3 == false && a3 == true){
            wrongAnswers++;
            
        } else if (b3 == false && c3 == true){
            wrongAnswers++;
            
        } else if (a3 == false && b3 == false && c3 == false){
            unAnswered++;
            wrongAnswers++;
            
        }
        
        // Question 4
        if (a4 == true && b4 == false && c4 == false){
            correctAnswers++;
            
        } else if (a4 == false && b4 == true){
            wrongAnswers++;
            
        } else if (a4 == false && c4 == true){
            wrongAnswers++;
            
        } else if (a4 == false && b4 == false && c4 == false){
            wrongAnswers++;
            unAnswered++;
            
        }
        results();
    }

    //..
    function results() {
        $("main").hide();
        $("aside").show();
        $("#unAnswered").html("Unanswered:" + unAnswered);
        $("#wrongAnswers").html("Wrong:" + wrongAnswers);
        $("#correctAnswers").html("Correct:" + correctAnswers);
    }

    //.. Click the Start button to start the game
    $("#strtBtn").on("click", function(){
        $("section").show();
         let interval = setInterval(timeIt, 1000)

         function timeIt() {
            $("#timer").html(timeOut - counter)
            if (timeOut === counter){
                clearInterval(interval);
                checked();
            } else {
                counter++;
            }
    }
          
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

        //.. Submit button
        $("#submit").on("click", function(){
            if (timeOut > counter){
                clearInterval(interval);
                checked();
            } else if (timeOut < counter){
                clearInterval(interval);
                checked();
            }
          
            
        });

 
    });

