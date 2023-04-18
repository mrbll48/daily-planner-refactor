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
    var timeBlock = $('<div>');
    timeBlock.addClass('time-block row');
  
    var timeBox = $('<div>');
    timeBox.addClass('col-2 col-md-1 hour text-center py-3');
    timeBox.text(times[i].hour + times[i].ampm);
    
    var textArea = $('<textarea>');
    textArea.addClass('col-8 col-md-10 description textarea');
    textArea.attr('rows', 3)
    textArea.text('Input message here');
  
    var btnHolder = $('<i>');
    btnHolder.addClass('fas fa-save')
    btnHolder.attr('aria-hidden', true)
  
    var submitBtn = $('<button>'); 
    submitBtn.addClass('btn saveBtn col-2 col-md-1');
    submitBtn.attr('aria-label', 'save')
    
    $('.px-5').append(timeBlock)
    $(timeBlock).append(timeBox, textArea, submitBtn)
    $(submitBtn).append(btnHolder);
  // conditional to check the current time with the time on the timeblock. Applies color based on what time of day it is. 
    if (times[i].hr < dayjs().hour()) {
      timeBlock.addClass('past')
    }  else if (times[i].hr > dayjs().hour()) {
      timeBlock.addClass('future')
    } else {
      timeBlock.addClass('present')
    }
  }

  
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  displayDateTime();
  // function to display the date and time at the bottom of the header
  function displayDateTime() {
    var currentDayEl = $('#currentDay');
    var currentTimeEl = $('#currentTime');
    var currentDay = dayjs().format('dddd MMMM D, YYYY')
    var currentTime = dayjs().format('h[:]mm a');
    currentDayEl.text(currentDay);
    currentTimeEl.text(currentTime);
  }
  // refreshes the time every second to keep the time up to date
   setInterval(displayDateTime, 1000);
});