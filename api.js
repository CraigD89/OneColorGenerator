

var value = "0047AB";    
var queryURLBase =  "http://thecolorapi.com/id?hex"


var colorgenerated = 0;		

    $.ajax({
      url: queryURLBase,
      method: "GET"
    }).then(function(response) {
      console.log(response.hex.value);
    })

   var getRandomColor = function() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 260)];
      }
      return color;
    };
    
    //click event will change background color on each click 
    var setRandomColor = function () {
      $("#colorDiv").css("background-color", getRandomColor());
      $("colorChange").click("setRandomColor()");
    };


//----------------------------------------------------------------------------------

  // function displayMovieInfo() {

  //   var movie = $(this).attr("data-name");
  //   var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

  //   $.ajax({
  //     url: queryURL,
  //     method: "GET"
  //   }).then(function(response) {
  //     $("#movies-view").text(JSON.stringify(response));
  //     renderButtons();
  //   });
  // }
    
    