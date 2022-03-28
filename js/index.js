// JavaScript Document
$(document).ready(function(){
	
					$("#totop").Totop(
								options = {
										scrolltime:500,
										image:"img/up.png"
								}
						);
						
							
        $("input").change(function(){
			$("input").css('color','green');
			});
		
		$( function() {
    $( "#datepicker" ).datepicker();
  } );
  	$( function() {
    $( "#datepicker1" ).datepicker();
  } );
  	
	

			
			});
			
		
			
			
			
			function subscribe(){
				alert("Successfully Subscribe")
				};
				
				
			function readmore(){
				document.getElementById("readm").innerHTML="PLEASANT TOURS is a well-established organization serving for English & French speaking tourists with a renowned name in Vietnam’s tourism sector.";
				};	
				
				function readmore1(){
				document.getElementById("readm1").innerHTML="PLEASANT TOURS is a well-established organization serving for English & French speaking tourists with a renowned name in Vietnam’s tourism sector.";
				};
				
				function readmore2(){
				document.getElementById("readm2").innerHTML="PLEASANT TOURS is a well-established organization serving for English & French speaking tourists with a renowned name in Vietnam’s tourism sector.";
				};
				
				function readmore3(){
				document.getElementById("readm3").innerHTML="PLEASANT TOURS is a well-established organization serving for English & French speaking tourists with a renowned name in Vietnam’s tourism sector.";
				};
				
				
				function search1(){
					alert("Please Wait for Searching");
					};
				
		
		
		<!--  // building select nav for mobile width only -->
$(function(){
	// building select menu
	$('<select />').appendTo('nav');

	// building an option for select menu
	$('<option />', {
		'selected': 'selected',
		'value' : '',
		'text': 'Select Page...'
	}).appendTo('nav select');

	$('nav ul li a').each(function(){
		var target = $(this);

		$('<option />', {
			'value' : target.attr('href'),
			'text': target.text()
		}).appendTo('nav select');

	});

	// on clicking on link
	$('nav select').on('change',function(){
		window.location = $(this).find('option:selected').val();
	});
});

// show and hide sub menu
$(function(){
	$('nav ul li').hover(
		function () {
			//show its submenu
			$('ul', this).slideDown(150);
		}, 
		function () {
			//hide its submenu
			$('ul', this).slideUp(150);			
		}
	);
});
//end

	function cont(){
		document.getElementById('cont').innerHTML="Pleasant Tours is a well-established organization serving for English & French speaking tourists with a renowned name in Vietnam’s tourism sector. It is professionally managed by an over years of experienced team and supported by well-educated, enthusiastic staffs, under the motto: “Create a new epoch in tourism. Every year, we welcome a large number of tourists coming from many countries in the world such as: France, Germany, Canada, England, China, Thailand, and many other countries. If you are looking for the best and trustworthy service providers in Southern Vietnam, Pleasant Tours should be your definite choice. Every year, we welcome a large number of tourists coming from many countries in the world such as: France, Germany, Canada, England, China, Thailand, and many other countries. If you are looking for the best and trustworthy service providers in Southern Vietnam, Pleasant Tours should be your definite choice. We make a commitment to offer high-quality assistance at reasonable prices for tour packages. Please do not hesitate to get in touch with us for more information and useful advices about tour packages or anything about traveling to Southern Vietnam. Meanwhile, we would like to express special thank to beloved customers who are reading this. We look forward to receiving your response; and we wish to meet you here in Vietnam! With our best wishes for the success and prosperity.";


		};
		
		
		