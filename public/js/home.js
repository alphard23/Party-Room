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
        window.location.replace('/songs')
        
    })
   
  
  
  });
  
//   $("#searchButton").on("click", function(event) {
//     event.preventDefault();

//     var findRoom = {
//         partyRoom: $("#search-party-input").val().trim()
//       };

//     $.ajax({
//         method: "POST",
//         url:  "/api/songs", 
//         data: newRoom 
//     }).then (function(data) {
//         console.log(data)
//         location.redirect("/songs")
//     })
//    alert("i work!");
  
//   });
  