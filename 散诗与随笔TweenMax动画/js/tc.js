document.writeln('<div id="tcs" style="display:none;"><img src="images/tx.jpg\" /><h1>王智福</h1><div id="bdtex">1995年10月生于湖北孝感，爱好写点东西。觉得布吉岛网名不错便沿用至今。<br/><br/>&nbsp;&nbsp;尚未佩妥剑，转眼已江湖<br/>&nbsp;&nbsp;愿历尽千帆，归来仍少年</div></div>');


document.writeln("<style>");


document.writeln("#tcs  h1{font-size:1.5rem;text-align:center;margin-top:-3rem;}");

document.writeln("#tcs img{width:50px;height:70px;margin:20px 0 0 30px;border:1px solid black;border-radius:2px;}");

document.writeln("#bdtex{width:250px;height:290px;margin:30px 0 0 20px;font-size:1.2rem;text-indent:2rem;line-height:2rem;text-align:justify;}");	


document.writeln("@keyframes  mymove");
document.writeln("{");
document.writeln("from{height:0px;}");
document.writeln("to{height:400px}");
document.writeln("}");

document.writeln("@keyframes  mymove2");
document.writeln("{");
document.writeln("from{height:400px;}");
document.writeln("to{height:0px}");
document.writeln("}");
document.writeln("</style>");



onmouseover=function (){//JS事件：当鼠标移动到这时执行

  var Dj=document.getElementById("dji");
  var Tc=document.getElementById("tcs");
  
	Dj.onclick=function(ev){
		var oEvent=ev||event;
		Tc.style.display="block";
		Tc.style.animation="mymove 1s ease";
    oEvent.cancelBubble=true;//阻止事件冒泡
	};
	document.onclick=function (){
	   Tc.style.animation="mymove2 1s ease";
	   setTimeout(function(){Tc.style.display="none";},1000);//让它等动画执行完再消失
	 };
}

//控制audio和动画播放暂停
window.onload=function (){//JS事件：网页载入时执行
	var btn1 = document.getElementById("playbtn");
	var t=TweenMax.to(btn1,2.5,{rotation: '360deg',repeat:-1,ease:Power0.easeNone},0);//创建t对象=tweenmax动画.to方法(动画对象,动画时间,{动画方法1,重复:无限,缓动方式:力量0.减缓无就是均匀},开始延时时间);
		t.pause();
		btn1.onclick = function(){
		 	 if(audio.paused){                 
				audio.play();
				t.play();
			}else{
			    audio.pause();
			    t.pause();
			}
		};
}

//滚动进度条控制显示或隐藏返回顶部
window.onscroll=function(){//JS事件：当滚动屏幕时触发
var fhdd = document.getElementById('fhdd');
var top = document.documentElement.scrollTop || document.body.scrollTop;
  if(top>=500){
 fhdd.style.display="block";
 }else{
 fhdd.style.display="none";	  
 };
}


