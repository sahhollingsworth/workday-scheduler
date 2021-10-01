// Calculate date on page load and display in header
var dateCurrent = moment();
$("#currentDay").text(dateCurrent.format("dddd, MMMM Do"));

// Listener for save button in each timeblock
$(.save).onclick("click", saveBlock);

// Function to saved timeblock input to local storage
// function saveBlock() {
//}
// function saveBlocks() {
//     localStorage.setItem("blocks", JSON.stringify(blocks));
// }

// Function to pull block data from local storage

// Function to display block data from local storage

// Function to check time at continuous intervals

// Function to update color of blocks based on current time (past present future)