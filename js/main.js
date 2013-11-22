

// Pseudoclasses fix for ie8

$('a').mousedown(function(){
	$(this).addClass('active');
});

$('a').mouseup(function(){
	$(this).removeClass('active');
});

$('label').click(function(){
	input_id = $(this).attr('for');
	input = $('#' + input_id);
	if (input.attr('type') == 'radio'){
		radio_group = input.attr('name');
		$('input[name=' + radio_group + ']').attr('checked', false);
		input.attr('checked', true);

	}
	if (input.attr('type') == 'checkbox'){
		$(this).toggleClass('checked');
	}
});