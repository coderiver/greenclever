head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

    $(".fancybox").fancybox();

    var fullpage_el = $('#fullpage');
    if (fullpage_el.length) {
    	$('#fullpage').fullpage();
    };
});