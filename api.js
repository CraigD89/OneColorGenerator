<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <title>OneColorGenerator</title>

    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>

    <link href="https://fonts.googleapis.com/css?family=Montserrat:thin" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">

</head>

<body>

    <div class="container-fluid">

        <div class="wrapper">

                        <div id="colorDiv" class="row">
                                <div class="col-xs-12 col-md-3">
                    <!-- <div class="logo">
                        <h1>ONE COLOR GENERATOR</h1>
                    </div> -->
                    <!-- Generate photos button -->
                    <div id="photoSearch">
                        
                        <button id="camera" class="glyphicon glyphicon-camera">

                                <div id="top-left" class="wrap">
                                        <img src="references/starburst.jpg" width="150px" />
                                        <img src="references/galaxy.jpeg" width="150px" class="front" />
                                     </div>
                                     <div id="top-center" class="wrap">
                                        <img src="references/starburst.jpg" width="150px"/>
                                        <img src="references/galaxy.jpeg" width="150px" class="front" />
                                     </div>
                                     <div id="bottom-center" class="wrap">
                                        <img src="references/starburst.jpg"width="150px" />
                                        <img src="references/galaxy.jpeg" width="150px" class="front" />
                                     </div>
                                     <div id="left" class="wrap">
                                        <img src="references/starburst.jpg" width="150px"/>
                                        <img src="references/galaxy.jpeg" width="150px" class="front" />
                                     </div>
                                     
                             </button> 
                             </div>  
                                <!-- <div id="images"> -->
                            <!-- <div id="images" class="hidden"> -->
                                <!-- Images will appear here when clicked -->
                                <!-- <div class="container-fluid"> -->
                                    <!-- <div class="ImgSearch"> -->
                    <!-- <div id="photoSearch"> -->
                        <!-- <button id="camera" class="glyphicon glyphicon-camera"> -->
                            <!-- <div id="toggle" class="images"> -->
                                <!-- <div id="" class="hidden"> -->
                                    <!-- IMAGES GO HERE -->
                                <!-- </div> -->
                                
                                
<!--                   </div>                   -->
                                
                
                                    <!-- </div>
                                </div> -->
                            <!-- </div> -->
                        <!-- </button> -->
                    <!-- </div> -->
                </div>

                <div class="col-xs-12 col-md-6">
                    <div id="information">
                        <h1 id="hexInfo"></h1>
                        <h1 id="colorName"></h1>
                    </div>
                </div>
                <div class="col-xs-12 col-md-3">

                    <div>
                        <button id="info">
                            <h1>?</h1>
                            <div id="toggle" class="projectInfo">
                                <p>OneColorGenerator is a springboard for designers and artists in finding the perfect color
                                    to begin their next project. All you have to do is click the "Generate Color" button
                                    to have a new color appear on the screen. The HTML code displayed on the page can be
                                    copied to use in programs such as Adobe Photoshop, your preferred code editor, or even
                                    your favorite color palette generator.</p>
                                    <p>Contributors:
                                        <a href="https://github.com/CraigD89">Craig, </a>
                                        <a href="https://github.com/jennaconway">Jenna </a>
                                        <a href="https://github.com/kpoeltler">+ Katie</a>
                                    </p>
                                    <p>Special thanks:
                                        <a href="https://github.com/LeahNelson">Leah</a>
                                    </p>
                            </div>
                        </button>

                        <div id="generator">
                            <button id="generatorBtn">
                                <h1>GENERATE COLOR</h1>
                            </button>
                        </div>

                    </div>

                </div>

            </div>

            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
                    <div id="information">
                        <h1 id="hexInfo"></h1>
                        <h1 id="colorName"></h1>
                    </div>
                </div>
            </div>

            <!-- <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <button id="generatorBtn">
                        <h1>GENERATE COLOR</h1>
                    </button>
                </div>
            </div> -->




            <!-- Generate photos button -->
            <!-- <div id="photoSearch">
                <button id="camera" class="glyphicon glyphicon-camera">
                </button>
            </div> -->

            <!-- Generate Color button -->
            <!-- <div class="footer">
                <button id="generatorBtn">
                    <h1>GENERATE COLOR</h1>
                </button>
            </div> -->

        </div>
    </div>


    <!--[ footer ] -->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> -->
    <!-- <script type="text/javascript"></script> -->
    <script type="text/javascript" src="api.js"></script>

</body>

</html>
<!-- 



    


Add CommentCollapse 

Craig Dupuis3:09 PM
added this JavaScript/JSON snippet: api.js 
$(document).ready(function () {
    //   console.log("I am working")
    //   //Random hex generator
    //   var hex = function () {
    //     var letters = "0123456789ABCDEF";
    //     var color = "";
    //     for (var i = 0; i < 6; i++) {
    //       color += letters[Math.floor(Math.random() * 16) | 0];
    console.log("I am working")
    //Random hex generator
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

    $("body").css("background-color", "#" + hex());

    $("#generatorBtn").click(function () {
        $("body").css("background-color", "#" + hex());
        console.log("You clicked me!");
    });

    $("#info").click(function () {
        $("#toggle").toggle(".projectInfo");
    });
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





    //Click camera for images
    // $("#camera").click(function () {
    //     $("#").toggle(".");
    // });






    //------------------ after the ajax 'GET' comes back with results dig down and----------------- 
    //----------------find then create a for loop ----------

// $(document).ready(function () {

  $('#top-left').hover(function () {
    $(this).children('.front').stop().animate({
      'top': '150px',
      'bottom': '300px'
    }, 300);
  }, function () {
    $(this).children('.front').stop().animate({
      'top': '0px',
      'bottom': '0px'
    }, 900);
  });

  $('#top-center').hover(function () {
    $(this).children('.front').stop().animate({
      'top': '150px',
      'bottom': '300px'
    }, 800);
  }, function () {
    $(this).children('.front').stop().animate({
      'top': '0px',
      'bottom': '0px'
    }, 800);
  });

  $('#bottom-center').hover(function () {
    $(this).children('.front').stop().animate({
      'top': '150px',
      'bottom': '300px'
    }, 800);
  }, function () {
    $(this).children('.front').stop().animate({
      'top': '0px',
      'bottom': '0px'
    }, 800);
  });

  $('#left').hover(function () {
    $(this).children('.front').stop().animate({
      'top': '150px',
      'bottom': '300px'
    }, 800);
  }, function () {
    $(this).children('.front').stop().animate({
      'top': '0px',
      'bottom': '0px'
    }, 800);
  });


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


Add CommentCollapse 

Craig Dupuis3:09 PM
added this CSS snippet: style.css 
html body {
    margin: 0 auto;
    height: 100%;
    overflow: hidden;
    font-family: 'Montserrat', sans-serif;
    font-weight: thin;
}

/* .row {
    height: 300px;
} */

h1{
    background-color: transparent;
    font-weight: bold;
}

#colorDiv {
    color: black;
    font-family: 'Montserrat', sans-serif;
    font-weight: thin;
}

.logo {
   text-align: center;
   /* width: 25%; */
   position: fixed;
   left: 0;
   top: 0;
   padding: 10px;
}

.learnMore {
    background-color: transparent;
    color: black; 
    font-family: 'Montserrat', sans-serif;
    /* font-weight: thin; */
}

#info {
    float:right;
    /* font-weight: bold; */
    font-size: 20px;
    position: fixed;
    right: 0;
    top: 0;
    width: 10%;
}

.projectInfo {
    display: none;
    float: right;
    width: 300%;
}

button{
    outline: none;
    border: none;
    background-color: transparent;
}

/* .slider {
    position: absolute;
    right: 0;
    background-color: rgb(34, 33, 33);
    transform: translateX(100%);
 } */
 
 /* #info:hover .slider--visible {
    transform: translateX(0%);
    transition: transform 1s linear; 
 }  */

p {
    color: black;
    background-color: transparent;
}
  
  #hexInfo{
    background: none;
    color: black;
    font-size: 100px;
    text-align: center;
    font-weight: bold;
  }

  #colorName{
    background: none;
    color: black;
    font-size: 100px;
    text-align: center;
    font-weight: bold;
  }

#generatorBtn {
    position: fixed;
    right: 0;
    bottom: 0;
    width: 25%;
    background-color: transparent;
    color: black;
    text-align: center;
    font-weight: bold;
}

 #information{
     padding-top: 40%;
     padding-bottom: 60%;
}

#camera{

    background-color: transparent;
    color: black;
    font-size: 50px;
}

/* footer {
    height: 100px;
    background-color: black;
    color: white;
} */

/* .header {
    position: fixed;
    top: 0;
} */

/* #photoSearch{
    padding-top: 10px;
    position: fixed;
    left: 0;
    bottom: 0;
} */

.wrap
{
  float:left;
  position:relative;
  width:150px;
  height:150px;
  /* margin:20px; */
  overflow:hidden;
}

img
{
 top:0px;
 left:0;
 position:absolute;
} 

a:link {
    color: black;
}

a:visited {
    color: black;
}

a:hover {
    color: black;
}

a:active {
    color: black;
}


Add CommentCollapse 
new messages

Craig Dupuis3:19 PM
added this JavaScript/JSON snippet: api.js 
$(document).ready(function () {
    //   console.log("I am working")
    //   //Random hex generator
    //   var hex = function () {
    //     var letters = "0123456789ABCDEF";
    //     var color = "";
    //     for (var i = 0; i < 6; i++) {
    //       color += letters[Math.floor(Math.random() * 16) | 0];
    console.log("I am working")
    //Random hex generator
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

    $("body").css("background-color", "#" + hex());

    $("#generatorBtn").click(function () {
        $("body").css("background-color", "#" + hex());
        console.log("You clicked me!");
    });

    $("#info").click(function () {
        $("#toggle").toggle(".projectInfo");
    });
});

//       $("#craigsnewdiv").text(results.new.drill.param);
//       console.log("results.new.drll.param", body.new.drill.param);
// });


// //on click

//   $("#images").click(function () {
//     $("#togglemaybe").toggle(".projectInfo");
//     // $("#craigcamerabtn").click(function(){
//     //   $("#togglemaybe").toggle(".projectInfo");


//   });






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



$("body").css("background-color", "#" + hex());




    //Click camera for images
    // $("#camera").click(function () {
    //     $("#").toggle(".");
    // });






    //------------------ after the ajax 'GET' comes back with results dig down and----------------- 
    //----------------find then create a for loop ----------

// $(document).ready(function () {

  $('#top-left').hover(function () {
    $(this).children('.front').stop().animate({
      'top': '150px',
      'bottom': '300px'
    }, 300);
  }, function () {
    $(this).children('.front').stop().animate({
      'top': '0px',
      'bottom': '0px'
    }, 900);
  });

  $('#top-center').hover(function () {
    $(this).children('.front').stop().animate({
      'top': '150px',
      'bottom': '300px'
    }, 800);
  }, function () {
    $(this).children('.front').stop().animate({
      'top': '0px',
      'bottom': '0px'
    }, 800);
  });

  $('#bottom-center').hover(function () {
    $(this).children('.front').stop().animate({
      'top': '150px',
      'bottom': '300px'
    }, 800);
  }, function () {
    $(this).children('.front').stop().animate({
      'top': '0px',
      'bottom': '0px'
    }, 800);
  });

  $('#left').hover(function () {
    $(this).children('.front').stop().animate({
      'top': '150px',
      'bottom': '300px'
    }, 800);
  }, function () {
    $(this).children('.front').stop().animate({
      'top': '0px',
      'bottom': '0px'
    }, 800);
  });


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