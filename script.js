function displayTime(){
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var dateTime=new Date();
    var date=dateTime.getDate();
    var mnt = month[dateTime.getMonth()];
    var year=dateTime.getFullYear();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');
    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }
    if(hrs==0){
        hrs=12;
    }
    if(hrs<10){
        hrs='0'+hrs;
    }
    if(min<10){
        min='0'+min;
    }
    if(sec<10){
        sec='0'+sec;
    }
    
    document.getElementById('date').innerHTML = date;
    document.getElementById('month').innerHTML =mnt;
    document.getElementById('year').innerHTML = year;
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);

function q(){
    alert("Welcome!");
}
function w(){
    document.body.style.backgroundImage="url(https://www.teahub.io/photos/full/358-3584284_purple-background-anime-space.jpg)"
   
}
    function e() {
        buttonId = document.getElementsByClassName("w");
        setTimeout(function() { document.getElementById("heading").textContent = "Hi,I am Som."; }, 5000);
      }