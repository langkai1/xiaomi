/*
* @Author: dell
* @Date:   2018-05-05 10:44:44
* @Last Modified by:   dell
* @Last Modified time: 2018-05-14 21:43:49
*/

window.onload=function(){
   $("#shouji").mouseenter(function(){
     $(".daohk").css({"display":"block"});
 }).mouseleave(function(){
     $(".daohk").css({"display":"none"});
 });

  $(".gwc").mouseenter(function(){
     $(".shop").css({"display":"block"});
 }).mouseleave(function(){
     $(".shop").css({"display":"none"});
 });
 $("#xmsj1").mouseenter(function(){
     $("#xmsj").css({"display":"block"});
 }).mouseleave(function(){
     $("#xmsj").css({"display":"none"});
 });
  $("#hm1").mouseenter(function(){
     $("#hm").css({"display":"block"});
 }).mouseleave(function(){
     $("#hm").css({"display":"none"});
 });
 $("#ds1").mouseenter(function(){
     $("#ds").css({"display":"block"});
 }).mouseleave(function(){
     $("#ds").css({"display":"none"});
 });
 $("#bjb1").mouseenter(function(){
     $("#bjb").css({"display":"block"});
 }).mouseleave(function(){
     $("#bjb").css({"display":"none"});
 });
  $("#hz1").mouseenter(function(){
     $("#hz").css({"display":"block"});
 }).mouseleave(function(){
     $("#hz").css({"display":"none"});
 });

 $("#remen1").mouseenter(function(){
     $("#remen").css({"display":"block"});
     $("#chuxing").css({"display":"none"});
     $("#jiankang").css({"display":"none"});
     $("#kuwan").css({"display":"none"});
     $("#luyouqi").css({"display":"none"});
 });
 $("#chuxing1").mouseenter(function(){
     $("#chuxing").css({"display":"block"});
     $("#remen").css({"display":"none"});
     $("#jiankang").css({"display":"none"});
     $("#kuwan").css({"display":"none"});
     $("#luyouqi").css({"display":"none"});
 });
 $("#jiankang1").mouseenter(function(){
     $("#jiankang").css({"display":"block"});
     $("#remen").css({"display":"none"});
     $("#chuxing").css({"display":"none"});
     $("#kuwan").css({"display":"none"});
     $("#luyouqi").css({"display":"none"});
 });
 $("#kuwan1").mouseenter(function(){
     $("#kuwan").css({"display":"block"});
     $("#remen").css({"display":"none"});
     $("#chuxing").css({"display":"none"});
     $("#jiankang").css({"display":"none"});
     $("#luyouqi").css({"display":"none"});
 });
 $("#luyouqi1").mouseenter(function(){
     $("#luyouqi").css({"display":"block"});
     $("#remen").css({"display":"none"});
     $("#chuxing").css({"display":"none"});
     $("#jiankang").css({"display":"none"});
     $("#kuwan").css({"display":"none"});
 });

 $("#xp1").mouseenter(function(){
     $("#xp").css({"display":"block"});
 }).mouseleave(function(){
     $("#xp").css({"display":"none"});
 });
  $("#lyq1").mouseenter(function(){
     $("#lyq").css({"display":"block"});
 }).mouseleave(function(){
     $("#lyq").css({"display":"none"});
 });
  $("#znyj1").mouseenter(function(){
     $("#znyj").css({"display":"block"});
 }).mouseleave(function(){
     $("#znyj").css({"display":"none"});
 });

  // 倒计时开始
   var second=document.querySelector("#second");
   var nub=second.innerHTML;
   var min=document.querySelector("#minute");
   var aub=min.innerHTML;
   var minute=document.querySelector("#hour");
   var rub=minute.innerHTML;
   var time=document.querySelector(".time");

  
   setInterval(function(){
    var tody = new Date();
    rub=tody.getHours();
    console.log(rub);
    if(rub>=0&&rub<10){
      time.innerHTML="10:00 场";
          nub=tody.getSeconds();
      nub=59-nub;
    if (nub<10) {
      second.innerHTML="0"+nub;
    }
    else{
        second.innerHTML=nub;
    }
    aub=tody.getMinutes();
    aub=59-aub;
    if (aub<10) {
      min.innerHTML="0"+aub;
    }
    else{
        min.innerHTML=aub;
    }
    rub=tody.getHours();
    rub=9-rub;
    if (rub<10) {
      hour.innerHTML="0"+rub;
    }
    else{
        hour.innerHTML=rub;
    }
    }
    if(rub>=10&&rub<12){
      time.innerHTML="12:00 场";
          nub=tody.getSeconds();
      nub=59-nub;
    if (nub<10) {
      second.innerHTML="0"+nub;
    }
    else{
        second.innerHTML=nub;
    }
    aub=tody.getMinutes();
    aub=59-aub;
    if (aub<10) {
      min.innerHTML="0"+aub;
    }
    else{
        min.innerHTML=aub;
    }
    rub=tody.getHours();
    rub=11-rub;
    if (rub<10) {
      hour.innerHTML="0"+rub;
    }
    else{
        hour.innerHTML=rub;
    }
    }
    else if(rub>=12&&rub<16){
     time.innerHTML="16:00 场";
         nub=tody.getSeconds();
      nub=59-nub;
    if (nub<10) {
      second.innerHTML="0"+nub;
    }
    else{
        second.innerHTML=nub;
    }
    aub=tody.getMinutes();
    aub=59-aub;
    if (aub<10) {
      min.innerHTML="0"+aub;
    }
    else{
        min.innerHTML=aub;
    }
    rub=tody.getHours();
    rub=15-rub;
    if (rub<10) {
      hour.innerHTML="0"+rub;
    }
    else{
        hour.innerHTML=rub;
    }
    }
    else if(rub>=16&&rub<18){
     time.innerHTML="18:00 场";
         nub=tody.getSeconds();
      nub=59-nub;
    if (nub<10) {
      second.innerHTML="0"+nub;
    }
    else{
        second.innerHTML=nub;
    }
    aub=tody.getMinutes();
    aub=59-aub;
    if (aub<10) {
      min.innerHTML="0"+aub;
    }
    else{
        min.innerHTML=aub;
    }
    rub=tody.getHours();
    rub=17-rub;
    if (rub<10) {
      hour.innerHTML="0"+rub;
    }
    else{
        hour.innerHTML=rub;
    }
    }
    else if(rub>=18&&rub<20){
     time.innerHTML="20:00 场";
         nub=tody.getSeconds();
      nub=59-nub;
    if (nub<10) {
      second.innerHTML="0"+nub;
    }
    else{
        second.innerHTML=nub;
    }
    aub=tody.getMinutes();
    aub=59-aub;
    if (aub<10) {
      min.innerHTML="0"+aub;
    }
    else{
        min.innerHTML=aub;
    }
    rub=tody.getHours();
    rub=19-rub;
    if (rub<10) {
      hour.innerHTML="0"+rub;
    }
    else{
        hour.innerHTML=rub;
    }
    }
    else if(rub>=20&&rub<22){
      time.innerHTML="22:00 场";
      nub=tody.getSeconds();
      nub=59-nub;
    if (nub<10) {
      second.innerHTML="0"+nub;
    }
    else{
        second.innerHTML=nub;
    }
    aub=tody.getMinutes();
    aub=59-aub;
    if (aub<10) {
      min.innerHTML="0"+aub;
    }
    else{
        min.innerHTML=aub;
    }
    rub=tody.getHours();
    rub=21-rub;
    if (rub<10) {
      hour.innerHTML="0"+rub;
    }
    else{
        hour.innerHTML=rub;
    }

    }
    else if(rub>=22&&rub<=23) {
     time.innerHTML="00:00 场";
         nub=tody.getSeconds();
      nub=59-nub;
    if (nub<10) {
      second.innerHTML="0"+nub;
    }
    else{
        second.innerHTML=nub;
    }
    aub=tody.getMinutes();
    aub=59-aub;
    if (aub<10) {
      min.innerHTML="0"+aub;
    }
    else{
        min.innerHTML=aub;
    }
    rub=tody.getHours();
    rub=23-rub;
    if (rub<10) {
      hour.innerHTML="0"+rub;
    }
    else{
        hour.innerHTML=rub;
    }
    }
   },1000)
   // 倒计时结束
}
