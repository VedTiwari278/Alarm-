
let audio=new Audio("audio.mp3");
audio.loop=true;
let alarmTime=null;
let alarmtimeout=null;

function updatetime(){
    let Now=new Date();
    let hr=formate(Now.getHours());
    let min=formate(Now.getMinutes());
    let sec=formate(Now.getSeconds());
    let display=document.getElementById('clock');
    display.innerText=(hr + ":" + min + ":" + sec);
}
function formate(time){
    if (time<10){
        return "0"+time;
    }
    
        return time;
}
setInterval(updatetime,1000);
function setalarmtime(value){
 alarmTime=value;
}
function setalarm(){
    if(alarmTime){
        const current=new Date();
        const timetoalarm=new Date(alarmTime);
        if(timetoalarm>current){
            const timeout=timetoalarm.getTime()-current.getTime();
            alarmtimeout=setTimeout(function(){
                audio.play();
            },timeout);
        }
    }
}


function clearalarm(){
    audio.pause();
    if(alarmtimeout){
        clearTimeout(alarmtimeout);
    }
}