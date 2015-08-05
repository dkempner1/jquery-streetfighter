$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-cool').hide();
    })
    
    .mouseover(function(){
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
    })

});
$(document).keydown(function(event){
	if (event.which === 88){
		$('.ryu-still').hide();
		$('.ryu-cool').show();
		$('#dig-tune')[0].play();
	}
})
$(document).keyup(function(event){
	if (event.which === 88) {
		$('.ryu-still').show();
		$('.ryu-cool').hide();
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