$("ul").on("click", "li" , function(){                 
	$(this).toggleClass("completed");
});



$("ul").on("click" , "span" ,function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();	
	});
	event.stopPropagation();
});

$(".head").keypress(function(event){
	if (event.which === 13){
		var todoText = $("input[type='text']").val();
		var date = $ ("input[type='Date']").val(); 
		$(this).val(""); //to give us an empty string
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + "Rs." + todoText + "  -----    on  -----     " + date + "</li>")
	}
});
$(".fa-plus").click(function(){
	$(".head").fadeToggle();
}); 
var datein = document.querySelector('.date');
