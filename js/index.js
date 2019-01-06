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

// 轮播---------------------------------------------------------
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			if(attr == 'opacity'){
				var now = parseInt(getStyle(obj,attr))*100;
			}else{
				var now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr]-now)/5;
			speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
			if(attr == 'opacity'){
			obj.style[attr] = (now + speed)/100;
			}
			else
			obj.style[attr] = now + speed + "px";
			}
			var current = now+speed;
			if(json[attr]!==current){
				isStop = false;
			}
			if(isStop){
			 	clearInterval(obj.timer);
				callback&&callback();
			}
		},10)
}
function getStyle(obj,style){
	if(getComputedStyle(obj)){
		return getComputedStyle(obj)[style];
	}else{
	 	obj.currentStyle[style];
	}
}

	var slider = document.getElementById('slider');
    var box = document.getElementById('box');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var oNavlist = document.getElementById('nav').children;

    var index = 1;
    function next(){
        index++;
        navChange();
        animate(slider,{left:-800*index},function(){
            if(index == 6){
                slider.style.left = '-800px';
                index = 1;
            }
        })
    }
    function prev(){
        index--;
        navChange();
        animate(slider,{left:-800*index},function(){
            if(index == 0){
                slider.style.left = '-4000px';
                index = 5;
            }
        })
    }
    var timer = setInterval(next,3000);
    box.onmouseover = function(){
        clearInterval(timer);
        animate(left,{opacity:50});
        animate(right,{opacity:50});
    }

    box.onmouseout = function(){
        animate(left,{opacity:0});
        animate(right,{opacity:0});
        timer = setInterval(next,3000);
    }

    right.onclick = next;
    left.onclick = prev;

    for(var i = 0;i < oNavlist.length;i++){
        oNavlist[i].idx = i;
        oNavlist[i].onclick = function (){
            index = this.idx + 1;
            animate(slider,{left:-800*index})
            navChange();
        }
    }

    function navChange(){
        for(var i = 0;i < oNavlist.length;i++){
            oNavlist[i].className = '';
        };
        if(index == 6){
            oNavlist[0].className = 'active'
        }
        else if(index == 0){
            oNavlist[4].className = 'active'
        }
        else
            oNavlist[index-1].className = 'active';
    }

// 公告上下滚动---------------------------------------
    var div8d12p = document.getElementById('div8d12');
    var dchild;
    var T;
    var roLL = setInterval(roll,40);
    function roll(){
        for(var i = 1;i<= div8d12p.children.length;i++){
            dchild = document.getElementById('div8d12p'+i);
            T = dchild.offsetTop-1;
            console.log(T);
            if(T < -30){
                dchild.style.top = 	360+'px';
            }else{
            	dchild.style.top = 	T+'px';
            }
        }
    }
    div8d12p.onmouseover = function(){
    	clearInterval(roLL);
    }
    div8d12p.onmouseout = function(){
    	roLL = setInterval(roll,40);
    }
// right------------------------------------------------------
    var rit1 = document.getElementsByClassName('rit1')[0];
    rit1.onmouseover = function(){
        rit1.style.left = '92%';
    }
    rit1.onmouseout = function(){
        rit1.style.left = '97%';
    }

    var rit2 = document.getElementsByClassName('rit2')[0];
    rit2.onmouseover = function(){
        rit2.style.left = '92%';
    }
    rit2.onmouseout = function(){
        rit2.style.left = '97%';
    }

    
     var rit3 = document.getElementsByClassName('rit3')[0];
     rit3.onmouseover = function(){
        rit3.style.left = '92%';
     }
     rit3.onmouseout = function(){
        rit3.style.left = '97%';
     }

     var rit4 = document.getElementsByClassName('rit4')[0];
     rit4.onmouseover = function(){
        rit4.style.left = '92%';
     }
     rit4.onmouseout = function(){
        rit4.style.left = '97%';
     }








}
// 选择充值金额-------------------------------------
	var pp = document.getElementsByClassName('div8d2p2');
	function show1(value){
		pp[0].innerHTML = '￥'+value;
	}



