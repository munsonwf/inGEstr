console.log('Script Running'); // Verifies script is running

//---------------
//  Ajax Call
//---------------
// Ajax call settings
var settings = {
  "async": false,
  "crossDomain": true,
  "url": "http://localhost:3000/api/incidents", // Get request to the api
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "0a660068-7f1f-f9d9-a60a-9e5a8bf7c4e8"
  }
}

$(document).ready(function(){
  $('.header').load("header.html");
});

// Makes the Ajax call and stores it in the postgres variable
var postgres = $.ajax(settings).done().responseJSON;
// var jsonStr = $("pre").text();
// var jsonObj = JSON.parse(jsonStr);
// var jsonPretty = JSON.stringify(jsonObj, null, '\t');

$("pre").text(jsonPretty);

// Logs the Ajax response to verify it went through okay
console.log('Ajax response:', postgres);
//---------------

// For Loop loops through the postgres data to display it in html
for (var i = 0; i < postgres.length; ++i) {
    var $ul = $('<ul></ul>', {id: i}); // create an html element with jQuery
    $('#postgres').append($ul); // add the element to the div in the index
    for (var prop in postgres[i]) {
        $($ul).append($('<li/>').text(prop + ': ' + postgres[i][prop])); // adds a list element to the unordered list for each property in the postgres object
    }
}
