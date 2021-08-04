var readlineSync=require("readline-sync");
var score=0;
var userNAme=readlineSync.question("what is your name?");
console.log("welcome " + userName+" do you know bhargav ");
var highscores=[{
    name:"bhargav",
    score=10,
},{
    name:"monu",
    score:9,
}];
function play(question,answer){
    var userAnswer=readlineSync.question(question);
    if (userAnswer===answer){
console.log("right!")
score=score+1;
    }
    else{
        console.log("wrong!")
    }
    console.log("current score: ",score);
    console.log("---------------")
}
var questions=[{
    question:`where does bhargav live?
    a.visakhapatnam
    b.bangalore
    c.chennai
    d.delhi`,
    answer:"a"
},{
    question:`in which college does bhargav study
    a.lpu
    b.iit
    c.nit
    d.nsrit `,
    answer:"d"
  },{
    question:`what is zodiac sign of bhargav
    a.capricorn
    b.scorpio
    c.cancer
    d.aires `,
    answer:"b"
  },{
    question:`what is birthday month of bhargav
    a.may
    b.april
    c.june
    d.july `,
    answer:"b"
  }];
for(var i=0;i<questions.length;i++){
    var currentQuestion=questions[i];
    play(currentQuestion.question,currentQuestion.answer)
}
console.log("YAY! you scored: ",score);
console.log(highscores)