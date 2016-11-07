//Connected.
$(document).ready(function(){
// list array
var heroArray = [ //--------  The Hero array
"Superman", "Batman", "Spiderman", "Wolverine", "Wonder Woman", "Captain America", 
"Hal Jordan", "Wally West", "The Hulk", "Daredevil", "Dick Grayson", "Jean Grey", 
"Thor", "Morpheus", "Barbara Gordon", "The Thing", "James Gordon", "Cat Woman"];

//-------------------------------------------------------------------------  Ajax call section

//----------------------- Ajax Section
var search = 'Batman';
var APIKey = "&api_key=dc6zaTOxFJmzC";
var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ search + "&limit=10&api_key=" + APIKey; 
console.log(queryURL);     

var request = {
    url: queryURL,
    method: "GET"
};



$.ajax(request).done(function(response) {
    console.log(response);
//-----------------------Pushing to html
// $("#gifsShowHere")
var gif = $('<img>');
 gif.attr("src", response.data[0].images.original.url);
$("#gifsShowHere").append(gif);
// $("#gifsShowHere").append(response.data.bitly_gif_url);

}); // ajax call end

//------------------------------------------------------------------------ Dynamic Buttons creation section
    function makeBtn(){ 

        $('#gifView').empty();
//---------- Dynamically makes my buttons to my array
        for (var i = 0; i < heroArray.length; i++) {
            heroArray[i];
            var button = $('<button class="button">');
            button.attr("data-hero", heroArray[i]);
            button.text(heroArray[i]);
            $('#gifView').append(button);
        }
    }
//----------- takes the hero informaiton from the input.
    $('#addHeroGif').on('click', function(){
        var input = $('#hero_Input').val();
        heroArray.push(input);
        makeBtn();
        return false;
    }); // Bug When creating a new button, All of the buttons seem to lose their effectivitiness.

    makeBtn();  // makes the new hero button


$(".button").on('click', function() {
    var search = $(this).data("hero");
    console.log(search);
});  // On click end
































}); // document ready closer