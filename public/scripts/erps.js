console.log('Script Running'); // Verifies script is running

//---------------
//  Ajax Call
//---------------
// Ajax call settings
var settings = {
  "async": false,
  "crossDomain": true,
  "url": "http://localhost:3000/api/erps/limit140", // Get request to the api
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
// for (var i = 0; i < postgres.length; ++i) {
//     var $ul = $('<ul></ul>', {id: i}); // create an html element with jQuery
//     $('#postgres').append($ul); // add the element to the div in the index
//     for (var prop in postgres[i]) {
//         $($ul).append($('<li/>').text(prop + ': ' + postgres[i][prop])); // adds a list element to the unordered list for each property in the postgres object
//     }
// }

// THIS BLOCK WORKS
// Displays data in a table
var tbl=$("<table/>").attr("id","mytable");
var th="<tr><th>ERP Name</th><th>Last Updated Date</th><th>Ingestion failure?</th></tr>";
$("#div1").append(tbl);
$("#mytable").append(th);
for(var i=0;i<postgres.length;i++)
{

    var tr="<tr>";
    var td2="<td>"+postgres[i]["erp_name"]+"</td>";
    var td3="<td>"+postgres[i]["date_field"]+"</td>";
    var td4="<td>"+postgres[i]["is_failure"]+"</td></tr>";

   $("#mytable").append(tr+td2+td3+td4);

}

// INTACT & FROZEN
// var tbl=$("<table/>").attr("id","mytable");
// var th="<tr><th>ID</th><th>ERP</th><th>Date</th><th>Failure?</th></tr>";
// $("#div1").append(tbl);
// $("#mytable").append(th);
// for(var i=0;i<postgres.length;i++)
// {
//
//     var tr="<tr>";
//     var td1="<td>"+postgres[i]["id"]+"</td>";
//     var td2="<td>"+postgres[i]["erp_name"]+"</td>";
//     var td3="<td>"+postgres[i]["date_field"]+"</td>";
//     var td4="<td>"+postgres[i]["is_failure"]+"</td></tr>";
//
//    $("#mytable").append(tr+td1+td2+td3+td4);
//
// }
