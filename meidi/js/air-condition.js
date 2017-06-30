	var t_r = document.getElementById("t-r").childNodes;
	 	for (var i=0;i<t_r.length;i++){
	      	if (t_r[i].className=="t-r-4"){
	         	t_r[i].onmouseover = function(){fnNav(this,"block")};
	          	t_r[i].onmouseout = function(){fnNav(this,"none")};
	        }
	    }

	 	for (var i=0;i<t_r.length;i++){
	      	if (t_r[i].className=="t-r-2"){
	         	t_r[i].onmouseover = function(){fnNav2(this,"block")};
	          	t_r[i].onmouseout = function(){fnNav2(this,"none")};
	        }
	    }


	function fnNav(obj,flag){
	    obj.getElementsByTagName("dl")[0].style.display = flag;
	}	

	function fnNav2(obj,flag){
	    obj.getElementsByClassName("t-r-2-b")[0].style.display = flag;
	}







	window.onload = function(){
		var oDiv = document.getElementById("product_left");
		var oMark = oDiv.getElementsByClassName("mark")[0];
		var oFloat = oDiv.getElementsByClassName("float_layer")[0];
		var oBig = oDiv.getElementsByClassName("big_pic")[0];
		var oSmall = oDiv.getElementsByClassName("showcase")[0];
		var oImg = oBig.getElementsByTagName("img")[0]

		//1、给遮罩层添加移入移除事件
		oMark.onmouseover = function(){
			//将小滑块显示出来
			//放大的区域也显示出来
			oFloat.style.display = "block";
			oBig.style.display = "block";
		}
		oMark.onmouseout = function(){
			oFloat.style.display = "none";
			oBig.style.display = "none";
		}

		//让小滑块跟着鼠标移动
		oMark.onmousemove = function(even){
			var e = even || window.event;
			//让小块居中
			var l = e.clientX - oDiv.offsetLeft - oSmall.offsetLeft - oFloat.offsetWidth / 2;
			var t = e.clientY - oDiv.offsetTop - oSmall.offsetTop - oFloat.offsetHeight / 2;
			//document.title = l + ", " + t;

			//限制块不能出界
			if(l < 0){
				l = 0
			}else if(l > oMark.offsetWidth - oFloat.offsetWidth){
				l = oMark.offsetWidth - oFloat.offsetWidth;
			}

			if(t < 0){
				t = 0;
			}else if(t > oMark.offsetHeight - oFloat.offsetHeight){
				t = oMark.offsetHeight - oFloat.offsetHeight;
			}


			oFloat.style.left = l + "px";
			oFloat.style.top = t + "px";

			//让大的图片按比例进行移动
			//计算大图片和小图片的比例  按照比例来移动大图片的距离
			var percentX = l / (oMark.offsetWidth - oFloat.offsetWidth);
			var percentY = t / (oMark.offsetHeight - oFloat.offsetHeight);
			/*document.title = percentX + ", " + percentY;*/

			oImg.style.left = -percentX * (oImg.offsetWidth - oBig.offsetWidth) + "px";
			oImg.style.top = -percentY * (oImg.offsetHeight - oBig.offsetHeight) + "px";	
		}
	}



































