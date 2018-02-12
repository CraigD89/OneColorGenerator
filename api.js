$(document).ready(function () {

  //Random hex generator
  var hex = function () {
    var letters = "0123456789ABCDEF";
    var color = "";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16) | 0];
    };

    var queryURLBase = "https://www.thecolorapi.com/id?format=json&hex=" + color;

    var flickrPic = [];

    //TheColorAPI AJAX call
    $.ajax({
      url: queryURLBase,
      method: "GET",
      success: function (response) {

        $("#hexInfo").text(response.hex.value);
        $("#colorName").text(response.name.value);
        var colorName = response.name.value;

        //Flickr AJAX call
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
            safe_search: 1,
            extras: "url_q"
          },

          success: function (results) {
            if (results != "undefined") {
              // Try a for in loop here
              for (var i = 0; i < 4; i++) {
                flickrPic.push(results.photos.photo[i].url_q);
              }
            } else {
              $("#errorMessage").toggle(".errorInfo");
            };
          },
          error: function (error) {
            $("#errorMessage").toggle(".errorInfo");
          }
        }).then(function (results) {
        });
      },
      error: function (error) {
      }
    }).then(function (response) {
      $("#camera").on("click", function () {
        for (var i = 0; i < flickrPic.length; i++) {
          $("#flickr-pic" + i).attr("src", flickrPic[i]);
        }
      })
    });
    return color;
    return colorName;
  };

  // Auto generates color to page when opened
  $("body").css("background-color", "#" + hex());


  // Click Generate Color for a new color on screen
  $("#generatorBtn").click(function () {
    $("body").css("background-color", "#" + hex());
    $("#cameraImages").hide(".photoInfo", function(){});
  });

  // Click for website information and tutorial
  $("#info").click(function () {
    $("#toggle").toggle(".projectInfo");
  });


  //Click camera for images
  $("#camera").click(function () {
    $("#cameraImages").toggle(".photoInfo");
  });

  //End of Document Ready
});

//Image sliding animation
$('#top').hover(function () {
  $(this).children('.front').stop().animate({
    'top': '400px',
    'bottom': '300px'
  }, 1000);
}, function () {
  $(this).children('.front').stop().animate({
    'top': '0px',
    'bottom': '0px'
  }, 1000);
});

$('#center').hover(function () {
  $(this).children('.front').stop().animate({
    'top': '-400px',
    'bottom': '-300px'
  }, 1000);
}, function () {
  $(this).children('.front').stop().animate({
    'top': '0px',
    'bottom': '0px'
  }, 1000);
});