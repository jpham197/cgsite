//autoplay
const myAudio = document.getElementById(`myAudio`);
setTimeout(() => {
    myAudio.play();
}, 500);

//volume adjust
const volume = document.getElementById(`volume`);
let flag = true;
volume.addEventListener('click', () => {
    if (flag == true) {
        flag = false;
        myAudio.pause();
        volume.innerHTML = `volume_off`;
    } else if (flag == false) {
        flag = true;
        myAudio.play();
        volume.innerHTML = `volume_up`;
    }
});

//countdonw
setInterval(() => {
    let end = new Date('August 18, 2018').getTime();
    let now = new Date().getTime();
    let distance = end-now;
    let seconds = Math.floor(distance/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let days = Math.floor(hours/24);
    
    let screenSeconds = seconds - minutes*60;
    let screenMinutes = minutes - hours*60;
    let screenHours = hours - days*24;

    let display = `${days}D ${screenHours}H ${screenMinutes}M ${screenSeconds}S`;

    document.getElementById(`timer`).innerHTML = display;
}, 1000);

