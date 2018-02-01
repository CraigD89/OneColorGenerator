
		var colorURL = "http://thecolorapi.com/id?hex=0047AB&format=html"


		
    $.ajax({
      url: colorURL,
      method: "GET"
    }).then(function(response) {
      var hex = $("<div>").text(response.hex.value)
      
    });
    