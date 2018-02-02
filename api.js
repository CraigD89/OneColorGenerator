
//Random hex generator
var hex = function () {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16) | 0];
  }
  return color;

  console.log("Random color is ", color);


  var queryURLBase = "http://www.thecolorapi.com/id?format=json&hex=" + hex;

    $.ajax({
      url: queryURLBase,
      method: "GET"
    }).then(function (response) {
      console.log(response.hex.value);
      console.log(response.name.value);
    });


};





//click event will change background color on each click 
// var setRandomColor = function () {
  $("body").css("background-color", hex());
//   $("colorChange").click("setRandomColor()");
// };


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

//---------------api gives us hex and name JSON-----------------------------
// var queryURLBase = "http://www.thecolorapi.com/id?format=json&hex=E46EE8"

// $.ajax({
//   url: queryURLBase,
//   method: "GET"
// }).then(function (response) {
//   console.log(response.hex.value);
//   console.log(response.name.value);
// })