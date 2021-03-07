 $(document).ready(function() { 
	$(".tagcloud--item").click(function(e) {	  
	  chosenTag = this.innerHTML; 
	  
	  $(".results").children().each(function( index ) {
		debugger;
		if (this.classList.contains(chosenTag)) {
			$(this).show();
		} else {
			$(this).hide();
		}
	  });
	});
 });

