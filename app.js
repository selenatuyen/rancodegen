$(window).keypress(function(e){
	if(e.which === 32){
		$("#quote").addClass("reset");
		$("#quote").removeClass("executed");
		$("#author").toggleClass("fade");
		setTimeout(function(){
			$.ajax({
				crossOrigin: true,
				url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback",
            	dataType:"jsonp"
			});
		}, 1000);
	}
});

function mycallback(json){
	var quote = json[0];
	$("#quote").html(quote.content)
	$("#author").html(quote.title)
	$("#quote").addClass("executed");
		$("#quote").removeClass("reset");
		$("#author").toggleClass("fade");
}