
			//调用开始
			var videoObject = {
				container: '.video', //视频容器
				poster:'1.jpg',//封面图片
				video:'report.mp4',//视频地址
				ad:{//定义广告
					front:{//定义贴片广告
						closeTime:3,//播放贴片广告时3秒后显示可关闭广告
						closeButtonClick:'closeFront',//点击关闭按钮触发事件
						list:[//贴片广告列表
								{
						            file: 'front.mp4',//视频地址
						            type: 'video/mp4',//视频格式
						            link:'https://jzytmgcxy.sqnu.edu.cn/',//链接地址
						            time: 12//视频时长
						        }
						]
					},
					pause:{//配置暂停广告
						close:true,//暂停广告是否显示关闭按钮
						list:[//暂停广告列表
							{
								file: 'pause.jpg',//图片
								link: 'https://jzytmgcxy.sqnu.edu.cn/',
								time: 5//显示时长
							}
						]
					}
				}

			};
			var player=new ckplayer(videoObject)//调用播放器并赋值给变量player
			function closeFront(){//用户点击关闭广告触发
				player.closeFrontAd();//关闭广告
			}
			/*
			 * ===============================================================================================
			 * 以上代码已完成调用演示，下方的代码是演示监听动作和外部控制的部分
			 * ===============================================================================================
			 * ===============================================================================================
			 */
			player.play(function(){
				document.getElementById('state').innerHTML='监听到播放';
			});
			player.pause(function(){
				document.getElementById('state').innerHTML='监听到暂停';
			});
			player.volume(function(vol){
				document.getElementById('state').innerHTML='监听到音量改变：'+vol;
			});
			player.muted(function(b){
				document.getElementById('state2').innerHTML='监听到静音状态：'+b;
			});
			player.full(function(b){
				document.getElementById('state').innerHTML='监听到全屏状态：'+b;
			});
			player.ended(function(){
				document.getElementById('state').innerHTML='监听到播放结束';
			});
		