$(document).ready(function() {
    let createRoom = $('#createButton');


    // adding event listener for creating a room
    $(document).on('submit', handleRoomSubmit);

    // function to handle when room is submitted
    function handleRoomSubmit(event) {
        event.preventDefault();
        // prevent room submission if nothing entered
        if (!createRoom.val().trim().trim()) {
            return;
        }
    }
})