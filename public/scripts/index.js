console.log("Running index.js script");

var today = new Date();
var entry = {};
var entry1 = {};
var entry2 = {};
var entry3 = {};
var entry4 = {};
var entry5 = {};
var entry6 = {};
var entry7 = {};
var entry8 = {};
var entry9 = {};
var entry10 = {};
var entry11 = {};
var entry12 = {};
var entry13 = {};
var entry14 = {};
var number80 = 80;
var run = {
    getDate: function() {
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd<10) {
            dd = '0' + dd
        }
        if(mm<10) {
            mm = '0' + mm;
        }
        console.log('Today is', today);
        today = yyyy + '-' + mm + '-' + dd;
        // today = mm + '/' + dd + '/' + (yyyy % 2000);   //old format, doesnt match the date picker format
        $('#todays-date').text(today);
    },
    getInput: function() {
        console.log('Getting Input...');
        entry.report_date = $('#report_date-modal').val();
        entry.completion_time = $('#completion_time-modal').val();
        entry.queries_failed = $('#queries_failed-modal').val();
        entry.success = $('#success-modal').prop('checked');
        entry.comments = $('#comments-modal').val();
        console.log('Input:', entry);
    },
    getInputErps: function() {
        console.log('Getting Input for ERPs...');
        entry1.date_field = $('#report_date-modal').val();
        entry1.is_failure = $('#alpha-modal').prop('checked');
        entry1.erp_name = 'alpha';

        entry2.date_field = $('#report_date-modal').val();
        entry2.is_failure = $('#altais-modal').prop('checked');
        entry2.erp_name = 'altais';

        entry3.date_field = $('#report_date-modal').val();
        entry3.is_failure = $('#apcis-modal').prop('checked');
        entry3.erp_name = 'apcis';

        entry4.date_field = $('#report_date-modal').val();
        entry4.is_failure = $('#bravo-modal').prop('checked');
        entry4.erp_name = 'bravo';

        entry5.date_field = $('#report_date-modal').val();
        entry5.is_failure = $('#fusion-modal').prop('checked');
        entry5.erp_name = 'fusion';

        entry6.date_field = $('#report_date-modal').val();
        entry6.is_failure = $('#glprod-modal').prop('checked');
        entry6.erp_name = 'glprod';

        entry7.date_field = $('#report_date-modal').val();
        entry7.is_failure = $('#get_ora-modal').prop('checked');
        entry7.erp_name = 'get_erp';

        entry8.date_field = $('#report_date-modal').val();
        entry8.is_failure = $('#ipus-modal').prop('checked');
        entry8.erp_name = 'ipus';

        entry9.date_field = $('#report_date-modal').val();
        entry9.is_failure = $('#omega-modal').prop('checked');
        entry9.erp_name = 'omega';

        entry10.date_field = $('#report_date-modal').val();
        entry10.is_failure = $('#ofs-modal').prop('checked');
        entry10.erp_name = 'ofs';

        entry11.date_field = $('#report_date-modal').val();
        entry11.is_failure = $('#pascal-modal').prop('checked');
        entry11.erp_name = 'pascal';

        entry12.date_field = $('#report_date-modal').val();
        entry12.is_failure = $('#powermax-modal').prop('checked');
        entry12.erp_name = 'powermax';

        entry13.date_field = $('#report_date-modal').val();
        entry13.is_failure = $('#races-modal').prop('checked');
        entry13.erp_name = 'races';

        entry14.date_field = $('#report_date-modal').val();
        entry14.is_failure = $('#zeal-modal').prop('checked');
        entry14.erp_name = 'zeal';


        console.log('Input:', entry1);
    },
    post: function(ent) {
        console.log('Posting:', ent);
        $.ajax("http://localhost:3000/api/reports", {
            async: false,
            method: 'POST',
            data: ent,
            function(data, status) {
                console.log('Posted: ' + data + '\nStatus: ' + status);
            }
        });
    },
    post2: function(ent) {
        console.log('Posting:', ent);
        $.ajax("http://localhost:3000/api/erps", {
            async: false,
            method: 'POST',
            data: ent,
            function(data, status) {
                console.log('Posted: ' + data + '\nStatus: ' + status);
            }
        });
    }
};

$('#submit-modal').on('click', function() {
    run.getInput();
    run.getInputErps();
    run.post(entry);
    run.post2(entry1);
    run.post2(entry2);
    run.post2(entry3);
    run.post2(entry4);
    run.post2(entry5);
    run.post2(entry6);
    run.post2(entry7);
    run.post2(entry8);
    run.post2(entry9);
    run.post2(entry10);
    run.post2(entry11);
    run.post2(entry12);
    run.post2(entry13);
    run.post2(entry14);
    $('#exampleModal').modal('hide');  //close the modal window
    location.reload();
    // renderReportHistory();  //"dynamically" re-renders all of the reports (including the newly added one) after the submit button has been clicked.
});

$('#todays-date-modal').on('click', function() {
    $('#report_date-modal').val(today);
});

$(document).ready(function() {
    run.getDate();
    renderReportHistory();
    renderErpHistory();

    $('.header').load("header.html");
    // CSS
    $(this).css('color', 'red');
});

function renderReportHistory(){
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
  // Makes the Ajax call and stores it in the postgres variable
  // var reports = $.ajax(settings).done().responseJSON.reverse();
  var reports = $.ajax(settings).done().responseJSON
  console.log('reports length: '+ reports.length);
  // Logs the Ajax response to verify it went through okay
  console.log('Ajax response:', reports);

  var lastReport = reports[0];
  console.log('last reports date is: ' + lastReport.report_date);
  console.log('last reports comment is: ' + lastReport.comments);
  console.log('today is: ' + today);

  //if there is a report for today
  if(lastReport.report_date == today){
    console.log('we have a report for today');
    $('#todaysReportYes').text("Ingestion is complete");
    $('#todaysReportNo').text(""); //clear the one its not
  }
  //if there is not a report for today
  else if (lastReport.report_date != today){
    console.log('There is no available report for today');
    $('#todaysReportNo').text("Ingestion not yet completed for today");
    $('#todaysReportYes').text(""); //clear the one its not
  }
  console.log('Bout to render the last report: ' + lastReport.completion_time);
  renderReport(lastReport);

  function renderReport(report){
    console.log('renderReport function called, received report: ' + report.success);
    $.trim($('#report_date').text(report.report_date));
    $.trim($('#completion_time').text(report.completion_time));
    $.trim($('#queries_failed').text(report.queries_failed));
    $.trim($('#comments').text(report.comments));
    // $.trim($('#queries_passed').text(report.queries_passed));
    //
    // $('#queries_passed');

    if(report.success)
      $.trim($('#success').text('🙌 Success 🙌'));
    else
      $.trim($('#success').text('❌ Failed ❌'));
  }
}

function renderErpHistory(){
  var settings = {
    "async": false,
    "crossDomain": true,
    "url": "http://localhost:3000/api/erps", // Get request to the api
    "method": "GET",
    "headers": {
      "cache-control": "no-cache",
      "postman-token": "0a660068-7f1f-f9d9-a60a-9e5a8bf7c4e8"
    }
  }
  // Makes the Ajax call and stores it in the postgres variable
  var erps = $.ajax(settings).done().responseJSON.reverse();
  console.log('erps length: '+ erps.length);
  // Logs the Ajax response to verify it went through okay
  console.log('Ajax response:', erps);

  var alpha = erps[0];
  var altais = erps[1];
  var apcis = erps[2];
  var bravo = erps[3];
  var fusion = erps[4];
  var glprod = erps[5];
  var get_erp = erps[6];
  var ipus = erps[7];
  var omega = erps[8];
  var ofs = erps[9];
  var pascal = erps[10];
  var powermax = erps[11];
  var races = erps[12];
  var zeal = erps[13];
  renderErp(alpha, altais, apcis, bravo, fusion, glprod, get_erp, ipus, omega, ofs, pascal, powermax, races, zeal);



  function renderErp(alpha, altais, apcis, bravo, fusion, glprod, get_erp, ipus, omega, ofs, pascal, powermax, races, zeal){
    console.log('renderErp function called, received report: ' + erps.success);
    // $.trim($('#alpha').text(alpha.is_failure));
    $.trim($('#altais').text(altais.is_failure));
    $.trim($('#apcis').text(apcis.is_failure));
    $.trim($('#bravo').text(bravo.is_failure));
    $.trim($('#fusion').text(fusion.is_failure));
    $.trim($('#glprod').text(glprod.is_failure));
    $.trim($('#get_erp').text(get_erp.is_failure));
    $.trim($('#ipus').text(ipus.is_failure));
    $.trim($('#omega').text(omega.is_failure));
    $.trim($('#ofs').text(ofs.is_failure));
    $.trim($('#pascal').text(pascal.is_failure));
    $.trim($('#powermax').text(powermax.is_failure));
    $.trim($('#races').text(races.is_failure));
    $.trim($('#zeal').text(zeal.is_failure));

    if(alpha.is_failure)
      $.trim($('#alpha').text('❌'));
    else
      $.trim($('#alpha').text('✅'));

    if(altais.is_failure)
      $.trim($('#altais').text('❌'));
    else
      $.trim($('#altais').text('✅'));

    if(apcis.is_failure)
      $.trim($('#apcis').text('❌'));
    else
      $.trim($('#apcis').text('✅'));

    if(bravo.is_failure)
      $.trim($('#bravo').text('❌'));
    else
      $.trim($('#bravo').text('✅'));

    if(fusion.is_failure)
      $.trim($('#fusion').text('❌'));
    else
      $.trim($('#fusion').text('✅'));

    if(glprod.is_failure)
      $.trim($('#glprod').text('❌'));
    else
      $.trim($('#glprod').text('✅'));

    if(get_erp.is_failure)
      $.trim($('#get_erp').text('❌'));
    else
      $.trim($('#get_erp').text('✅'));

    if(ipus.is_failure)
      $.trim($('#ipus').text('❌'));
    else
      $.trim($('#ipus').text('✅'));

    if(omega.is_failure)
      $.trim($('#omega').text('❌'));
    else
      $.trim($('#omega').text('✅'));

    if(ofs.is_failure)
      $.trim($('#ofs').text('❌'));
    else
      $.trim($('#ofs').text('✅'));

    if(pascal.is_failure)
      $.trim($('#pascal').text('❌'));
    else
      $.trim($('#pascal').text('✅'));

    if(powermax.is_failure)
      $.trim($('#powermax').text('❌'));
    else
      $.trim($('#powermax').text('✅'));

    if(races.is_failure)
      $.trim($('#races').text('❌'));
    else
      $.trim($('#races').text('✅'));

    if(zeal.is_failure)
      $.trim($('#zeal').text('❌'));
    else
      $.trim($('#zeal').text('✅'));
  }
}
