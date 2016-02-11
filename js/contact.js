$(document).ready(function () {

    $('.error').hide(); //Hide error messages
    $('#main-result').hide(); //we will hide this right now
    $('#form-wrapper').show(); //show main form
    $('.contact-btn').click(function () { //User clicks on Submit button

        // Fetch data from input fields.
        var js_name = $("#name").val();
        var js_email = $("#email").val();
        var js_phone = $("#phone").val();
        var js_message = $("#message").val();

        // Do a simple validation
        if (js_name == "") {
            $("#nameIN .error").show(); // If Field is empty, we'll just show error text inside <span> tag.
            return false;
        }
        if (js_email == "") {
            $("#emaiIN .error").show();
            return false;
        }
        if (js_phone == "") {
            $("#phoneIN .error").show();
            return false;
        }
        if (js_message == "") {
            $("#messageIN .error").show();
            return false;
        }

        //let's put all data together

        $.ajax({
            type: "POST",
            url: "http://getsimpleform.com/messages/ajax?form_api_token=034751068f0c0812a7e1ea636f37b8a7",
            dataType: 'jsonp',
            data: {
                name: js_name,
                email: js_email,
                phone: js_phone,
                message: js_message
            },
            success:function(response){
                $("#main-result").html('<fieldset class="response">'+ "Your inquiry has been sent." +'</fieldset>');
                $("#main-result").slideDown("slow"); //show Result
                $("#main-content").hide(); //hide form div slowly
            },
            error:function (xhr, ajaxOptions, thrownError){
                $("#err-result").html(thrownError);
            }

        });
    });
});
