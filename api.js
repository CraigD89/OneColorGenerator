
    
    
var colorURL = "http://www.thecolorapi.com/id?hex=43D9E9"
		
    $.ajax({
      url: colorURL,
      method: "GET"
    }).then(function(response) {
      console.log (response);
    });
