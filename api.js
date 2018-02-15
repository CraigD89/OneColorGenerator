$(document).ready(function () {

  /**
   * Generates a random hexidecimal value
   * @generator
   * @function hex
   * @return {string} color - hexidecimal value
   */
  var hex = function () {
    var letters = "0123456789ABCDEF";
    var color = "";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16) | 0];
    };

    var queryURLBase = "https://www.thecolorapi.com/id?format=json&hex=" + color;

    var flickrPic = [];

    /**
    * Fetches data from TheColorAPI and stores in color variable
    * @function success
    * @param {object} response - JSON data recieved from TheColorAPI
    * @param {string} response.hex.value - color hex value matched from generator
    * @param {string} response.name.value - color name matched from generator
    * @function error
    * @param {string} error
    * @return {string} colorName - the name of the generated color
    */
    $.ajax({
      url: queryURLBase,
      method: "GET",
      success: function (response) {
        $("#hexInfo").text(response.hex.value);
        $("#colorName").text(response.name.value);
        var colorName = response.name.value;

        /**
        * Fetches image data from Flickr's API
        * @function success
        * @param {object} results - JSON data recieved from Flickr API
        * @param {string} results.photos.photo[i].url_q - image URL from Flickr
        * @function error
        * @param {string} error
        * @return {array} flickrPic - array of first four Flickr images
        */
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

  /**
   * Auto generates color to page when opened
   */
  $("body").css("background-color", "#" + hex());

  /**
   * Click Generate Color for a new color on screen
   */
  $("#generatorBtn").click(function () {
    $("body").css("background-color", "#" + hex());
    $("#cameraImages").hide(".photoInfo", function () { });
  });

  /**
   * Click for website information and tutorial
   */
  $("#info").click(function () {
    $("#toggle").toggle(".projectInfo");
  });

  /**
   * Click camera button for images
   */
  $("#camera").click(function () {
    $("#cameraImages").toggle(".photoInfo");
  });

});

/**
 * Image sliding animation
 */
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