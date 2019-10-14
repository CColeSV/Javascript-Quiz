const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const results = document.getElementById("results");

const choice = document.getElementById("multiple-choice");



const myQuestions = [
    
    {
        question: "question 1?",
        answers: {
            a: "This is the answer.",
            b: "This is another.",
            c: "This is a third."
    },
        correctAnswer: "a"
},
    {
        question: "question 2?",
        answers: {
            a: "This is the answer.",
            b: "This is another.",
            c: "This is a third."
    },
        correctAnswer: "b"
},
    {
        question: "question 3?",
        answers: {
            a: "This is the answer.",
            b: "This is another.",
            c: "This is a third."
    },
        correctAnswer: "c"
},
    {
        question: "question 4?",
        answers: {
            a: "This is the answer.",
            b: "This is another.",
            c: "This is a third."
    },
        correctAnswer: "a"
}
   ]



// Submit an answer, if wrong = highlight + add correct, if right = say correct!
// After, another button goes "Next"  and fills with new question + answer sets

   function submit() {
       let select = document.getElementsByName("choice");

// Find what is selected   |  Loop through and check what is checked
        select.forEach(radio => {
            if (radio.checked) {
// Compare to correctAnswer
        let ans = radio.checked;
            if (ans == myQuestions.correctAnswer) {
                results.innerHTML = "You are correct!";
                next();
            } else {
                results.innerHTML = "You are wrong! Try Again!";
                 }
            }
        }
    }
            
            


// Compare to correctAnswer






        // select.forEach(radio => {
        //     if (radio.checked) {
        //         console.log(radio.value);
        //     }
        // })

//        if(select[0] == myQuestions[answers].correctAnswer) {
//            SpeechRecognitionResultList.innerHTML = "You are correct!";
//        }

//    }


//    function submit(e) {
//        if (e === myQuestions.correctAnswer) {
//             results.innerHTML = "You are correct!";
//        }

// }

    function next() {
        // Replace innerHTML with next question

}


//  I could say  var a = choice[0], var b = choice[1]
//
//  I could say if  .selected == correctAnswer
// 
// 

// How do you submit an answer?
// How do you check each question to see if the answer is right
// 
//      if (answer == correct) {
//           return "You are right!" } else {
//         *Highlight correct answer
//         *Add paragraph to explain                    
//         *Next button to go to next question }                     
//
//
//