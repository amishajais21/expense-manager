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
		var price = $("input[type='text']").val();
		
		var date = $ ("input[type='Date']").val(); 
        $("input[type='text']").val("");
          $("input[type='Date']").val(""); //to give us an empty string
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + "Rs." + price + "  -----    on  -----     " + date + "</li>")
	}
});
$(".fa-plus").click(function(){
	$(".head").fadeToggle();
}); 
