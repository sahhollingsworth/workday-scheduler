// Calculate date on page load and display in header
var dateCurrent = moment();
$("#currentDay").text(dateCurrent.format("dddd, MMMM Do"));

