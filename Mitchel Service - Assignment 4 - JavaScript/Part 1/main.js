// copy all of the code underneath the heading "1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS"
// Field to input a custome name
const customName = document.getElementById('customname');
// Random Input Button
const randomize = document.querySelector('.randomize');
// Output of the Story
const story = document.querySelector('.story');
// Collect a random item from the array
function randomValueFromArray(array){
  // Get a random index number for the array
  const random = Math.floor(Math.random()*array.length);
  // Return that index
  return array[random];
}
// Now look at the second section of the raw text file — "2. RAW TEXT STRINGS".
// Story template that contains various place holders meant for replacement
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
// Name placeholder replacements for insertX
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
// Location placeholder replacements for insertY
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
// Action placeholder replacements for insertX
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
// fahrenheit constant
const fahrenheit = 94;
// Copy the code found underneath the heading "3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION"
// Reactor for clicks of the ranzomize button
randomize.addEventListener('click', result);
// Function that handles creating the story and converting between conversions
function result() {
  // Create a new variable called newStory, and set its value to equal storyText. 
  // Set the newStory var to the blank template
  newStory = storyText;
  // Create three new variables called xItem, yItem, and zItem 
  // Set xItem to a random value from the insertX array.
  const xItem = randomValueFromArray(insertX);
  // Set yItem to a random value from the insertY array.
  const yItem = randomValueFromArray(insertY);
  // Set zItem to a random value from the insertZ array.
  const zItem = randomValueFromArray(insertZ);
  // Replace placeholders
  // Replace both insertx placeholders with the random xItem value
  newStory = newStory.replaceAll(':insertx:', xItem);
  // Replace both inserty placeholders with the random yItem value
  newStory = newStory.replace(':inserty:', yItem);
  // Replace both insertz placeholders with the random zItem value
  newStory = newStory.replace(':insertz:', zItem);
  // Handle custom name
  // if custom name does not equal nothing
  if(customName.value !== '') {
    // replace Bob with the custom name inside of the customename box
      newStory = newStory.replace('Bob', customName.value);
  }
  // Handle UK conversion
  // If the UK radio button is checked
  if(document.getElementById("uk").checked) {
      // Convert pounds to stones
      const weight = Math.round(300 / 14) + ' stone';  
      // Convert fahrenheit to centigrade
      const temperature = Math.round((fahrenheit - 32) * 5/9) + ' centigrade'; 
      // Replace fahrenheit with the calcualted centigrade
      newStory = newStory.replace('94 fahrenheit', temperature);
      // Replace pounds with the calcualted stones
      newStory = newStory.replace('300 pounds', weight);
  }
  // insert generated text
  story.textContent = newStory;
  // Make the finalized story visable
  story.style.visibility = 'visible';
}
