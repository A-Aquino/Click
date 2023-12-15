var _click = new Audio('audio/click.ogg');
browser.webNavigation.onBeforeNavigate.addListener(
	function(){
		_click.play();
	}
)