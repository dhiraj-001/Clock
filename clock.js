setInterval(() => {
date = new Date();
hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();
hours12 = hours % 12;
hrotation = 30*hours + minutes/2 ;
mrotation = 6*minutes;
srotation = 6*seconds ;

document.querySelector(".showtime").innerHTML =` ${hours12}:${minutes}:${seconds}`;
document.querySelector(".hours").style.transform=`rotate(${hrotation}deg)`;
document.querySelector(".minute").style.transform=`rotate(${mrotation}deg)`;
document.querySelector(".second").style.transform= `rotate(${srotation}deg)`;
},1000)



