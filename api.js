$(document).ready(function () {
  //Random hex generator

  var hex = function () {
    var letters = '0123456789ABCDEF';
    var color = '';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16) | 0];
    };
 

    console.log("Random color is ", color);


    var queryURLBase = "http://www.thecolorapi.com/id?format=json&hex=" + color;
    console.log("url", queryURLBase);

    $.ajax({
      url: queryURLBase,
      method: "GET"
    }).then(function (response) {
      // $("#hexInfo").append(response.hex.value);
      // $("#hexInfo").append(response.name.value);

      $("#hexInfo").append(response.hex.value);
      $("#hexInfo").append(response.name.value);

      // renderButton();
      console.log("res", response);
      console.log("Hex is", response.hex.value);
      console.log("Color name is ", response.name.value);
    });
    // $("body").css("background-color", hex());
    return color;

  };
   $("body").css("background-color", "#"+hex());

   //on click 
});

//------------------------------create a render fxn --------------------------
// var renderButton = function () {

//   $("#generatorBtn").click(function () {

//     var hex = function () {
//       var letters = '0123456789ABCDEF';
//       var color = '#';
//       for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16) | 0];
//       }
//       return color;

//       // console.log("Random color is ", color);


//       var queryURLBase = "http://www.thecolorapi.com/id?format=json&hex=" + hex;

//       $.ajax({
//         url: queryURLBase,
//         method: "GET"
//       }).then(function (response) {
//         $("#hexInfo").text(response.hex.value + response.name.value)

//         // ||
//         // $("#hexInfo").text(JSON.stringify(response.hex.value + response.name.value))
//         ;

//         renderButton();
//         // console.log(response.hex.value);
//         // console.log(response.name.value);
//       });
//     };

//   });

//   $("body").css("background-color", hex());

// };






//click event will change background color on each click 
// var setRandomColor = function () {

// $("body").css("background-color", hex());
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
//--------------------------button style----------------
//add shadow to button
//if black turn elements to white