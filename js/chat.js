var config = {
  syncURL: "https://wild-dragon-0132.wilddogio.com"
};
wilddog.initializeApp(config);
var ref = wilddog.sync().ref();
var time = 0;

ref.on("value", function(snapshot) {
    if(snapshot.val()){
    	var value = snapshot.val().app.message.text;
    	var t = snapshot.val().app.message.time;
    	if(time == t){
    		show("./images/touxiangm.png",value);
    	}else{
    		send("images/touxiang.png",value);
    	}
    }
});
/*发送消息*/
function send(headSrc,str){
	var html="<div class='send'><div class='msg'><img src="+headSrc+" />"+
	"<p><i class='msg_input'></i>"+str+"</p></div></div>";
	upView(html);
}
/*接受消息*/
function show(headSrc,str){
	var html="<div class='show'><div class='msg'><img src="+headSrc+" />"+
	"<p><i class='msg_input'></i>"+str+"</p></div></div>";
	upView(html);
}
/*更新视图*/
function upView(html){
	$('.message').append(html);
	$('body').animate({scrollTop:$('.message').outerHeight()-window.innerHeight},200)
}
function sj(){
	return (new Date).getTime();
}
$(function(){
	$('.footer').on('keyup','input',function(){
		if($(this).val().length>0){
			$(this).next().css('background','#114F8E').prop('disabled',true);
		
		}else{
			$(this).next().css('background','#ddd').prop('disabled',false);
		}
	})
	$('.footer p').click(function(){
		
		time = sj();
		ref.set({
		  "app":{
		    "message":{
		        "text" : $(this).prev().val(),
		        "time" : time
		    }
		  }
		});
		$(this).prev().val("");
	})
})