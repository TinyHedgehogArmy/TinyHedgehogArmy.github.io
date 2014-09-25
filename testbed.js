//http://jsbin.com/carihurugute/1/edit

//Let's think about how we might, using js/jquery, put together the actual 'quiz' part of the site.

/*
First thing: 
Input is the answer to the current query.
Output is the new query, and new answer.
The logic needs to take the input, decide what the next appropriate question is, and output that.
The problem is that the structure is non-linear - different sets of answers will need different questions, and 
There will be some 'universal' questions (tax status, for example) that should be asked for all branches.
There will be some 'branched' questions (follow-up from animal, plant, etc) that will only be asked for specific branches.
These will be nested - the follow up to some branched questions might themselves be branched questions.
Effectively, we need to plot out exactly what the full logic will be, then we can start programming it. Or perhaps just a test case or two?
Yeah, let's put together an example case.
OK, so new question. How do we talk about our cases?
*/

/*
Example case:

1. Universal question: Do you care about tax deductibility? Yes/No (created)
  Does not affect next question
2. Universal question: Are you blue? Yes/No (created)
  Does not affect next question
3. Branch question: Are you a person? Yes/No
  If Yes - Q4
  If No - Q7
4. Branch question: What gender are you? Male/Female
  If Male, Q5
  If Female, Q6
5. Closing question: What colour is your hair? Brown/Black
  Does not affect next question, go to next in sequence
6. Closing question: What colour are your eyes? Brown/Black
  Does not affect next question, go to next in sequence
***Note: Branch 4 now closed.
7. Closing question: Are you a mammal? Yes/No
  Does not affect next question.
8. Universal question: Was this fun? Yes/No
  Does not affect next question.

*/


//Maybe we create a 'Question' object constructor, which we can then recycle. Not entirely sure what this will need to contain yet, but having all of the questions created this way seems to make sense so that we can apply prototypes to them. The idea is that qnCode will eventually give some idea of where in the sequence they are.

function Question (qnText,ansNo,qnCode,isUni){
	this.qnText = qnText;
	this.ansNo = ansNo;
	this.qnCode = qnCode;
    this.isUni = isUni;
}

//Then we start creating questions, adding answers as we see fit.
var taxUni1001 = new Question ("Do you care about tax deductibility?",3,1001,true);
taxUni1001.ans1 = "Yes";
taxUni1001.ans2 = "No";
taxUni1001.ans3 = "Doesn't matter";
taxUni1001.nextQn = "blueUni1002";

//So now we should have a new object with a bunch of parameters.
var testing = function() {
	for (var prop in taxUni1001) {
      // important check that this is objects own property 
      // not from prototype prop inherited
      if(taxUni1001.hasOwnProperty(prop)){
        console.log(prop + " = " + taxUni1001[prop]);
		}
	}
};
//testing();

//OK, that works. Let's create a few more questions for testing.

var blueUni1002 = new Question ("Are you blue?",2,1002,true);
blueUni1002.ans1 = "Yes";
blueUni1002.ans2 = "No";


var persBrnch1003 = new Question ("Are you a person?",2,1003,false);
persBrnch1003.ans1 = "Yes";
persBrnch1003.ans2 = "No";


var genderBrnch1004 = new Question ("What gender are you?",4,1004,false);
genderBrnch1004.ans1 = "Male";
genderBrnch1004.ans2 = "Female";
genderBrnch1004.ans3 = "Other";
genderBrnch1004.ans4 = "I don't want to tell you";


var colourhBrnch1005 = new Question ("What colour is your hair?",4,1005,false);
colourhBrnch1005.ans1 = "Blue";
colourhBrnch1005.ans2 = "Brown";
colourhBrnch1005.ans3 = "Black";
colourhBrnch1005.ans4 = "Other";


var coloureBrnch1006 = new Question ("What colour are your eyes?",5,1006,false);
coloureBrnch1006.ans1 = "Blue";
coloureBrnch1006.ans2 = "Brown";
coloureBrnch1006.ans3 = "Yellow";
coloureBrnch1006.ans4 = "Green";
coloureBrnch1006.ans5 = "Other";


var mammalBrnch1007 = new Question ("Are you a mammal?",3,1007,false);
mammalBrnch1007.ans1 = "Yes";
mammalBrnch1007.ans2 = "No";
mammalBrnch1007.ans3 = "Doesn't matter";


var funUni1008 = new Question ("Was this fun?",2,1008,true);
funUni1008.ans1 = "Yes";
funUni1008.ans2 = "No";

//OK, let's create an array of possible questions - inelegant?
var answers = ["ans1", "ans2", "ans3", "ans4", "ans5", "ans6", "ans7", "ans8", "ans9", "ans10", "ans11", "ans12"];

//We also need to create an object that contains all objects and their codes, then returns the right object when given the right code.

var codeArrayMake = function() {
  var codeArray = [];
  for (i=0;i<8,i+=1) {
    codeArray.push
  }
  
}



var codeBreaker = function(qnCodeGiven){
  
}



//Now, how will we test this? Let's create a simple jQuery enquiry to add to buttons.
 $(document).ready(function(){
   var displayQuestion = function(qnToDisplay) {
	$(".question").append(qnToDisplay.qnText);
    for(i=0;i<qnToDisplay.ansNo;i+=1) {
      var currentAns = answers[i];
      $(".answers").append("<button type='button' class = '" + currentAns + "' id='" + qnToDisplay.qnCode + "'>" + qnToDisplay[currentAns] + "</button>");
    }
  };
   
displayQuestion(taxUni1001);
   
//OK, testing function is up and running. Let's do some logic! So, how do we tell it, once it gets a particular answer, that it should go to a particular question? 

   /*
   Options:
   1) Have each answer key have an associated 'nextQn' key, which gives the name of the next question to be used.
     That's OK for the branching questions, but inefficient for the universal.
     Distinguish between branching and universal with a boolean as part of the constructor.
     If it's branching, each answer gets a different 'nextQn'.
     If it's universal, there's one universal 'nextQn'.
     This is hardcoding it - there's no way to re-use questions in a different order. 
     Pros - easy to tell where each question goes, nice and visual to maintain
     Cons - Logic is hidden - difficult to test if all options end up in the right place.
  2) Is there a better way?
  I mean you could, for branching ones, add the answer to some kind of variable (i.e. if ans1, add 1, etc) and use that to figure it out. But that seems less clear.
   
*/

//Gets the class of the button clicked (e.g. 'ans1', ans2).
   
   $("button").click(function() {
       var ansClicked = this.className;
       var qnClicked = this.id;
       nextQuestion(qnClicked,ansClicked);
     });
   
   var nextQuestion = function(qnClicked,ansClicked) {
      
       
   };
   
   
   
}); //This is the end of the document ready, don't touch.

/*
So, nested if/else statements will work, but will get super-complicated once questions have three terms and multiple branches.
Apparently switch statements are terrible.
Maybe just hardcode it? Each answer has hardcoded into it the next question that should be asked.
i.e. when that answer is clicked, it returns the code for the next question.
Disadvantage - would mean that questions may need to be re-asked if they're within different branches. But then they should be universal?
*/

/*
Second thing:
Take the inputs, and save them (presumably as an array?) 
Display them on the side as breadcrumbs
Use them as tags for the final database query
*/

/*
Third thing:
*/
