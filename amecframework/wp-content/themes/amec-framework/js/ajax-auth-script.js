jQuery(document).ready(function ($) {
    // Display form from link inside a popup
	$('#pop_login, #pop_signup').live('click', function (e) {


        if ($(this).attr('id') == 'pop_login'){
            $('#login_row').css('display', 'flex');
            $('#register_row').css('display', 'none');
        } else if ($(this).attr('id') == 'pop_signup') {
            $('#login_row').css('display', 'none');
            $('#register_row').css('display', 'flex');
        }
/*
        formToFadeOut = $('form#register');
        formtoFadeIn = $('form#login');
        if ($(this).attr('id') === 'pop_signup') {
            formToFadeOut = $('form#login');
            formtoFadeIn = $('form#register');
        }
        formToFadeOut.fadeOut(500, function () {
            formtoFadeIn.fadeIn();
        });*/
        return false;
    });
	// Close popup
    $(document).on('click', '.login_overlay, .close', function (e) {
        $('#login_row').css('display', 'none');
        return false;
        e.preventDefault();
    });

    // Show the login/signup popup on click
    $('#show_login, #show_signup').on('click', function (e) {
        //$('body').prepend('<div class="login_overlay"></div>');
        if ($(this).attr('id') == 'show_login'){
            $('#login_row').css('display', 'flex');
            $('#register_row').css('display', 'none');
        } else if ($(this).attr('id') == 'show_signup') {
            $('#login_row').css('display', 'none');
            $('#register_row').css('display', 'flex');
        }

/*
			$('form#login').fadeIn(500);
        else 
			$('form#register').fadeIn(500); */
        e.preventDefault();
    });

    $('#logout').on('click', function(e){
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: ajax_auth_object.ajaxurl,
            data: {
                'action': 'ajax_logout', //calls wp_ajax_nopriv_ajaxlogout
                'security': ajax_auth_object.logout_nonce
            },
            success: function(r){
                // When the response comes back
                //$( document.body ).trigger( 'post-load' );
                window.location = ajax_auth_object.redirecturl;
            }
        });
    });

	// Perform AJAX login/register on form submit
	$('form#login, form#register').on('submit', function (e) {
        if (!$(this).valid()) return false;
        $('p.status', this).show().text(ajax_auth_object.loadingmessage);
		action = 'ajaxlogin';
		username = 	$('form#login #username').val();
		password = $('form#login #password').val();
		email = '';
		security = $('form#login #security').val();
		if ($(this).attr('id') == 'register') {
			action = 'ajaxregister';
			username = $('#signonname').val();
			password = $('#signonpassword').val();
        	email = $('#email').val();
        	security = $('#signonsecurity').val();	
		}  
		ctrl = $(this);
		$.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_auth_object.ajaxurl,
            data: {
                'action': action,
                'username': username,
                'password': password,
				'email': email,
                'security': security
            },
            success: function (data) {
				$('p.status', ctrl).text(data.message);
				if (data.loggedin == true) {
                    document.location.href = ajax_auth_object.redirecturl;
                }
            }
        });
        e.preventDefault();
    });
	
	// Client side form validation
    if (jQuery("#register").length) 
		jQuery("#register").validate(
		{ 
			rules:{
			password2:{ equalTo:'#signonpassword' 
			}	
		}}
		);
    else if (jQuery("#login").length) 
		jQuery("#login").validate();
});