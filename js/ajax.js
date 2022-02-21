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

        // console.log("date1: ", date1);
        // console.log("date2: ", date2);

        date1 = new Date(date1).getTime()
        date2 = new Date(date2).getTime()

        // console.log("date1 seconds: ", date1);
        // console.log("date2 seconds: ", date2);
        

        // ---------------------------------------
        // (2) difference
        // ---------------------------------------
        var difference_seconds = date1 - date2
        var difference_date = difference_seconds/86400000

        if (difference_date < 0) {

            // console.log("difference (in days): ", - difference_date);
            difference_date = - difference_date

        } else {

            // console.log("difference (in days): ", difference_date);
            
        }
    
        // ---------------------------------------
        // (2) set difference in div#result
        // ---------------------------------------
        $("#result").text('The different is ' + difference_date + ' days!')
  

    });
  

});
  