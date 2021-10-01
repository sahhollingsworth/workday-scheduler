// Calculate date on page load and display in header
var currentDate = $("#currentDay");
var currentTime;

// Optimization - Loads current date in header much quicker on page load
timeUpdate();

// Function to check time at 1 second intervals
var timeCurrent = setInterval(timeUpdate, 1000);

// Update date in header, called at each time check interval
function timeUpdate(){
    var currentTime = moment();
    currentDate.text(currentTime.format("dddd, MMMM Do"));
    timeCoordBlocks();
}

// Function to evaluate current time and update coloring of time blocks based on their relation to it (past present future), called at each time check interval
function timeCoordBlocks(){
    /* Set a variable for hour at time of function run */
    var currentHour = moment().hour();
    // iterate over each timeblock, parsing id which equals the hour block represents 
    $(".hour-block").each(function() {
        var blockHour = parseInt($(this).attr("id"));
        // Adjust classes based on whether the hour (id) of the block was in the past, is in the future, or is the same as the current hour when this function is running
        if (blockHour < currentHour){
            $(this).removeClass(["future", "present"]).addClass("past");
        }
        else if (blockHour === currentHour){
            $(this).removeClass(["past", "future"]).addClass("present");
        }
        else if (blockHour > currentHour){
            $(this).removeClass(["past", "present"]).addClass("future");
        }
    })
};

// Listener for save button in each timeblock
$(".saveBtn").on("click", saveBlock);

// Function to saved timeblock input to local storage. 
function saveBlock(event){
    var blockTime = $(event.target).parent().attr("id");
    var blockDescription = $(event.target).siblings(".description").val();
    if (blockDescription === ""){
        alert("Please type your event details before saving.")
    }
    else {
        localStorage.setItem(blockTime,blockDescription);
    }
}

// Function to pull & display block description data from local storage



