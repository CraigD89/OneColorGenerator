

var hex = "";    
var queryURLBase =  "http://thecolorapi.com/id?hex=' '+ hex'"

var colorgenerated = 0;		

    $.ajax({
      url: queryURLBase,
      method: "GET"
    }).then(function(response) {

    });


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

    
    
    