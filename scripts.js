$(document).ready(function() {
	$('#more-button').click(function(){
		$('#drop-down-menu').toggle();
	});

	$('#log-in-button').click(function(){
		$('#login-modal').modal('show');
	});

	$('#search-cell').click(function(){
		$('#search-container').toggle();
		$('#header-category-bar-container').toggle();
	})
	$('#close-input-button').click(function(){
		$('#search-container').toggle();
		$('#header-category-bar-container').toggle();
	})
});