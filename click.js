function cesta(){
	console.log("im inside yo");
	$.ajax({
		url:'/test',
		type:'GET',
		data: 'glue',
		success: function (data){
			console.log(data);
		},
		error: function (error){
			console.log("errrorrr");
		}
	});
}