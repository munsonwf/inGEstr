console.log('* Starting Calendar Script');

$(document).ready(function() {

    $('#header').load("header.html");

    var today = new Date();
    determineWeekdays(today.getMonth());

    $('#previous-month').on('click', function() {
        today.setMonth(today.getMonth() - 1);
        determineWeekdays(today.getMonth());
    });

    $('#next-month').on('click', function() {
        if (today.getMonth() === 11) {
            today.setFullYear(today.getFullYear() + 1);
            console.log('Today is now', today);
        }
        determineWeekdays(today.getMonth() + 1);
        today.setMonth(today.getMonth() + 1);
    });
});
//-----
// Functions
//-----
/**
 * Sets the title of the page to the month
 *
 * @param x {Integer} the current month as a number (0-11)
 * @param y
 */
function monthHeader(x, y) {
    console.log('-function- monthHeader()');
    var months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    $('#month').text(months[x] + ' ' + y);
}
/**
 * Returns an array with arrays of the given size.
 *
 * @param weekdays {Array} array to split
 */
function splitWeeks(weekdays) {
    console.log('-function- splitWeeks()');
    var index = 0;
    var tempArray = [];
    for (var i = 0; i < weekdays.length; i += 5) {
        myChunk = weekdays.slice(i, i + 5);
        tempArray.push(myChunk);
    }
    return tempArray;
}
/**
 * Returns a string for a date; format YYYY-MM-DD
 *
 * @param dateObj {Object} date to format
 */
function createDate(dateObj) {
    console.log('-function- createDate()');
    // Throws a zero in front of dates 1 - 9
    var dayOfMonth = dateObj.getDate();
    if (dayOfMonth < 10) {
        dayOfMonth = "0" + dayOfMonth;
    }
    return dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1) + '-' +
        dayOfMonth;
}

/**
 *Returns first-weeks-issues, second-weeks-issues, etc.
 *
 *@param index {Integer} current index of the for loop that called the function
 */
function idBuilder(index) {
    console.log('-function- idBuilder()');
    var something = ["first", "second", "third", "fourth", "fifth", "sixth"];
    return something[index] + '-weeks-issues';
}

/**
 *
 */
function determineWeekdays(x) {
    console.log('-function- determineWeekdays()');

    $('.date-row').remove();

    // Initialized variables
    var weekdays = []; // will end up as an array of arrays, containing the weekdays
    var setDate = 1;

    var date = new Date();
    date.setMonth(x);
    date.setDate(setDate); // Date gets set to the first day of the month
    monthHeader(date.getMonth(), date.getFullYear());

    var thisMonth = date.getMonth();
    while(date.getMonth() === thisMonth) {
        var aDate = []; // each week day gets an array: [day of the week (Integer), full date (String)]
        // if statement will determine if it is weekday; 0 is Sunday, 6 is Saturday
        if (date.getDay() > 0 && date.getDay() < 6) {
            aDate.push(date.getDay()); // adds the day of week to array
            aDate.push(createDate(date)); // createDate() takes the date and makes it a nice string
            weekdays.push(aDate); // stack them boys on the array
        }
        date.setDate(++setDate); // set the date to next day
    }

    // Adds weekdays for previous month
    for (var i = weekdays[0][0] - 1; i > 0; --i) {
        weekdays.unshift([i, ""]);
    }

    weekdays = splitWeeks(weekdays);

    // Adds weekdays for next month
    if (weekdays[weekdays.length - 1].length < 5) {
        for (var i = weekdays[weekdays.length - 1].length + 1; i <= 5; ++i) {
            weekdays[weekdays.length - 1].push([i, ""]);
        }
    }

    //-----
    // Create the rows of the table and adds dates
    // First for loop: Creates the rows of the calendar and gives it an ID
    // Second for loop: Creates each table cell
    //-----
    for (var i = 0; i < weekdays.length; ++i) {
        var elementID = idBuilder(i);
        $('table').append($("<tr>", {id: elementID, class: "date-row"}));
        for (var j = 0; j < 5; ++j) {
            $('#' + elementID).append(
                $("<td>").text(weekdays[i][j][1].slice(-2) // See line 80
            ));
        }
    }
}
