//点击换地点
var na=document.getElementById('nation');
var I=document.getElementById('ii');
function f1(){
    na.style.display="block";
    I.style.transform="rotate(225deg)"
}
function f2(){
    na.style.display="none";
    I.style.transform=""
}
var china=document.getElementById('china');
var liA=na.getElementsByTagName('a');
for(var i=0;i<liA.length;i++){
    liA[i].onclick=function(){
        china.innerHTML=this.innerHTML;
    }
}

//Input点击换字
var view=document.getElementById('view');
var count=document.getElementById('count');
var aLi=count.getElementsByTagName('a');
for(var i=0;i<aLi.length;i++){
    aLi[i].onclick=function(){
        view.innerHTML=this.innerHTML;            
    }
}

//商品分类  显示与影藏
var tt=document.getElementsByClassName('tese')[0];
var ss=document.getElementsByClassName('shudan')[0];
tt.onmouseover=function(){
    ss.style.display="block";
}
tt.onmouseout=function(){
ss.style.display="none";
}

//轮播图
var oBox=document.getElementById('banner');
var oUl=document.getElementById('list-pic');
var aLi=oUl.getElementsByTagName('li');
var oLi=document.getElementById('list-circle');
var aCli=oLi.getElementsByTagName('li');
var num=0;
var timer=0;
timer=setInterval(chan,2000);
function chan(){   
    num++;
    if(num==aLi.length){num=0;}
    changeImg();		
}
oBox.onmouseover=function(){
    clearInterval(timer);
}
oBox.onmouseout=function(){
    timer=setInterval(chan,2000);
}
for(var i=0; i<aCli.length; i++){
    aCli[i].index=i;
    aCli[i].onclick=function(){
        num=this.index;
        changeImg();
    }
}		
for(var i=0; i<aCli.length; i++){
    aCli[i].index=i;
    aCli[i].onmousemove=function(){
        num=this.index;
        changeImg();
    }
}		
function changeImg(){
    for(var i=0; i<aLi.length; i++){		
        aLi[i].style.opacity="0";
        aCli[i].className="";
    }		
    aLi[num].style.opacity="1";		
    aCli[num].className="active";
}

//选项卡的切换---新书预售
var Div=document.getElementsByClassName('main')[0];
var DUl=Div.getElementsByTagName('ul')[0];
var uLi=DUl.getElementsByTagName('li');
var Ol=document.getElementById('circle');
var oLi=Ol.getElementsByTagName('li');
var num=0;
DUl.style.width=194*uLi.length+"px";
for(var i=0;i<oLi.length;i++){
oLi[i].index=i;
oLi[i].onmousemove=function(){
    for(var i1=0;i1<oLi.length;i1++){
    oLi[i1].className="";  
    }
this.className="act";
num=this.index;
DUl.style.left=-(num*194)+"px";
    }
}
var Zr=document.getElementsByClassName('zr')[0];
var Zl=document.getElementsByClassName('zl')[0];
    Zl.onclick=function(){
        num--;
        if(num<0){num=0;}
        changeI();
        DUl.style.left=-(num*194)+"px";
    }
    Zr.onclick=function(){
        num++;
        if(num==uLi.length){num=uLi.length-1;}
        changeI();
        DUl.style.left=-(num*194)+"px";
    }
    function changeI()
{
    for(var i=0; i<oLi.length; i++)
    {						
        oLi[i].className="";
    }							
    oLi[num].className="act";
}

//选项卡的切换---新书上架
var imgList = document.getElementById("imgList");
var imgArr = imgList.getElementsByTagName("li");
imgList.style.width = 780*imgArr.length+"px";
var outer = document.getElementsByClassName("outer");
var list=document.getElementById('list');
var oList=list.getElementsByTagName('li');
var num=0;
var timer;
var next=document.getElementsByClassName('left')[0];
var prev=document.getElementsByClassName('right')[0];
next.onclick=function(){
    num--;
    if(num<0){num=0;}
    imgList.style.left = -(num * 780) + "px";
    change();
    }
prev.onclick=function(){
num++;
if(num >= imgArr.length){num=imgArr.length-1;}
imgList.style.left = -(num * 780) + "px";
change();
}		
function change(){
for(var i=0; i<oList.length; i++){						
    oList[i].className="";
}							
oList[num].className="tive";
}	
for(var i=0;i<oList.length;i++){
oList[i].index=i;
oList[i].onmousemove=function(){
    for(var i1=0;i1<oList.length;i1++){
        oList[i1].className="";  
    }
this.className="tive";
num=this.index;
imgList.style.left = -(num * 780) + "px";
}
}   

//新书热卖榜
var Li=document.getElementsByClassName('Li');
var smai=document.getElementsByClassName('smai');
for(var i=0;i<Li.length;i++){
    Li[i].index=i;
    Li[i].onmouseover=function(){
        for(var i=0;i<Li.length;i++){
            deleteClass(Li[i],"accr");
            deleteClass(smai[i],"accr");
        }
        addClass(this,"accr");
        addClass(smai[this.index],"accr");
    }
}  

var jgu=document.getElementsByClassName('jgu');
var xmai=document.getElementsByClassName('xmai');
for(var i=0;i<jgu.length;i++){
    jgu[i].index=i;
        jgu[i].onmouseover=function(){
        for(var i=0;i<jgu.length;i++){
            deleteClass(jgu[i],"accr");
            deleteClass(xmai[i],"accr");

        }
        addClass(this,"accr");
        addClass(xmai[this.index],"accr");
    }
}  

var zd=document.getElementsByClassName('zd');
var tshu=document.getElementsByClassName('tshu');
function addClass(elem,value){
if(!elem.className){
    elem.className=value;
}else{
    var newClassName=elem.className;
    newClassName+=" ";
    newClassName+=value;
    elem.className=newClassName;
}
}
function deleteClass(elem,value){
    var newClassName=elem.className;
    if(newClassName.indexOf(value)){
        elem.className=newClassName.replace(value," ");
    }
}
for(var i=0;i<zd.length;i++){
    zd[i].index=i;
        zd[i].onmouseover=function(){
        for(var i=0;i<zd.length;i++){
            deleteClass(zd[i],"curre");
            deleteClass(tshu[i],"curre");
        }
        addClass(this,"curre");
        addClass(tshu[this.index],"curre");
    }
} 	

var xrui=document.getElementsByClassName('xrui');
var sel=document.getElementsByClassName('sel');
for(var i=0;i<xrui.length;i++){
    xrui[i].index=i;
    xrui[i].onmouseover=function(){
        for(var i=0;i<xrui.length;i++){
            deleteClass(xrui[i],"active");
            deleteClass(sel[i],"active");
        }
        addClass(this,"active");
        addClass(sel[this.index],"active");
    }
}

//点击返回顶部
var tt=document.getElementById('fhui');   
window.onscroll=dis;
function dis(){
 var db=document.documentElement.scrollTop||document.body.scrollTop;
if(db>300){
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
