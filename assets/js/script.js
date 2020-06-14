// If you can see 'Hello, World!' in the console, then you can remove this and replace it your code
// console.log("Hello, World!");
// YOUR JS CODE GOES HERE

// Telling function to allow html and css files to run first.
$(document).ready(function () {
  // need function to display current date and time
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  // need function for the save buttons
  $(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // Save user input in local storage.
    localStorage.setItem(time, text);
  });
  // need to store and retrive data based on the time user saved
  // need function to change colors based on the time of day for past, present and future
});
