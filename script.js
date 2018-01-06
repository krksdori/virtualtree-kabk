window.onload = function(){


		var values = [ {color:"#99579e", text:"color"},
					   {color:"#ed348a", text:"color"},
					   {color: "#b4878a", text:"color"},
					   {color: "#948ac2", text: "color"},
					   {color: "#7a469b", text: "color"},
					   {color: "#f68e6f", text:"color"}
					 ]; 

		values.forEach(function (elem){
			var buttonDiv = $("<div>"+elem.text+"</div>");
			$("#button-container").append(buttonDiv);
            buttonDiv.css({
					'background-color': elem.color,
					'width': '7vw', 
					'height': '5vw',
					'margin': '0.2vw',
					'text-align':'center',
					'vertical-align': 'middle',
					'line-height' : '5vw',
					'border' : '3px solid black'
					// 'position': 'fixed',
					// 'z-index' :'2'
					   });

            $(buttonDiv).click(function() {
        //     	var textDiv = $("<div></div>");
 			    // textDiv.text(elem.text);
 			    $('body').css({
 			    	'background-color': elem.color

 			    })


			});
		});
};
