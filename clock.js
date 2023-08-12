function showClock() {

  let hr = document.querySelector(".hr");
  let mn = document.querySelector(".mn");
  let sc = document.querySelector(".sc");

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();


  hr.style.transform = `rotate(${30*hours + minutes/2}deg)`;
  mn.style.transform = `rotate(${6*minutes}deg)`;
  sc.style.transform = `rotate(${6*seconds}deg)`;

  sound.play()
  sound.volume = 0;
  
}

// let sound = new Audio('tick.mp3');
// document.querySelector("#mute").addEventListener("click",()=>{
//     sound.volume = 0;
// })
// document.querySelector("#sound").addEventListener("click",()=>{
//     sound.volume = 1;
// })
setInterval(showClock, 1000);
