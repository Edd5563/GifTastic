//Connected.
$(document).ready(function(){
// list array
var heroArray = [           // The Hero array
"Superman", "Batman", "Spiderman", "Wolverine", "Wonder Woman", "Captain America", 
"Hal Jordan", "Wally West", "The Hulk", "Daredevil", "Dick Grayson", "Jean Grey", 
"Thor", "Morpheus", "Barbara Gordon", "The Thing", "James Gordon", "Cat Woman"];

//----------------------------------------------------
	function makeBtn(){ 

		$('#gifView').empty();
            // Dynamically makes my buttons to my array
		for (var i = 0; i < heroArray.length; i++) {
			heroArray[i];
			var button = $('<button class="button">');
            button.attr("data-hero", heroArray[i]);
			button.text(heroArray[i]);
			$('#gifView').append(button);
		}
	}
            // takes the hero informaiton from the input.
	$('#addHeroGif').on('click', function(){
		var input = $('#hero_Input').val();
		heroArray.push(input);
		makeBtn();
        return false;
	})

	makeBtn();  // makes the new hero button

$(".button").on('click', function() {
    var search = $(this).data("hero");
    console.log(search);
});

var lookFor = "";
var APIKey = "&api_key=dc6zaTOxFJmzC";
var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ lookFor + APIKey; 

var request = {
    url: queryURL,
    method: "GET"
};


console.log(APIKey);
console.log(queryURL);
console.log(lookFor);



$.ajax(request).done(function(response) {
    console.log(response);
});

}); // document ready closer