$(document).ready(function(){
	//一
	var btn=document.getElementById("btn0");
      btn.onclick=function(){
	      if(btn.innerHTML=="查看更多 ＋"){
	      	$(".hide").css("display","block");
	      	btn.innerHTML="关闭 ×";
	      }else{
	      	$(".hide").css("display","none");
	      	btn.innerHTML="查看更多 ＋";
	      }
      }
      //二
      var btn1=document.getElementById("btn1");//按钮
      btn1.onclick=function(){
	      if(btn1.innerHTML=="查看更多 ＋"){
	      	$(".away").css("display","block");
	      	btn1.innerHTML="关闭 ×";
	      }else{
	      	$(".away").css("display","none");
	      	btn1.innerHTML="查看更多 ＋";
	      }
      }
      //三
      var btn2=document.getElementById("haha");//按钮
      btn2.onclick=function(){
	      if(btn2.innerHTML=="查看更多 ＋"){
	      	$(".ensconce").css("display","block");
	      	btn2.innerHTML="关闭 ×";
	      }else{
	      	$(".ensconce").css("display","none");
	      	btn2.innerHTML="查看更多 ＋";
	      }
      }
      //四
      var btn3=document.getElementById("btn3");//按钮
      btn3.onclick=function(){
	      if(btn3.innerHTML=="查看更多 ＋"){
	      	$(".vanish").css("display","block");
	      	btn3.innerHTML="关闭 ×";
	      }else{
	      	$(".vanish").css("display","none");
	      	btn3.innerHTML="查看更多 ＋";
	      }
      }
});
      