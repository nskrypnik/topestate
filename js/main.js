
$(document).ready(function() {
	$(".inquery").fancybox({
		maxWidth	: 280,
		maxHeight	: 631,
		fitToView	: true,
		scrolling   : false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		autoResize   : false,
		closeClick	: false,
		closeBtn: false,
		padding: 0,
		helpers : {
			overlay : {
				locked : false
			}
		}
	});
});

//This is an IE fix because pointer-events does not work in IE

$(document).on('click', '.item_label, .loupe', function (e) {
	$(this).hide();
	var BottomElement = document.elementFromPoint(e.clientX, e.clientY);
	$(this).show();
	$(BottomElement).click(); //Manually fire the event for desired underlying element
	return false;
});

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
