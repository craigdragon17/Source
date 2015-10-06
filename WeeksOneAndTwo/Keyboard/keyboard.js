$(document).ready(function(){
	
	$('#keyboard-upper-container').hide();
	
	$(document).keydown(function(e){
		if (e.which === 16) {
			
			$('#keyboard-upper-container').show();
			$('#keyboard-lower-container').hide();
		}
	});
		
	$(document).keyup(function(e){
		if (e.which === 16) {
			
			$('#keyboard-upper-container').hide();
			$('#keyboard-lower-container').show();
			
		} else {
			
			$('.key').removeClass('highlight');
		}
	}).keypress(function(e) {
		var pressKey =(e.charCode);
		var letter = (String.fromCharCode(pressKey));
		$('#'+pressKey).addClass('highlight');
		$('#'+letter).addClass('highlight');
		console.log(pressKey);
		console.log(letter);
	})
});