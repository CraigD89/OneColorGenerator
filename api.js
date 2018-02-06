$(document).ready(function() {
  //Random hex generator

  var hex = function() {
    var letters = "0123456789ABCDEF";
    var color = "";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16) | 0];
    }

    console.log("Random color is ", color);

    var queryURLBase = "http://www.thecolorapi.com/id?format=json&hex=" + color;
    console.log("url", queryURLBase);

    $.ajax({
      url: queryURLBase,
      method: "GET"
    }).then(function(response) {
      // $("#hexInfo").append(response.hex.value);
      // $("#hexInfo").append(response.name.value);

      // $("#hexInfo").append(response.hex.value);
      // $("#hexInfo").append(response.name.value);

      $("#hexInfo").text(response.hex.value);
      $("#colorName").text(response.name.value);

      // renderButton();
      console.log("res", response);
      console.log("Hex is", response.hex.value);
      console.log("Color name is ", response.name.value);
      var colorName = response.name.value;
      console.log("colorName", colorName);
    });
//start of chain to googleapi
// 
// var googleURL = "jenna's url";
//       $.ajax({
//         url: "googleURL + colorName +",
//         method: "GET"
//       }).then(function(results) {
//         console.log("googleURL", results);
//       });
//------------------ after the ajax 'GET' comes back with results dig down and----------------- 
//----------------find then create a for loop ----------

    // for (var i = 0; i < results.googleapi.images.results.length; i++)){
//   create new element that says $("<img>").w3lookup(src=bossresponse.images.results.result.clickurlform the yahoo response) look up syntax add a src and alt tag }
//   append to empty div
//-----------once we know what we need to dig down for we can jquery to add the images to the div or put this in
//a for loop-----------------------------------------------------------------------------------------------

//       $("#craigsnewdiv").text(results.new.drill.param);
//       console.log("results.new.drll.param", body.new.drill.param);
    // });
    
    // $("body").css("background-color", hex());
    return color;
    
  };
  $("body").css("background-color", "#" + hex());

  //on click
  $("#generatorBtn").click(function() {
    hex();
    $("body").css("background-color", "#" + hex());
  });

  $("#info").click(function() {
    $("#toggle").toggle(".projectInfo");
  });

$("#craig'scamerabtn").click(function(){
  $("#togglemaybe").toggle(".projectInfo");

});

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
//--------------------------SHAMAN IDEAS button style----------------
//add shadow to button
//if black turn elements to white

//-----------------------PSEUDO CODE YAHOO API FEATURE---------------------
//search for yahoo.dev tools
//parameter search: img
// api "https://yboss.yahooapis.com/ysearch/images?q={keywords}[&param1=val1&param2=val2&etc]"
//turn on filters

// var queryURLYahoo = "https://yboss.yahooapis.com/ysearch/images?q=dog+ show&format=json&img.dimensions=wallpaper]"

// $.ajax({
//   url: queryURLYahoo,
//   method: "GET"
// }).then(function (response) {

//   //<add to html link tag> target="_blank";

// need url's from the response Json bossresponse.images.results.result.clickurl
// //change xml to json
// //&count to 10
// build for loop index array
// var yahooImg =[];

// for (var i = 0; i < results.bossresponse.images.results.length; i++) {
//   color += letters[Math.floor(Math.random() * 16) | 0];
// };

//--------------------Project Information Feature--------animation slider--------

// function drawanimation () {

// };
