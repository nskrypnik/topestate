
$(document).ready(function() {
	$(".inquery").fancybox({
		maxWidth	: 280,
		maxHeight	: 631,
		minHeight	: 631,
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
	
	$(".open_request_form").fancybox({
		maxWidth	: 580,
		maxHeight	: 710,
		minHeight	: 710,
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
	
	$(".gallery").fancybox({
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

// Submit link should submit the nearest form
$('.submit_link').click(function(){
	$(this).closest('form').submit();
});

$('.content.listing .ordering a').click(function(){
	$(this).toggleClass('desc');
});


// photo slider

var property_photo = $('.photo')

if (property_photo.length){
	var curr_photo = 0;
	var photo_gallery = {count: 0, photos: Array()};
	photo_gallery.count = $('a[rel="gallery"]').length;
	for (i=0; i < photo_gallery.count; i++){
		photo = $('a[rel="gallery"] img')[i];
		photo_gallery.photos[i] = $(photo).attr('src')
	}

	$('.photo .photo_controls a').click(function(){
			if ($(this).parent().hasClass('larr')){
				if (curr_photo == 0){
					curr_photo = photo_gallery.count - 1;
				}
				else curr_photo--;
			}
			if ($(this).parent().hasClass('rarr')){
			
				if (curr_photo == (photo_gallery.count - 1)){
					curr_photo = 0;
				}
				else curr_photo++;
			}
			$($('.photo .image_container img')[0]).attr('src', photo_gallery.photos[curr_photo]);
			t = curr_photo + 1;
			$('.photo .photo_controls span.photo_page').text(t + '/' + photo_gallery.count);
			return false;
		}
	);
}

$('input[name="river_side"], input[name="river_side2"]').click(function(){
	val = $(this).attr('value');
	area = $(this).closest('div').siblings('.area');
	area.find('ul').addClass('hidden');
	area.find('ul.' + val + 'bank').removeClass('hidden');
});

// fix for ie8
$('input[name="river_side"] + label, input[name="river_side2"] + label').click(function(){

	input_id = $(this).attr('for');
    val = $('#' + input_id).attr('value');
	area = $(this).closest('div').siblings('.area');
	area.find('ul').addClass('hidden');
	area.find('ul.' + val + 'bank').removeClass('hidden');
});
