window.onload = function(){


		var values = [ {color:"rgb(106, 204, 174)", text:"MINISTRY OF SOCIAL AFFAIRS AND EMPLOYMENT", img: "card-mint.jpg"},
					   {color:"rgb(238, 135, 199)", text:"MINISTRY OF FINANCE", img: "card-pink.jpg"},
					   {color: "rgb(255, 173, 20)", text:"MINISTRY OF JUSTICE AND SECURITY", img: "card-orange.jpg"},
					   {color: "rgb(137, 101, 15)", text:"MINISTRY OF EDUCATION, CULTURE AND SCIENCE", img: "card-brown.jpg"},
					   {color: "rgb(35, 79, 48)"  , text:"MINISTRY OF HEALTH, WELFARE AND SPORT", img: "card-green.jpg"}
					 ]; 

		values.forEach(function (elem){
			var buttonDiv = $("<div></div>");
			$("#button-container").append(buttonDiv);
            buttonDiv.css({
					'background-color': elem.color,
					'width': '3vw', 
					'height': '2vh',
					'margin': '0.2vw',
					'cursor': 'pointer',
					'display' : 'inline-block',
					// 'top': '50%',
					// 'left': '50%',
					// 'position':'absolute'
					// 'border' : '3px solid black'
					// 'position': 'fixed',
					// 'z-index' :'2'
			});

            $(buttonDiv).click(function() {
 			    $('#form-wrap').css({
 			    	'background-color': elem.color
 			    })
 			    $("#ministry").text(elem.text);
			});


			$("#create-card").click(function() {
				if ($("#form-wrap").css('background-color')==elem.color){
					$('#img-container').append('<img class="added-form"  draggable="true" src='+elem.img+' />')
					$('.added-form').draggable();
				};

			});




		});
};
