$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('.tabs').tabs();
    $('.datepicker').datepicker({
        disableWeekends: false,
        yearRange: 1,
        minDate:new Date()
    });

    $('.tooltipped').tooltip();

    $('.scrollspy').scrollSpy();

    $('.dropdown-trigger').dropdown();
});

// Loads the Text on The landing page
    var i = 0;
    var txt = 'We Create Moments, Experiences, Magic in our Event Spaces...';
    var speed = 100;
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("landing_text").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    window.onload = typeWriter()

// Location Map
    function initialize() {
    var latLng = new google.maps.LatLng(-1.265887,36.8055833);
    var mapOptions = {
    zoom: 14,
    minZoom: 6,
    maxZoom: 17,
    zoomControl:true,
    zoomControlOptions: {
    style:google.maps.ZoomControlStyle.DEFAULT
},
    center: latLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    panControl:false,
    mapTypeControl:false,
    scaleControl:false,
    overviewMapControl:false,
    rotateControl:false
}
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var image = new google.maps.MarkerImage("img/pin.png", null, null, null, new google.maps.Size(40,52));
    var content = `
            <div class="gd-bubble" style="">
                <div class="gd-bubble-inside">
                    <div class="geodir-bubble_desc">
                    <div class="geodir-bubble_image">
                        <div class="geodir-post-slider">
                            <div class="geodir-image-container geodir-image-sizes-medium_large ">
                                <div id="geodir_images_5de53f2a45254_189" class="geodir-image-wrapper" data-controlnav="1">
                                    <ul class="geodir-post-image geodir-images clearfix">
                                        <li>
                                            <div class="geodir-post-title">
                                                <h6 class="geodir-entry-title">
                                                    <a href="" title="View">Come Dine With Us</a>
                                                </h6>
                                            </div>
                                            <a href=""><img src="img/dining-03.jpg" alt="" class="align size-medium_large" width="100%" height="200px"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="geodir-bubble-meta-side">
                    <div class="geodir-output-location">
                    <div class="geodir-output-location geodir-output-location-mapbubble">
                        
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>`;
    var marker = new google.maps.Marker({
    position: latLng,
    icon:image,
    map: map,
    title: 'Westlands Banquet Center'
});
    var infowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, 'click', (function (marker) {
    return function () {
    infowindow.setContent(content)
    infowindow.open(map, marker);
}
})(marker));
}
    google.maps.event.addDomListener(window, 'load', initialize);


//Scroll to top button
    var mybutton = document.getElementById("scrollToTop");
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    function topFunction() {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        document.body.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

//submit contactus form
function sendContact() {
    let valid;
    valid = validateContactFormSubmission();
    if(valid) {
        jQuery.ajax({
            url: "contact-us-form.php",
            data:'name='+$("#name").val()+'&email='+
                $("#email").val()+'&meeting_date='+
                $("#meeting_date").val()+'&message='+
                $("#message").val(),
            type: "POST",
            success:function(data){
                $("#mail-status").html(data);
                alert('Contact Form Submission Has Been Sent')
                $('#name').val('');
                $('#email').val('');
                $('#meeting_date').val('');
                $('#message').val('');
            },
            error:function (){}
        });
    }
}
function validateContactFormSubmission() {
    let valid = true;
    $(".demoInputBox").css('background-color','');
    $(".info").html('');
    if(!$("#name").val()) {
        $("#name-info").html("(required)");
        $("#name").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#email").val()) {
        $("#email-info").html("(required)");
        $("#email").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#email-info").html("(invalid)");
        $("#email").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#message").val()) {
        $("#message-info").html("(required)");
        $("#message").css('background-color','#FFFFDF');
        valid = false;
    }
    return valid;
}

//submit contactus form
function sendBookingRequest() {
    let valid;
    valid = validateContactBookingRequestFormSubmission();
    if(valid) {
        jQuery.ajax({
            url: "booking-request.php",
            data:'full_name='+$("#full_name").val()+'&user_email='+
                $("#user_email").val()+'&proposed_date='+
                $("#proposed_date").val()+'&selected_space='+
                $("#selected_space").val(),
            type: "POST",
            success:function(data){
                $("#mail-status").html(data);
                alert('Booking Request Has been sent')
                $('#full_name').val('');
                $('#user_email').val('');
                $('#proposed_date').val('');
                $('#selected_space').val('');
            },
            error:function (){}
        });
    }
}
function validateContactBookingRequestFormSubmission() {
    let valid = true;
    $(".demoInputBox").css('background-color','');
    $(".info").html('');
    if(!$("#full_name").val()) {
        $("#full_name-info").html("(required)");
        $("#full_name").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#user_email").val()) {
        $("#user_email-info").html("(required)");
        $("#user_email").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#user_email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#user_email-info").html("(invalid)");
        $("#user_email").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#proposed_date").val()) {
        $("#proposed_date-info").html("(required)");
        $("#proposed_date").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#selected_space").val()) {
        $("#selected_space-info").html("(required)");
        $("#selected_space").css('background-color','#FFFFDF');
        valid = false;
    }
    console.log(valid)
    return valid;
}
