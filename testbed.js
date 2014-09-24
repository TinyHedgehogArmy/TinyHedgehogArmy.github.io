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

1. Universal question: Are you happy? Yes/No
  Does not affect next question
2. Universal question: Are you blue? Yes/No
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
8. 

*/

/*
So, nested if/else statements will work, but will get super-complicated once questions have three terms and multiple branches.
Apparently switch statements are terrible.
Maybe just hardcode it? Each answer has hardcoded into it the next question that should be asked.
i.e. when that answer is clicked, it returns the code for the next question.
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

