    //.. Our variables
    let correctAnswers = 0;
    let wrongAnswers = 0;
    let answered = 0;
    let unAnswered = 0;
    let questionOne = ["yes", "no","maybe So"];
    let answerOne = "no";
    let counter = 0;
    let timeOut = 65;

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
    
    //..
 
    
    //..
   

