import React from 'react'
import { useState } from 'react';


const App = () => {
  const question=[
{
  Question:"The character has follwing abilities:",
  array:[
    {answertext:'Sova' , isCorrect: false},
    {answertext:'Breach', isCorrect: true},
    {answertext:'Raze', isCorrect: false},
    {answertext:'viper', isCorrect: false} 

  ]
},
{
  Question:"Who is the prime  minster of India:",
  array:[
    {answertext:'Amit Shah' , isCorrect: false},
    {answertext:'Modi', isCorrect: true},
    {answertext:'Arvind', isCorrect: false},
    {answertext:'Akhilesh', isCorrect: false} 

  ]
},
{
  Question:"2 + 3 = ?",
  array:[
    {answertext:'5' , isCorrect: false},
    {answertext:'6', isCorrect: true},
    {answertext:'7', isCorrect: false},
    {answertext:'8', isCorrect: false} 

  ]
},
{
Question:"6 + 3 = ?",
  array:[
    {answertext:'5' , isCorrect: false},
    {answertext:'9', isCorrect: true},
    {answertext:'7', isCorrect: false},
    {answertext:'8', isCorrect: false} 

  ]
},
{
  Question:"6 - 3 = ?",
    array:[
      {answertext:'5' , isCorrect: false},
      {answertext:'3', isCorrect: true},
      {answertext:'7', isCorrect: false},
      {answertext:'8', isCorrect: false} 
  
    ]
  },
  ];
const[currentQuestion,setCurrentQuestion]=useState(0);
const[score,setScore]=useState(0);
const[showscore,setShowScore]=useState(false);

const handleAnswerResponse=(isCorrect)=>{
if(isCorrect){
  setScore(score+1);
}
const nextQuestion = currentQuestion;
if(nextQuestion<question.length){
setCurrentQuestion(nextQuestion)
}
else{
  setShowScore(true);
}
}


  return(
    <div>
{showscore?(
  <div>
    You Have Score {score} out of {question.length}
  </div>
):(
  <>
  <div>
    <div>
<span>{currentQuestion + 1}</span>/{question.length}
    </div>
    <div>
{question[currentQuestion].Question}
    </div>
  </div>
  <div>
    {question[currentQuestion].array.map((value,index)=>
      (
      <button onClick={()=>handleAnswerResponse(value.isCorrect)}>{value.answertext}</button>
      )
    )}
  </div>
  </>
)}

    </div>
  )
}

export default App;