const day=document.querySelector("#day");
const hour=document.querySelector("#hour");
const minute=document.querySelector("#minute");
const second=document.querySelector("#second");

function TimeCounter(){
    
const currentYear=new Date().getFullYear();
const newYear=new Date(`January 1 ${currentYear+1} 00:00:00`);
const currentTime= new Date();
const diff=newYear-currentTime;
let d=Math.floor((diff/1000/60/60/24));
let h=Math.floor((diff/1000/60/60)%24);
let m=Math.floor((diff/1000/60)%60);
let s=Math.floor((diff/1000)%60);
day.innerHTML=d<10?'0'+d:d;
hour.innerHTML=h<10?'0'+h:h;
minute.innerHTML=m<10?'0'+m:m;
second.innerHTML=s<10?'0'+s:s;

}

setInterval(TimeCounter,1000);