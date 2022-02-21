$(document).ready(function(){

    // -----------------------------------------------------------------
    // Add Submit Event to Form 
    // -----------------------------------------------------------------
    $("#dateform").on("submit", function(e) {

        // prevent default event after submiting the form 
        // prevent send data and refresh page
        e.preventDefault()
  
        // ---------------------------------------
        // (1) get values
        // ---------------------------------------
        var date1 = $("#date1").val()
        var date2 = $("#date2").val()
        var hour1 = $("#hour1").val()
        var hour2 = $("#hour2").val()
  
        var date1 = date1 +" - "+ hour1 + ":00"
        var date2 = date2 +" - "+ hour2 + ":00" 

        var minutes = Math.abs(new Date(date1) - new Date(date2)) / 60000; 
        var hours = Math.round(minutes / 60)
        var days = Math.floor(hours / 24)
        hours = hours % 24
         
        // ---------------------------------------
        // (2) set difference in div#result
        // ---------------------------------------
        $("#result").text('The different is ' + days + ' days and ' + hours + ' hours!');
  

    });
  

});
  