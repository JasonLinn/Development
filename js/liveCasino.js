$(function () {

	/*
	 * @array  liveCasino   	   		真人娛樂
	 * @param  liveCasino_url   		連結 
	 * @param  liveCasino_logo  		廠商logo  
	 * @param  liveCasino_img  			廣告圖片
	 * @param  liveCasino_title 		標題
	 * @param  liveCasino_upcoming_TW	中文
	 * @param  liveCasino_upcoming_EN	英文
	 */
	
	
	var liveCasino_json_URL = "json/liveCasino.json",//JSON檔案路徑
		liveCasino_upcoming_TW = "敬請期待",//最後一項，敬請期待中文
		liveCasino_upcoming_EN = "UPCOMING";//最後一項，敬請期待英文

	$.ajax({//撈取liveCasino的JSON資料
		url: liveCasino_json_URL,
		dataType: "json",
		async: false,
		success: function (liveCasino_jason, textStatus, jqXHR) {

			$.each(liveCasino_jason, function (i, val) {
				var liveCasino = val; //用變數liveCasino存JSON資訊

				$(".main-live-casino").append(
					'<li class="col-xs-12 col-sm-6 col-md-4 main-live-casino_li">' +
						'<a href="' + liveCasino.liveCasino_url + '" class="main-live-casino_a">' +
							'<div class="main-live-casino-wrapper">' +
								'<div class="main-live-casino-wrapper-firm">' +
									'<img class="img-responsive" src="images/firm/' + liveCasino.liveCasino_logo + '" alt="live-casino">' +
								'</div>' +
								'<div class="main-live-casino-wrapper-theme">' +
									'<img class="img-responsive" src="images/theme/' + liveCasino.liveCasino_img + '" alt="live-casino">' +
									'<div class="btn-live-casino-enter">進入遊戲</div>' +
								'</div>' +
								'<p class="main-live-casino-wrapper_p">' + liveCasino.liveCasino_title + '</p>' +
							'</div>' +
						'</a>' +
					'</li>'
				);
				


			
			});
			// for (var i = 0; i < liveCasino.length; i++) { //產生真人娛樂的項目
			// 		var liveCasino_url = liveCasino[i].liveCasino_url,
			// 			liveCasino_logo = liveCasino[i].liveCasino_logo,
			// 			liveCasino_img = liveCasino[i].liveCasino_img,
			// 			liveCasino_title = liveCasino[i].liveCasino_title;
			// 		$(".main-live-casino").append(
			// 			'<li class="col-xs-12 col-sm-6 col-md-4 main-live-casino_li">' +
			// 			'<a href="' + liveCasino_url + '" class="main-live-casino_a">' +
			// 			'<div class="main-live-casino-wrapper">' +
			// 			'<div class="main-live-casino-wrapper-firm">' +
			// 			'<img class="img-responsive" src="images/firm/' + liveCasino_logo + '" alt="live-casino">' +
			// 			'</div>' +
			// 			'<div class="main-live-casino-wrapper-theme">' +
			// 			'<img class="img-responsive" src="images/theme/' + liveCasino_img + '" alt="live-casino">' +
			// 			'<div class="btn-live-casino-enter">進入遊戲</div>' +
			// 			'</div>' +
			// 			'<p class="main-live-casino-wrapper_p">' + liveCasino_title + '</p>' +
			// 			'</div>' +
			// 			'</a>' +
			// 			'</li>'
			// 		);
			// } //for end
			$(".main-live-casino").append( //產生一項敬請期待，加在最後面
				'<li class="col-xs-12 col-sm-6 col-md-4 main-live-casino-upcoming main-live-casino_li">' +
					'<div class="main-live-casino-wrapper">' +
						'<div class="main-live-casino-wrapper-content">' +
							'<i class="fa fa-plus-circle main-live-casino-upcoming_i" aria-hidden="true"></i>' +
							'<h4 class="main-live-casino-upcoming_h4">' + liveCasino_upcoming_TW + '</h4>' +
							'<p class="main-live-casino-upcoming_p">' + liveCasino_upcoming_EN + '</p>' +
						'</div>' +
					'</div>' +
				'</li>'
			);
			if(liveCasino.mem_status=="false"){
				$("a").on("click",function(e){
					e.preventDefault();
					alert("請先登入會員");
				})
				
			}
			
		},//success end

		error: function (jqXHR, textStatus, errorThrown) {
			console.log('Errors: ' + textStatus);
			console.log(jqXHR);
			console.log(errorThrown);
		}

	});

}) //end