function generateTable() {

      // Generate array and populate with data
      var queries = new Array();
      queries.push(["QueryID", "Query", "Status", "Date"]);
      queries.push([1, "PowerMax-1.2", "Success", "2017-11-20"]);
      queries.push([2, "PowerMax-D2", "Failure", "2017-11-20"]);
      queries.push([3, "AlantisEC", "Success", "2017-11-20"]);
      queries.push([4, "Bravo", "Success", "2017-11-20"]);

      // Create HTML table element
      var table = document.createElement("TABLE");
      table.border = "1";


      // Get column count
      var columnCount = queries[0].length;

      // Create header row
      var row = table.insertRow(-1);
      for (var i = 0; i < columnCount; i++) {
          var headerCell = document.createElement("TH");
          headerCell.innerHTML = queries[0][i];
          row.appendChild(headerCell);
      }

      // Add the data rows
      for (var i = 1; i < queries.length; i++) {
          row = table.insertRow(-1);
          for (var j = 0; j < columnCount; j++) {
              var cell = row.insertCell(-1);
              cell.innerHTML = queries[i][j];
          }
      }

      var dvTable = document.getElementById("dvTable");
      dvTable.innerHTML = "";
      dvTable.appendChild(table);
  }

$(document).ready(function () {
  $('.header').load("header.html");
});
