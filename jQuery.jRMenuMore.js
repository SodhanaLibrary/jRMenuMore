$.fn.jRMenuMore = function() {
  $(this).each(function(){
    $(this).addClass("horizontal-responsive-menu");    
    alignMenu(this);
    var robj=this;
     $(window).resize(function() {
	     $(robj).append($($($(robj).children("li.hideshow")).children("ul")).html());
			$(robj).children("li.hideshow").remove();
			alignMenu(robj);
		});
        function alignMenu(obj) {
			var w = 0;
			var mw = $(obj).width() - 150;
			var i = -1;
			var menuhtml = '';
			jQuery.each($(obj).children(), function() {
				i++;
				w += $(this).outerWidth(true);
				if (mw < w) {
					menuhtml += $('<div>').append($(this).clone()).html();
					$(this).remove();
				}
			});
			$(obj).append(
					'<li  style="position:relative;" href="#" class="hideshow">'+
					    '<a href="#">more '+ 
					    '&#8595;'+
					    '</a><ul>'+
			         menuhtml + '</ul></li>');
			$(obj).children("li.hideshow ul").css("top",
					$(obj).children("li.hideshow").outerHeight(true) + "px");
			$(obj).children("li.hideshow").click(function() {
				$(this).children("ul").toggle();
			});
		}
    
                       });
    
}
