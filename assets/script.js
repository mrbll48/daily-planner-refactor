// array used to generate all of the time blocks, enter the time into each timeblock, and apply past, present, future tags
var times = [
  {
    hour: 9,
    ampm: ' AM',
    id: 'hour-9',
    hr: 9
  },
  {
    hour: 10,
    ampm: ' AM',
    id: 'hour-10',
    hr: 10
  },
  {
    hour: 11,
    ampm: ' AM',
    id: 'hour-11',
    hr: 11
  },
  {
    hour: 12,
    ampm: ' PM',
    id: 'hour-12',
    hr: 12
  },
  {
    hour: 1,
    ampm: ' PM',
    id: 'hour-1',
    hr: 13
  },
  {
    hour: 2,
    ampm: ' PM',
    id: 'hour-2',
    hr: 14
  },
  {
    hour: 3,
    ampm: ' PM',
    id: 'hour-3',
    hr: 15
  },
  {
    hour: 4,
    ampm: ' PM',
    id: 'hour-4',
    hr: 16
  },
  {
    hour: 5,
    ampm: ' PM',
    id: 'hour-5',
    hr: 17

  },
]

$(function () {
  
  // loop to create all of the time blocks for standard business hours
  for (var i = 0; i < times.length; i++){
    // generates the entire row where the time blocks sit
    var timeBlock = $('<div>');
    timeBlock.addClass('time-block row');
    timeBlock.attr('id', times[i].id);
  // generates the box that shows the time
    var timeBox = $('<div>');
    timeBox.addClass('col-2 col-md-1 hour text-center py-3');
    timeBox.text(times[i].hour + times[i].ampm);
    // generates the text area where notes can be typed
    var textArea = $('<textarea>');
    textArea.addClass('col-8 col-md-10 description textarea');
    textArea.attr('rows', 3);
    textArea.attr('placeholder', 'Input message here');
    textArea.text(localStorage.getItem(times[i].id));
  // generates the styling for the submit button
    var btnHolder = $('<i>');
    btnHolder.addClass('fas fa-save');
    btnHolder.attr('aria-hidden', true);
  // generates the submit button
    var submitBtn = $('<button>'); 
    submitBtn.addClass('btn saveBtn col-2 col-md-1');
    submitBtn.attr('aria-label', 'save');
    submitBtn.click(localStore);

    var currentTime= dayjs().hour();
    
    $('.px-5').append(timeBlock);
    $(timeBlock).append(timeBox, textArea, submitBtn);
    $(submitBtn).append(btnHolder);
  // conditional to check the current time with the time on the timeblock. Applies color based on what time of day it is. 
    if (times[i].hr < currentTime) {
      timeBlock.addClass('past');
    }  else if (times[i].hr > currentTime) {
      timeBlock.addClass('future');
    } else {
      timeBlock.addClass('present');
    }
  }
// function designed to set the text from textArea into localstorage on clicking the submit button
function localStore() {
  var id = $(this).parent().attr('id');
  var textContent = $(this).siblings('.description').val();
  localStorage.setItem(id, textContent);
}
  
  displayDateTime();
  // function to display the date and time at the bottom of the header
  function displayDateTime() {
    var currentDayEl = $('#currentDay');
    var currentTimeEl = $('#currentTime');
    var currentDay = dayjs().format('dddd MMMM D, YYYY');
    var currentTime = dayjs().format('h[:]mm a');
    currentDayEl.text(currentDay);
    currentTimeEl.text(currentTime);
  }
  // refreshes the time every second to keep the time up to date
   setInterval(displayDateTime, 1000);
});
