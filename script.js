
$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));

    $(".saveBtn").on("click", function () {

        var text = $(this).siblings(".task").val();
        var time = $(this).parent().attr("id");

        
        localStorage.setItem(time, text);
    })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
 
    $("#hour9 .task").val(localStorage.getItem("hour9"));
    $("#hour10 .task").val(localStorage.getItem("hour10"));
    $("#hour11 .task").val(localStorage.getItem("hour11"));
    $("#hour12 .task").val(localStorage.getItem("hour12"));
    $("#hour1 .task").val(localStorage.getItem("hour1"));
    $("#hour2 .task").val(localStorage.getItem("hour2"));
    $("#hour3 .task").val(localStorage.getItem("hour3"));
    $("#hour4 .task").val(localStorage.getItem("hour4"));
    $("#hour5 .task").val(localStorage.getItem("hour5"));


function dayTimer(){
    var currentHour = moment().hour();

    $(".timeStamp").each(function() {
        //  for(i=0; i < timeStamp.length; i++){
        var hourStamp = parseInt($(this).attr("id").split("hour")[1]);
        console.log(hourStamp,currentHour)
        

        if (hourStamp < currentHour){
             $(this).addClass("past");
             $(this).removeClass("present");
            $(this).removeClass("future");
         }
        else if (hourStamp == currentHour){
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
        
    })
    

}
 dayTimer();



})




   
   
  
