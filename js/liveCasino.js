$(function(){
	var liveCasino = [{"liveCasino_logo":"firm/og_1.png","liveCasino_logo":"firm/og_2.png"},{"liveCasino_title":"suncity"}];
	// var liveCasino =  JSON.parse(liveCasino_json);
	  // JData = [{ name: "Wing", age: "20", height: "182" },
           // { name: "Wind", age: "18", height: "165" },
           // { name: "Edge", age: "25", height: "171" }];
    // var data = JSON.parse(JData[0]);
    // console.log(data.name);
	// console.log(liveCasino_json.liveCasino_logo);
	console.log(liveCasino.length);
	for(var i=0;i<liveCasino.length;i++){
		$(".main-live-casino").append(
			'<div class="col-xs-12 col-sm-4 main-live-casino_div">'+
			
			'</div>'
		);		
	}

})