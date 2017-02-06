//获取DOM对象
var g=function(id)
{
	return document.getElementById(id);
}

/*建立一个时间类*/
var TimeLine = function() {
				this.order = []; //动画序列
				this.add = function(timeout, func, log) {
					this.order.push({
						timeout: timeout,
						func: func,
						log: log
					})
				}
				this.start = function(ff) {
					for(s in this.order) {
						(function(me) {
							var fn = me.func;
							var timeout = me.timeout;
							var log = me.log;
							Timeout = Math.max(timeout - ff, 0);

							setTimeout(fn, timeout);
							setTimeout(function() {
								console.log('time->', timeout, 'log->', log);
							})
						})(this.order[s]);
					}
				}
			}

//最初的场景
var s1=new TimeLine();
//粽子展开的场景
var s2=new TimeLine();
//粽子旋转的场景
var s3=new TimeLine();

s1.add(1,function(){
	g('c_zongzi_box').className='c_zongzi_box c_zongzi_box_rock';
	
	g('c_rope').onclick=function()
	{
		s2.start();
		g('c_rope').onclick=function(){}
	}
})

//粽子展开啦!
s2.add(1,function(){
	g('c_zongzi_box').className='c_zongzi_box';
	g('text').className='text text_in';
})
s2.add(100,function(){
	g('c_rope').className='c_rope_2';
	console.log("2");
})
s2.add(500,function(){
	g('c_rope').className='c_rope_3';
	console.log("3");
})
s2.add(1000,function(){
	g('c_rope').className='c_rope_4';
	g('caption').className='caption caption_rock';
})
s2.add(1500,function(){
	g('c_rope').className='c_rope_0';
	console.log("5");
})
s2.add(2000,function(){
	g('c_zongzi').className="c_zongzi c_zongzi_out";
	g('c_zongziMeat').className='c_zongziMeat c_zongziMeat_in';
	g('c_leftLeaf').className='c_leftLeaf c_leftLeaf_in';
	g('c_rightLeaf').className='c_rightLeaf c_rightLeaf_in';
	
	g('c_text_1').className="c_text_1 c_text_in";
	g('c_text_2').className="c_text_2 c_text_mirror_0";
})
s2.add(3000,function(){
	g('c_leftLeaf').className='c_leftLeaf c_leftLeaf_in c_leftLeaf_out';
	g('c_rightLeaf').className='c_rightLeaf c_rightLeaf_in c_rightLeaf_out';
	g('c_bottomLeaf').className='c_bottomLeaf c_bottomLeaf_in';
	
	s3.start();
})

//粽子旋转
s3.add(1000,function(){
	g('c_zongziMeat').className='c_zongziMeat c_zongziMeat_in c_zongziMeat_view_1'
})
s3.add(1200,function(){
	g('c_zongziMeat').className='c_zongziMeat c_zongziMeat_in c_zongziMeat_view_2';
	g('c_text_1').className='c_text_1 c_text_in c_text_view_2';
	g('c_text_2').className='c_text_2 c_text_in c_text_mirror_2';
})
s3.add(1400,function(){
	g('c_zongziMeat').className='c_zongziMeat c_zongziMeat_in c_zongziMeat_view_3';
	g('c_text_1').className='c_text_1 c_text_in c_text_view_3';
	g('c_text_2').className='c_text_2 c_text_in c_text_mirror_3';
})
s3.add(1600,function(){
	g('c_zongziMeat').className='c_zongziMeat c_zongziMeat_in c_zongziMeat_view_4';
	g('c_text_1').className='c_text_1 c_text_in c_text_view_4';
	g('c_text_2').className='c_text_2 c_text_in c_text_mirror_4';
})
s3.add(1800,function(){
	g('c_zongziMeat').className='c_zongziMeat c_zongziMeat_in c_zongziMeat_view_0';
	g('c_text_1').className='c_text_1 c_text_in c_text_mirror_0';
	g('c_text_2').className='c_text_2 c_text_in c_text_view_0';
})
s3.add(3000,function(){
	g('c_zongziMeat').className='c_zongziMeat c_zongziMeat_in c_zongziMeat_view_4';
	g('c_text_1').className='c_text_1 c_text_in c_text_view_4';
	g('c_text_2').className='c_text_2 c_text_in c_text_mirror_4';
})
s3.add(3200,function(){
	g('c_zongziMeat').className='c_zongziMeat c_zongziMeat_in c_zongziMeat_view_3';
	g('c_text_1').className='c_text_1 c_text_in c_text_view_3';
	g('c_text_2').className='c_text_2 c_text_in c_text_mirror_3';
})
s3.add(3400,function(){
	g('c_zongziMeat').className='c_zongziMeat c_zongziMeat_in c_zongziMeat_view_2';
	g('c_text_1').className='c_text_1 c_text_in c_text_view_2';
	g('c_text_2').className='c_text_2 c_text_in c_text_mirror_2';
})
s3.add(3600,function(){
	g('c_zongziMeat').className='c_zongziMeat c_zongziMeat_in c_zongziMeat_view_0';
	g('c_text_1').className='c_text_1 c_text_in c_text_view_0';
	g('c_text_2').className='c_text_2 c_text_in c_text_mirror_0';
})

s3.add(5000,function(){
	s3.start();
})
//s1.start();

var imgs=['img/zzr_2.png','img/zzr_3.png','img/zzr_4.png'];
var imgs_onload=function(){
	imgs.pop();
	if(imgs.length==0)
	{
		s1.start();
	}
}
for(s in imgs){
	var img=new Image;
	img.onload=imgs_onload;
	img.src=imgs[s];
}
