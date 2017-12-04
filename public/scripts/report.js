console.log('Script Running'); // Verifies script is running

//---------------
//  Ajax Call
//---------------
// Ajax call settings
var settings = {
  "async": false,
  "crossDomain": true,
  "url": "http://localhost:3000/api/reports", // Get request to the api
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


// THIS BLOCK WORKS
// Displays data in a table
var tbl=$("<table/>").attr("id","mytable");
var th="<tr><th>Report Date</th><th>Completion Time</th><th>Queries Failed</th><th>Success?</th></tr>";
$("#div2").append(tbl);
$("#mytable").append(th);
for(var i=0;i<postgres.length;i++)
{

    var tr="<tr>";
    var td1="<td>"+postgres[i]["report_date"]
    var td2="<td>"+postgres[i]["completion_time"]+"</td>";
    var td3="<td>"+postgres[i]["queries_failed"]+"</td>";
    var td4="<td>"+postgres[i]["success"]+"</td></tr>";

   $("#mytable").append(tr+td1+td2+td3+td4);

}
