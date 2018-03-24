$(document).ready(function(){
    
var roomAdmin = $("#create-party-input");



$("#createButton").on("click", function(event) {
    event.preventDefault();

    var newRoom = {
        partyRoom: $("#create-party-input").val().trim()
      };

    $.ajax({
        method: "POST",
        url:  "/api/rooms", 
        data: newRoom 
    }).then (function(data) {
        console.log(data)
        window.location.replace('/songs');  

    })

});


$("#searchButton").on("click", function(event) {
    event.preventDefault();
    
    
    var searchTerm = {
        term:$("#search-party-input").val().trim()};
    
    
    $.ajax({
        type: "GET",
        url:  "/api/rooms/"+searchTerm.term
    }).then (function(data) {
        console.log(data);
        window.location.replace('/allRooms');  
    });

});

});