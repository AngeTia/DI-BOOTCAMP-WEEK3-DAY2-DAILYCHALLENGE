// Get the values of the inputs when the form is submitted
document.getElementById("libform").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the form from being submitted
    
    // Get the values of the inputs
    var noun = document.getElementById("noun").value;
    var adjective = document.getElementById("adjective").value;
    var person = document.getElementById("person").value;
    var verb = document.getElementById("verb").value;
    var place = document.getElementById("place").value;
  
    // Make sure the values are not empty
    if (noun === "" || adjective === "" || person === "" || verb === "" || place === "") {
      console.error("One or more of the input values is empty");
      return;
    }
  
    // Write a story using the input values
    var story = "One day, " + person + " went to the " + place + " to " + verb + " with their " + adjective + " " + noun + ".";
    
    // Display the story in the "story" element
    document.getElementById("story").innerHTML = story;
});
  
// Add a "shuffle" button to the HTML file
var shuffleButton = document.createElement("button");
shuffleButton.innerHTML = "Shuffle";
shuffleButton.id = "shuffle-button";
document.body.appendChild(shuffleButton);
  
// When the shuffle button is clicked, change the story but keep the input values
document.getElementById("shuffle-button").addEventListener("click", function() {
    // Get the values of the inputs
    var noun = document.getElementById("noun").value;
    var adjective = document.getElementById("adjective").value;
    var person = document.getElementById("person").value;
    var verb = document.getElementById("verb").value;
    var place = document.getElementById("place").value;
  
    // Generate a new story using the input values
    var stories = [
      "One day, " + person + " went to the " + place + " to " + verb + " with their " + adjective + " " + noun + ".",
      "While at the " + place + ", " + person + " decided to " + verb + " their " + adjective + " " + noun + ".",
      "After " + verb + " at the " + place + ", " + person + " returned home with their " + adjective + " " + noun + "."
    ];
    
    // Pick a random story from the array
    var story = stories[Math.floor(Math.random() * stories.length)];
  
    // Display the story in the "story" element
    document.getElementById("story").innerHTML = story;
  });
  