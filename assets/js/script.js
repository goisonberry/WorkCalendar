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
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
  // need function to change colors based on the time of day for past, present and future
  function hourTracker() {
    var currentHour = moment().hour();
    // This section will loop in for each time block.
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);
      console.log(blockHour, currentHour);
      // If/else statements will change confirm to change colors of planner if time has or has not passed.
      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
      } else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      }
    });
  }
  hourTracker();
});
