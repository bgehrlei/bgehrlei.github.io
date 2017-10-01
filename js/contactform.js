jQuery(document).ready(function() {

	$('#errorMessage').hide();

	$('#contactform').submit(function() {

		var action = $(this).attr('action');
		var values = $(this).serialize();

		$('#submit').attr('disabled', 'disabled');

		$("#message").slideUp(0, function() {

			$('#message').hide();
			$('#errorMessage').hide();

			$.post(action, values, function( data ) {
				if(data == "Thank You! I will be in touch.") {
					$('.errorMessages').html('');
					$('#message').html('<p>' + data + '</p>');
					$('#message').slideDown('slow');
					$('#contactform')[0].reset();
				}
				else {
					$('#message').html('');
					$('.errorMessages').html('<li>' + data + '</li>');
					$('#errorMessage').slideDown('slow');
				}

				$('#submit').removeAttr('disabled');
			});
		});

		return false;

	});

});
