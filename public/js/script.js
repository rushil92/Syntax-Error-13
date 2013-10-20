$(document).ready(function(){
	
	$('#sub').click(function(){
		event.preventDefault();
		var source = $('#source').val();
		var keystring = $('#keystring').val();		
		var data = {
			source:source,
			keystring:keystring
		}
		$.ajax({
			type:'post',
			url:"",
			data:data,
			complete:function(msg){
				console.log(msg.responseText);
			}
		})
		$('form').append('<br/><br/><img src="public/images/ajax-loader.gif"/>');
		$('#results').append('<div class="result row"><div class="span4"></div></div>');
		$('#results').empty()
		var imgSrc = $("#source").val();
		$('#results').append('<div class="result row"><img style="height:120px" src="public/images/'+imgSrc+'.jpg"></div>');
	});

});