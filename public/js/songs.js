$(document).ready(function(){

    var newSong = $("#add-song");
    var songPosition = 0;
    var songArray = [];
    var newSongArray = [];
    var songReturned = "";
    var songId = ""; 
    var likes = "";

    $("#addSongButton").on("click", function(event) {
    event.preventDefault();

    var chosenSong = {
        songName: $(newSong).val().trim()
    };
     
    $.ajax({
        method: "POST",
        url: "/api/songs",
        data: chosenSong
    }).then(function(data){
        //console.log(data)

        
        songArray.push(data);
        console.log(songArray);
        

        renderPage();
        newSong.val("");
    }) 
    });


function renderPage(){
    
    var songPosition = 0;
    var div = "<div>";
    var sdiv = "</div>";
    var h3tag = "<h3>";
    var sh3tag = "</h3>";
    var br = "<br>";
    // var button = "<button class='likeButton' id='likeButton'>";
    var sbutton = "</button>";

        console.log(songArray);

        var addSong = $("#addSongsHere").html(div + sdiv + br);

    for(var i=0; i < songArray.length; i++){
        var button = "<button class='likeButton' value="+i+" id='likeButton'>";
        currentSong(i);
        // findSongId(i);
        
    
        console.log("songReturned: " + songReturned)
    
        addSong.append("<div value='" +i+"'" + h3tag + songReturned + sh3tag + sdiv + button + "👍" + sbutton + br); 
        likeButton();       
    }
    

}


function currentSong(num){
    songReturned =  songArray[num].dbSong.name;
    return songReturned;
}

// function findSongId(num){
//     songId =  songArray[num].dbSong.id;
//     return songId;
// }


function likeButton(){
    $("#likeButton").on("click", function(event) {
        
        var chosen = {
            songId: songId
        };
            console.log(chosen.songId);
            //runAjax();
            
            renderPage();  
             
    });
        
}

// function updateSongLikes(num){
//     likes = songArray[num].dbSong.likes;
//     like = likes + 1;
//     return likes;
// }



});

