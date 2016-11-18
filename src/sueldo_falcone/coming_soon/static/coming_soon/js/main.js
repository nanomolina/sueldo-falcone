$(document).ready(function(){

	//Code to center the content div
	$box = $('.content');
	$ht = $box.height()+175;
	$win_ht = $(window).height();

	if ($win_ht>$ht) {
		$box.css({
			'left' : '50%',
			'top' : '50%',
			'margin-left' : -$box.width()/2 + 'px',
			'margin-top' : -$ht/2 + 'px'
		});
	}else{
		$box.css({
			'left' : '50%',
			'margin-left' : -$box.width()/2 + 'px',
			'margin-top' : '60px',
			'margin-bottom' : '60px'
		});
	}

 	//code for the cerlces Countdouwn
	$(".counter").TimeCircles({
	    "direction": "Clockwise",
	    "animation": "Tricks",
	    "bg_width": 0,
	    "fg_width": 0.01,
	    "circle_bg_color": "rgba(255, 255, 255, 0)",
	    "circle_bg_fill_color": "rgba(255, 255, 255, 0.1)",
	    "time": {
	        "Days": {
	            "text": "Días",
	            "color": "#ffffff",
	            "show": true
	        },
	        "Hours": {
	            "text": "Hrs",
	            "color": "#ffffff",
	            "show": true
	        },
	        "Minutes": {
	            "text": "Min",
	            "color": "#ffffff",
	            "show": true
	        },
	        "Seconds": {
	            "text": "Seg",
	            "color": "#ffffff",
	            "show": true
	        }
	    }
	});
});
