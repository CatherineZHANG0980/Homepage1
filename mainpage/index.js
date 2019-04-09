
$(document).ready(function() {
(function(){
  	var showChar = 300;
    var ellipsestext = "...";

	$('.truncate').each(function() {
        var content = $(this).html();
        if(content.length > showChar) {

            var c = content.substr(0, showChar);
 			var h = content;
            var html = '<div class="truncate-text" style="display:block">' + c + '<span class="moreellipses">' + ellipsestext + '&nbsp;&nbsp;<a href="" class="moreless more">See more</a></span></span></div><div class="truncate-text" style="display:none">' + h + '<a href="" class="moreless less">See less</a></span></div>';

            $(this).html(html);
        }

    });

    $(".moreless").click(function(){
		var thisEl = $(this);
        if(thisEl.hasClass("less")) {
        	thisEl.closest('.truncate-text').prev('.truncate-text').toggle();
    		thisEl.closest('.truncate-text').slideToggle();
        } else {
			thisEl.closest('.truncate-text').toggle();
			thisEl.closest('.truncate-text').next('.truncate-text').fadeToggle();
        }
	   	return false;
    });

	}());


});


$('.sidemenu ul li a').click(function() {
    $('ul li.selected').removeClass('selected');
    $(this).closest('li').addClass('selected');
});


function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(".header .notification-button").click(function(){
    $(".mobile-overlay").show();
});

$(".closebtn").click(function(){
    $(".mobile-overlay").hide();
});
