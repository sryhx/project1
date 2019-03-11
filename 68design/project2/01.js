 //点击
 var P=document.getElementById('P');
 var jt=document.getElementsByTagName('i')[0];
 var nation=document.getElementById('nation');
 var pan=document.getElementById('pan');
 var con=document.getElementById('content');
 P.onclick=function(){
nation.style.display="block";
jt.style.transform="rotate(-90deg)";   
}
 con.onclick=function(){
nation.style.display="none";
jt.style.transform="rotate(0deg)";   
}
 //轮播
 var oBox=document.getElementById('banner');
 var oUl=document.getElementById('list-pic');
 var aLi=oUl.getElementsByTagName('li');
 var oNext=document.getElementById('next');
 var oPrve=document.getElementById('prve');
 var num=0;
 var timer=0;
 aLi[0].style.zIndex="1";
 timer=setInterval(lunbo,3000);
 function lunbo(){
     num++;
     if(num>aLi.length-1){
         num=0;
     }
     changeImg();
 }
 lunbo();
 oBox.onmouseover=function()
 {
     clearInterval(timer);
 }
 oBox.onmouseout=function()
 {
     timer=setInterval(lunbo,3000);
 }
 oNext.onclick=function()
 {
     num++;
     if(num==aLi.length){num=0;}
     changeImg();
     return false;
 }
 oPrve.onclick=function()
 {
     num--;
     if(num==-1){num=aLi.length-1;}
     changeImg();
     return false;
 }
 function changeImg()
 {
     for(var i=0; i<aLi.length; i++)
     {
         aLi[i].style.zIndex="0";
         aLi[i].style.opacity="0";
     }
     aLi[num].style.zIndex="1";
     aLi[num].style.opacity="1";
     aLi[num].style.transition="opacity 2s";
 }
 //字体滚动
 var Ul=document.getElementById('con1');
 var Li=Ul.getElementsByTagName('li');
 var time=0;
 var index=0;
 setInterval(function(){
 if(index>=Li.length){index=0;}
 Ul.style.top=-30*index+"px";
 index++;
 Ul.style.transition="top 0.3s linear";
 },3000);

var tt=document.getElementById('ftop');   
window.onscroll=dis;
function dis(){
 var cw=document.documentElement.scrollTop||document.body.scrollTop;
if(cw>300){
         tt.style.display="block";
 }else{
         tt.style.display="none";
 }
}
 tt.onclick=function(){
     this.style.display="none"
     window.onscroll=null;
 var  duration=500;
 var target=document.documentElement.scrollTop||document.body.scrollTop;
 var step=(target/duration)*10;
 var timer=window.setInterval(function(){
         var curTop=document.documentElement.scrollTop||document.body.scrollTop;
         if(curTop===0){
                 window.clearInterval(timer);
                 window.onscroll=dis;
                 return;
         }
            curTop-=step;
            document.documentElement.scrollTop=document.body.scrollTop=curTop;
  },10)
}