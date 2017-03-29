$(function(){

$.ajax({
	url: 'json/liveCasino.json',
	dataType: "json",
	async: false,//非同步
	success: function(liveCasino, textStatus, jqXHR) {
		for(var i=0;i<liveCasino.length;i++){//產生真人娛樂的項目
			$(".main-live-casino").append(
				'<li class="col-xs-12 col-sm-6 col-md-4 main-live-casino_li">'+
					'<div class="main-live-casino-wrapper">'+
						'<input type="hidden" value="'+liveCasino[i].liveCasino_url+'">'+
						'<div class="main-live-casino-wrapper-firm">'+
							'<img class="img-responsive" src="images/firm/'+liveCasino[i].liveCasino_logo+'" alt="live-casino">'+
						'</div>'+	
						'<div class="main-live-casino-wrapper-theme">'+
							'<img class="img-responsive" src="images/theme/'+liveCasino[i].liveCasino_img+'" alt="live-casino">'+
							'<div class="btn-live-casino-enter"><a href="#">進入遊戲</a></div>'+
						'</div>'+
						'<a href="#" class="main-live-casino-wrapper_a">'+liveCasino[i].liveCasino_title+'</a>'+
					'</div>'+
				'</li>'
			);		
		}//for end
		$(".main-live-casino").append(//產生一項敬請期待，加在最後面
			'<li class="col-xs-12 col-sm-6 col-md-4 main-live-casino-upcoming main-live-casino_li">'+
				'<div class="main-live-casino-wrapper">'+
					'<div class="main-live-casino-wrapper-content">'+
						'<i class="fa fa-plus-circle main-live-casino-upcoming_i" aria-hidden="true"></i>'+
						'<h4 class="main-live-casino-upcoming_h4">敬請期待</h4>'+
						'<p class="main-live-casino-upcoming_p">UPCOMING</p>'+
					'</div>'+
				'</div>'+
			'</li>'
		);
	},

	error: function(jqXHR, textStatus, errorThrown) {
		console.log('Errors: ' + textStatus);
		console.log(jqXHR);
		console.log(errorThrown);
	}

});
$(".main-live-casino-wrapper:has(input)").click(function(){
	var gameURL = $(this).children().val();
	document.location.href = gameURL;
})

})//end