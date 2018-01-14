window.onload = function(){


		var values = [ {color:"rgb(106, 204, 174)", text:"", img: "card-mint.jpg"},
					   {color:"rgb(238, 135, 199)", text:"", img: "card-pink.jpg"},
					   {color: "rgb(255, 173, 20)", text:"", img: "card-orange.jpg"},
					   {color: "rgb(137, 101, 15)", text:"", img: "card-brown.jpg"},
					   {color: "rgb(35, 79, 48)"  , text:"", img: "card-green.jpg"}
					 ]; 

		values.forEach(function (elem){
			var buttonDiv = $("<div>"+elem.text+"</div>");
			$("#button-container").append(buttonDiv);
            buttonDiv.css({
					'background-color': elem.color,
					'width': '3vw', 
					'height': '2vh',
					'margin': '0.2vw',
					'text-align':'center',
					'vertical-align': 'middle',
					'line-height' : '3vh',
					'cursor': 'pointer',
					'display' : 'inline-block',
					'border' : '3px solid black'
					// 'position': 'fixed',
					// 'z-index' :'2'
			});

            $(buttonDiv).click(function() {
 			    $('#form-wrap').css({
 			    	'background-color': elem.color

 			    })
			});


			$("#create-card").click(function() {
				if ($("#form-wrap").css('background-color')==elem.color){
					$('#img-container').append('<img class="added-form"  draggable="true" src='+elem.img+' />')
					$('.added-form').draggable();
				};

			});




		});
};
