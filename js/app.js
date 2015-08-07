$(document).ready(function(){
	$('.logo').hide(0).fadeIn(3000).fadeOut(1000);
	$('.jquery-text').hide(0).delay(4000).fadeIn(3000).fadeOut(1000);
	$('.jquery-logo').hide(0).delay(8000).fadeIn(3000).fadeOut(1000);
	$('#instruct').hide(0).delay(12000).fadeIn(3000);
	$('#theme-tune')[0].play();
	$('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    .mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '520px');
            });
    })
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });

});
$(document).on('keydown', function(){
	 		if (event.which == 88) {
	 			$('.ryu-still').hide();
	 			$('.ryu-ready').hide();
	 			$('.ryu-throwing').hide();
	 			$('#dig-tune')[0].play();
	 			$('.ryu-cool').show();
	 			$('#theme-tune')[0].pause();
	 		}
	 	});

	 

	  $(document).on('keyup', function(){
	 		if (event.which == 88) {
	 			$('.ryu-ready').hide();
	 			$('.ryu-throwing').hide();
	 			$('.ryu-cool').hide();
	 			$('.ryu-still').show();
	 			$('#dig-tune')[0].pause();
	 		}
	 	});



function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }
function playDig() {
		$('#dig-tune')[0].volume - 0.5;
		$('#dig-tune')[0].load();
		$('#dig-tune')[0].play();
}