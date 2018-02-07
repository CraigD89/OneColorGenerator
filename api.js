$(document).ready(function () {
  console.log("I am working")
  // var colorName = "";
  //Random hex generator
  var hex = function () {
    var letters = "0123456789ABCDEF";
    var color = "";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16) | 0];
    var hex = function () {
        var letters = "0123456789ABCDEF";
        var color = "";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16) | 0];
        };


        console.log("Random color is ", color);

        var queryURLBase = "http://www.thecolorapi.com/id?format=json&hex=" + color;
        // console.log("url", queryURLBase);

        $.ajax({
            url: queryURLBase,
            method: "GET",
            success: function (response) {
                // $("#hexInfo").append(response.hex.value);
                // $("#hexInfo").append(response.name.value);

                // $("#hexInfo").append(response.hex.value);
                // $("#hexInfo").append(response.name.value);

                // $("body").css("background-color", hex());
                $("#hexInfo").text(response.hex.value);
                $("#colorName").text(response.name.value);
                var colorName = response.name.value;
                // var colorString = JSON.parse(colorName);
                // console.log(colorName);
                console.log(typeof colorName);


                // renderButton();
                console.log("res", response);
                console.log("Hex is", response.hex.value);
                console.log("Color name is ", response.name.value);
                console.log("colorName", colorName);

                var flickrURL = "https://api.flickr.com/services/rest";
                $.ajax({
                    url: flickrURL,
                    method: 'GET',
                    data: {
                        api_key: "d5fbbf2c476fdcca3ad42c6374949a6a",
                        method: "flickr.photos.search",
                        format: "json",
                        nojsoncallback: 1,
                        text: colorName,
                        extras: "url_o"
                    },

                    success: function (results) {
                        console.log(results.photos.photo[0].url_o);

                    },
                    error: function (error) {
                        console.log("error" + error);
                    }

                }).then(function (results) {

                    // console.log('flickr', results);

                });
            },
            error: function (error) {
                console.log("error" + error);
            }
        }).then(function (response) {




        });
        return color;
        return colorName;

    };


    // console.log("Random color is ", color);

    var queryURLBase = "http://www.thecolorapi.com/id?format=json&hex=" + color;
    // console.log("url", queryURLBase);

    $.ajax({
      url: queryURLBase,
      method: "GET"
    }).then(function (response) {

      
      // $("#hexInfo").append(response.hex.value);
      // $("#hexInfo").append(response.name.value);

      // $("#hexInfo").append(response.hex.value);
      // $("#hexInfo").append(response.name.value);

      // $("body").css("background-color", hex());
      $("#hexInfo").text(response.hex.value);
      $("#colorName").text(response.name.value);
      var colorName = response.name.value;

      // renderButton();
      // console.log("res", response);
      // console.log("Hex is", response.hex.value);
      // console.log("Color name is ", response.name.value);
      // console.log("colorName", colorName);
    });
    //------------trying to get access to colorName--------------
    

  $("body").css("background-color", "#" + hex().color);

  var flickrURL = "https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=d5fbbf2c476fdcca3ad42c6374949a6a&format=json&nojsoncallback=1&text=" + hex().colorName +"&extras=url_o";

  $.ajax({
    url: flickrURL,
    method: 'GET',
    success: function (results) {
      console.log(results.photos.photo[0].url_o);
  return colorName;
},
error: function (error) {
    console.log("error" + error);
}
}).then(function (results) {
});
    


  // var googleURL = "https://www.googleapis.com/customsearch/v1?parameters";
  // // "http://www.google.com/search?q=(nature+OR+painting+OR+photography+OR+food+OR+interior+design+OR+logos+OR+landscapes+OR+ads+OR+pantone)" + colorName;
  // $.ajax({
  //   url: googleURL,
  //   method: "GET",
  //   data: {
  //     key: "AIzaSyC0JcHKG7NamAdCM1PA5nMKQu9SYvpzUZI",
  //     cx: "AIzaSyAFBVlKmK9FQoTzO3eJmvUvNMx8jH4Dp2E",
  //     q: colorName + "photo"
  //   }
  // }).then(function (results) {
  //   console.log("googleURL", results);
  // });


  // $("#generatorBtn").click(function () {
  //   $("body").css("background-color", "#" + hex());
  // });

  // $("#info").click(function () {
  //   $("#toggle").toggle(".projectInfo");
  // });
  // //------------------ after the ajax 'GET' comes back with results dig down and----------------- 
  //----------------find then create a for loop ----------

  // for (var i = 0; i < results.googleapi.images.results.length; i++)){
  //   create new element that says $("<img>").w3lookup(src=bossresponse.images.results.result.clickurlform the yahoo response) look up syntax add a src and alt tag }
  //   append to empty div
  //-----------once we know what we need to dig down for we can jquery to add the images to the div or put this in
  //a for loop-----------------------------------------------------------------------------------------------

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
  // var googleresults
  // for (var i = 0; i < results.googleresults.images.results.length; i++)){
  //   create new element that says $("<img>").w3lookup(src=bossresponse.images.results.result.clickurlform the yahoo response) look up syntax add a src and alt tag }
  //   append to empty div
  //-----------once we know what we need to dig down for we can jquery to add the images to the div or put this in
  //a for loop-----------------------------------------------------------------------------------------------

  //       $("#craigsnewdiv").text(results.new.drill.param);
  //       console.log("results.new.drll.param", body.new.drill.param);
  // });

  // $("body").css("background-color", "#" + hex());

  // //on click

//   $("#images").click(function () {
//     $("#togglemaybe").toggle(".projectInfo");
//     // $("#craigcamerabtn").click(function(){
//     //   $("#togglemaybe").toggle(".projectInfo");


//   });

    $("#generatorBtn").click(function () {
        $("body").css("background-color", "#" + hex());
    });

    $("#info").click(function () {
        $("#toggle").toggle(".projectInfo");
    });

    //Click camera for images
    // $("#camera").click(function () {
    //     $("#").toggle(".");
    // });


});



    //------------------ after the ajax 'GET' comes back with results dig down and----------------- 
    //----------------find then create a for loop ----------

// $(document).ready(function () {

//   $('#top-left').hover(function () {
//     $(this).children('.front').stop().animate({
//       'top': '150px',
//       'bottom': '300px'
//     }, 300);
//   }, function () {
//     $(this).children('.front').stop().animate({
//       'top': '0px',
//       'bottom': '0px'
//     }, 900);
//   });

//   $('#top-center').hover(function () {
//     $(this).children('.front').stop().animate({
//       'top': '150px',
//       'bottom': '300px'
//     }, 800);
//   }, function () {
//     $(this).children('.front').stop().animate({
//       'top': '0px',
//       'bottom': '0px'
//     }, 800);
//   });

//   $('#bottom-center').hover(function () {
//     $(this).children('.front').stop().animate({
//       'top': '150px',
//       'bottom': '300px'
//     }, 800);
//   }, function () {
//     $(this).children('.front').stop().animate({
//       'top': '0px',
//       'bottom': '0px'
//     }, 800);
//   });

//   $('#left').hover(function () {
//     $(this).children('.front').stop().animate({
//       'top': '150px',
//       'bottom': '300px'
//     }, 800);
//   }, function () {
//     $(this).children('.front').stop().animate({
//       'top': '0px',
//       'bottom': '0px'
//     }, 800);
//   });


// });

// //------------------------------create a render fxn --------------------------
// // var renderButton = function() {

// //         $("#generatorBtn").click(function() {

// //                     var hex = function() {
// //                             var letters = '0123456789ABCDEF';
// //                             var color = '#';
// //                             for (var i = 0; i < 6; i++) {
// //                                 color += letters[Math.floor(Math.random() * 16) | 0];
// //                             }
// // return color;

// // console.log("Random color is ", color);

// //       var queryURLBase = "http://www.thecolorapi.com/id?format=json&hex=" + hex;

// //       $.ajax({
// //         url: queryURLBase,
// //         method: "GET"
// //       }).then(function (response) {
// //         $("#hexInfo").text(response.hex.value + response.name.value)

// //         // ||
// //         // $("#hexInfo").text(JSON.stringify(response.hex.value + response.name.value))
// //         ;

// //         renderButton();
// //         // console.log(response.hex.value);
// //         // console.log(response.name.value);
// //       });
// //     };



// //   $("body").css("background-color", hex());

// // };

// //click event will change background color on each click
// // var setRandomColor = function () {

// // $("body").css("background-color", hex());
// //   $("colorChange").click("setRandomColor()");
// // };

// //----------------------------------------------------------------------------------

// // function displayMovieInfo() {

// //   var movie = $(this).attr("data-name");
// //   var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

// //   $.ajax({
// //     url: queryURL,
// //     method: "GET"
// //   }).then(function(response) {
// //     $("#movies-view").text(JSON.stringify(response));
// //     renderButtons();
// //   });
// // }

// //---------------api gives us hex and name JSON-----------------------------
// // var queryURLBase = "http://www.thecolorapi.com/id?format=json&hex=E46EE8"

// // $.ajax({
// //   url: queryURLBase,
// //   method: "GET"
// // }).then(function (response) {
// //   console.log(response.hex.value);
// //   console.log(response.name.value);
// // })
// //--------------------------SHAMAN IDEAS button style----------------
// //add shadow to button
// //if black turn elements to white

// //-----------------------PSEUDO CODE YAHOO API FEATURE---------------------
// //search for yahoo.dev tools
// //parameter search: img
// // api "https://yboss.yahooapis.com/ysearch/images?q={keywords}[&param1=val1&param2=val2&etc]"
// //turn on filters

// // var queryURLYahoo = "https://yboss.yahooapis.com/ysearch/images?q=dog+ show&format=json&img.dimensions=wallpaper]"

// // $.ajax({
// //   url: queryURLYahoo,
// //   method: "GET"
// // }).then(function (response) {

// //   //<add to html link tag> target="_blank";

// // need url's from the response Json bossresponse.images.results.result.clickurl
// // //change xml to json
// // //&count to 10
// // build for loop index array
// // var yahooImg =[];

// // for (var i = 0; i < results.bossresponse.images.results.length; i++) {
// //   color += letters[Math.floor(Math.random() * 16) | 0];
// // };

// //--------------------Project Information Feature--------animation slider--------