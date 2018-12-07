// ==UserScript==
// @name        test
// @namespace   test
// @version     1
// @grant       none   //dc3ee78
// ==/UserScript==//
var head = document.getElementsByTagName('body')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.onload = function() {
    
}
script.src = 'https://cdn.staticaly.com/gh/dagzadag/portfolio/ab1529b/main.js'; //timeStamp
head.appendChild(script);

var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.onload = function() {
  callFunctionFromScript();
}
script.src = 'https://cdn.staticaly.com/gh/dagzadag/portfolio/770e97a/main.js'; //screenShot
head.appendChild(script);

//save
function changeValue(time){
  console.log('changing value');
  var str = document.getElementsByClassName('visualCaptcha-explanation')[0].innerHTML;
  var firstPart = str.replace('Click or touch the ','Choose from 1 to 5 ');
  secPart = firstPart.replace('<strong>','<strong style="color:black;">');
  document.getElementsByClassName('visualCaptcha-explanation')[0].innerHTML = secPart;
  var img1 = document.getElementsByClassName('imgAnchor')[0].innerHTML ;
  document.getElementsByClassName('imgAnchor')[0].innerHTML = img1 + '<strong style="color: red;font-size: 20px;">1</strong>';
  var img2 = document.getElementsByClassName('imgAnchor')[1].innerHTML;
  document.getElementsByClassName('imgAnchor')[1].innerHTML = img2 + '<strong style="color: red;font-size: 20px;">2</strong>';
  var img3 = document.getElementsByClassName('imgAnchor')[2].innerHTML;
  document.getElementsByClassName('imgAnchor')[2].innerHTML = img3 + '<strong style="color: red;font-size: 20px;">3</strong>';
  var img4 = document.getElementsByClassName('imgAnchor')[3].innerHTML;
  document.getElementsByClassName('imgAnchor')[3].innerHTML = img4 + '<strong style="color: red;font-size: 20px;">4</strong>';
  var img5 = document.getElementsByClassName('imgAnchor')[4].innerHTML;
  document.getElementsByClassName('imgAnchor')[4].innerHTML = img5 + '<strong style="color: red;font-size: 20px;">5</strong>';
}
function firstAds(){
	setTimeout(function (){
    document.getElemenyById('submit').click();
  },22000)
}
function mainAdd(){
  var n = document.getElementById("view-1");
  if (n){
  	return n.click();
  }else{
    firstAds();
    console.log("No ads wating time 20 minute")
    setTimeout(function(){
      window.location.reload();
      console.log("Wating till apears");
    },1200000)	
  }
}
function addView(){
  document.getElementById("copy-1").click();
  try {
    document.getElementById("copy-2").click();
    document.getElementById("copy-3").click();
  }
  catch (err){
  }
  setTimeout(function(){
    document.getElementById("view_ad").click();	
  },900)
}
var doc_men = document.getElementsByTagName('title')[0].text;
if (doc_men == "PaidVerts: Member - Paid Ads"){
  try{
    document.getElementsByClassName("btn-success")[0].click();
  }catch(err){}
  setTimeout(function(){
    mainAdd();
  },2000)
}else{
  setTimeout(function(){
    addView();
  },2000)
}
try {
var ino = document.getElementById('captcha').innerHTML;
var check = setInterval(function(){
  ino = document.getElementById('captcha').innerHTML;
  if (ino.length > 10){
    document.getElementById('tips').innerHTML += '<a id="timeId" href="javascript:timeStamp()"></a>'
		document.getElementById('tips').innerHTML += '<a id="imacro" href="javascript:(function() {screenShot(&#34;'+ap+'&#34;);}) ();"></a>'
		changeValue();
    document.getElementById("timeId").click();
    document.getElementById("imacro").click();
    clearInterval(check);    
  }
},1000);
var inoOne = document.getElementById('clickEx').innerHTML;
var checkOne = setInterval(function(){
  inoOne = document.getElementById('clickEx').innerHTML;
  if (inoOne.length > 10){
    document.getElementById('clickEx').click();
    console.log('found');
    clearInterval(checkOne);    
  }
},1000);
}catch(err){}
