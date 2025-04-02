/* copy all of the code underneath the heading "1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" */
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

/* Now look at the second section of the raw text file — "2. RAW TEXT STRINGS". */
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

/* Copy the code found underneath the heading "3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION" */
randomize.addEventListener('click', result);

function result() {

    /* Create a new variable called newStory, and set its value to equal storyText. */
    newStory = storyText

    /* Create three new variables called xItem, yItem, and zItem, and make them equal to the result of calling randomValueFromArray() */

    xItem = randomValueFromArray(xItem);
    yItem = randomValueFromArray(yItem);
    zItem = randomValueFromArray(zItem);

    if(customName.value !== '') {
      const name = customName.value;
  
    }
  
    if(document.getElementById("uk").checked) {
      const weight = Math.round(300);
      const temperature =  Math.round(94);
  
    }
  
    story.textContent = ;
    story.style.visibility = 'visible';
  }
  