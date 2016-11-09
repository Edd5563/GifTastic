//Connected.
$(document).ready(function(){
    var heroList = ["Superman", "Batman", "Spiderman", "Wolverine"];
    var search = "";
    var apiKey = "&api_key=dc6zaTOxFJmzC";
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ search + "&limit=10&api_key=" + apiKey; 
    var limit = 10-1;    





//---------------------------------------- Dynamic Buttons creation section
    function renderBtn(){ 
        $('.btnArea').empty();
        for (var i = 0; i < heroList.length; i++) {
            search = heroList[i]
            queryURL = "http://api.giphy.com/v1/gifs/search?q="+ search + 
            "&limit=10&api_key=" + apiKey;  
            var heroBtn = $('<button>')
            heroBtn.addClass('gifBtn');
            heroBtn.attr("data-gif", queryURL);
            heroBtn.text(heroList[i]);
            $('.btnArea').append(heroBtn);
            gif_Display();
        }
    }




//----------------------------------------  Pushes out new hero buttons
    $('#addHeroGif').on('click', function(){
            var hero = $('#hero_Input').val();
            heroList.push(hero);
            renderBtn();
            $('#hero_Input').val('');
            return false;
            }); 





//---------------------------------------- calls the 4 in the array  at document load
    renderBtn();  



//---------------------------------------- ajax function
function gif_Display() {
    $('.gifBtn').on('click', function() {
    var user = $(this);
    var userClicked = user.data("gif");
    console.log(userClicked);
    
    $.ajax({
        url: userClicked,
        method: "GET"
    }).done(function(response) {   // <----- I think the error might also be coming from here*
        $(".displayArea").empty();
            for (var i = 0; i < limit; i++) {
                var image = $("<img>");
                image.addClass("gifImage");    
                image.attr({
                "src" : response.data[i].images.fixed_height_still.url,   
                "data-gif" : userClicked,
                "data-stats": "still",
                "data-index": i
                });
            $(".displayArea").append(image)
            }
        });
});
}







//------------ My still/live function.... 
// Issues are here. When i click on the pictures its not goign live.
// ive been working at this all day and i just cant see it :(

$(document).on("click", "img.gifImage" , function() {

    var user = $(this);
    var userClicked = user.data("gif");
    var picsIndex = user.data("index");
    var stats = user.data("stats");

    $.ajax({
        url: userClicked,
        method: "GET"
        }).done(function(response) {
            if (stats == "still") {
                $(".displayArea").empty();
                for (var i = 0; i < limit; i++) {
                    if (i != picsIndex) {
                        var image = $("<img>");
                        image.addClass("gifImage");
                        image.attr({
                            "src" : response.data[i].images.fixed_height_still.url,
                            "data-gif" : userClicked,
                            "data-stats": "still",
                            "data-index": i
                        });
                        $(".displayArea").append(image)
                    } else {
                            var image = $("<img>");
                            image.addClass("gifImage");
                            image.attr({
                                "src" : response.data[i].images.fixed_height.url,
                                "data-gif" : userClicked,
                                "data-stats": "live",
                                "data-index": i
                            });
                        $(".displayArea").append(image)
                        }
                    }
            } else if (stats == "live") {
                $(".displayArea").empty();
                for (var i = 0; i < limit; i++) {
                    if (i == picsIndex) {
                        var image = $("<img>");
                        image.addClass("gifImage");
                        image.attr({
                            "src" : response.data[i].images.fixed_height_still.url,
                            "data-gif" : userClicked,
                            "data-stats": "still",
                            "data-index": i
                        });
                        $(".displayArea").append(image)
                        } else {
                            var image = $("<img>");
                            image.addClass("gifImage");
                            image.attr({
                                "src" : response.data[i].images.fixed_height_still.url,
                                "data-gif" : userClicked,
                                "data-stats": "still",
                                "data-index": i
                            });
                        $(".displayArea").append(image)
                        }
                }
            }
        });
    });
//----------------------------------------End of function


}); // document ready closer

