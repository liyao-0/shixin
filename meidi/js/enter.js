$(function(){
				var $inpu1 = $(".p1").find("input").eq(0);
				var $span1 = $(".p1").find("span").eq(0);
				var $inpu2 = $(".p2").find("input").eq(0);
				var $span2 = $(".p2").find("span").eq(0);
				var $inpu3 = $(".p3").find("input").eq(0);
				var $span3 = $(".p3").find("span").eq(0);
				
				$inpu1.blur(function(){	
					$span1.css("display","block")
					$span1.html("请输入有效的手机号");
					var cont=$inpu1.val();
					var reg=/\^[1]\d{1,11}/ig;
					if(!(cont.length==11)){
						$span1.css("display","block")
						$span1.html("输入的长度不对");
					}else if (!(/^1[34578]\d{9}$/.test(cont))) {
						$span1.css("display","block")
						$span1.html("请重新输入手机号");
					}else{
						$span1.css("display","none")
					}
				})

				$inpu2.blur(function(){					
					$span2.css("display","block")
					$span2.html("6-20字符，支持字母，数字");
					var cont=$inpu2.val();
					var reg = /\d+[a-zA-Z]+/ig
					if (cont=="") {
						$span2.css("display","block")
						$span2.html("您输入的用户名格式不正确，请重新输入");
					}else if($.trim(cont)==""){
						$span2.css("display","block")
						$span2.html("您输入的用户名格式不正确，请重新输入");
					}else if(cont.length<=4 || cont.length>=20){
						$span2.css("display","block")
						$span2.html("您输入的位数不在范围内");
					}else if(isNaN(cont)==false){
						$span2.css("display","block")
						$span2.html("弱");
						
					}else if (reg.test(cont)==true || cont.length>=10) {
						$span2.css("display","block")
						$span2.html("强");
						
					}else if(isNaN(cont)==true || cont.length<=10){
						$span2.css("display","block")
						$span2.html("中");
					
					}
				})
				$inpu3.blur(function(){	
					var cont=$inpu2.val();
					var cont1=$inpu3.val();
					if(cont==cont1){
						$span3.css("display","block")
						$span3.html("输入正确");
						
					}else{
						$span3.css("display","block")
						$span3.html("请重新输入密码");
					}
				})

				/*$("#enter_btn").click(function(){
					alert()
					$_cookie("购物车",$inpu1.val()+"?"+$inpu3.val(),{expires:7,});
					
				})*/
			})