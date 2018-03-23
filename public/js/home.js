
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
        alert('test')
        window.location.replace('/youtube')  
    })

});


$("#searchButton").on("click", function(event) {
    event.preventDefault();
    
    
    var searchTerm = {
        term:$("#search-party-input").val().trim()};
    
    
    alert(searchTerm.term);

    $.ajax({
        type: "GET",
        url:  "/api/rooms/"+searchTerm.term
    }).then (function(data) {
        console.log(data);
        alert('test2');
        window.location.replace('/allRooms');  
    });

});



  