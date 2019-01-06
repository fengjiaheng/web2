
window.onload = function(){
// 顶部-----------------------------------------------
	var cover = document.getElementsByClassName('cover')[0];
	window.onscroll = function(){
		var str = document.documentElement.scrollTop || document.body.scrollTop;
		if(str>180){
			cover.style.position = 'fixed';
		}else{
			cover.style.position = 'static';
		}
	}

	var div5 = document.getElementsByClassName('div5');
	var div5img1 = document.getElementsByClassName('div5img1');
	var div5img11 = document.getElementsByClassName('div5img11');
	var div5img2 = document.getElementsByClassName('div5img2');
	var div5img22 = document.getElementsByClassName('div5img22');
	var slider1 = document.getElementsByClassName('slider1');
	div5img1[0].onmouseover = function(){
 		div5img11[0].style.display = 'block';
 		slider1[0].style.display = 'block';
 	}
 	div5img1[0].onmouseout = function(){
 		div5img11[0].style.display = 'none';
 		slider1[0].style.display = 'none';
 	}
	
	div5img1[0].onmousemove = function(){
 		// 距离边框左端和上端的距离
 		var oL = event.clientX - div5[0].offsetLeft - slider1[0].offsetWidth/2;
 		var oT = event.clientY - div5[0].offsetTop - slider1[0].offsetHeight/2;
 		//最大距离
 		var oMaxw = div5img1[0].offsetWidth -slider1[0].offsetWidth;
 		var oMaxh = div5img1[0].offsetHeight - slider1[0].offsetHeight;

 		oL = oL >oMaxw?oMaxw:oL<0?0:oL;
 		oT = oT >oMaxh?oMaxh:oT<0?0:oT;

 		slider1[0].style.left = oL +'px';
 		slider1[0].style.top = oT + 'px';

 		var m = 800/412;
 		div5img11[0].style.left = "-"+oL*m+'px';
 		div5img11[0].style.top = "-"+oT*m+'px';

 	}
 	div5img2[0].onmouseover = function(){
 		div5img22[0].style.display = 'block';
 		slider2[0].style.display = 'block';
 	}
 	div5img2[0].onmouseout = function(){
 		div5img22[0].style.display = 'none';
 		slider2[0].style.display = 'none';
 	}
	
	div5img2[0].onmousemove = function(){
 		// 距离边框左端和上端的距离
 		var oL = event.clientX - div5[0].offsetLeft - slider2[0].offsetWidth/2;
 		var oT = event.clientY - div5[0].offsetTop - slider2[0].offsetHeight/2;
 		//最大距离
 		var oMaxw = div5img2[0].offsetWidth -slider2[0].offsetWidth;
 		var oMaxh = div5img2[0].offsetHeight - slider2[0].offsetHeight;

 		oL = oL >oMaxw?oMaxw:oL<0?0:oL;
 		oT = oT >oMaxh?oMaxh:oT<0?0:oT;

 		slider2[0].style.left = oL +'px';
 		slider2[0].style.top = oT + 'px';

 		var m = 800/412;
 		div5img22[0].style.left = "-"+oL*m+'px';
 		div5img22[0].style.top = "-"+oT*m+'px';

 	}

 	var onclick1 = document.getElementsByClassName('div5d3d1');
 	var onclick2 = document.getElementsByClassName('div5d3d2');
 	onclick1[0].onclick = function(){
 		onclick1[0].style.border = '1px solid #ff0000';
 	}
 	onclick2[0].onclick = function(){
		onclick2[0].style.border = '1px solid #ff0000';
 	}


}
