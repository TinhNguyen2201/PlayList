// function background(){
//     var background = document.querySelector('.background');

//     background.style = `
//     width: 100%;
//     height: 100%;
//     background-image: url(images/ximiga.png);
//     /* transform: scale(1.1); */
//     background-repeat: no-repeat;
//     background-size: 100%;
//     filter: blur(10px);
//     z-index: 0;
//     position: absolute;`;
// }
// background();

const background = document.getElementById("background");
const pic = document.querySelector(".pic img");
const smallPics = document.querySelectorAll(".smallPic");

smallPics.forEach((smallPic) => {
  smallPic.addEventListener("click", function(event) {
    const src = event.currentTarget.getAttribute("data-src");
    background.style.backgroundImage = `url(${src})`;
    pic.src = src;
  });
});

const audio = document.getElementById("myAudio");
const playBtn = document.getElementById("playBtn");
const skipBtn = document.getElementById("skipBtn");
const muteBtn = document.getElementById("muteBtn");

playBtn.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    } else {
        audio.pause();
        playBtn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
});

skipBtn.addEventListener("click", function() {
    audio.currentTime += 10000;
});

muteBtn.addEventListener("click", function() {
    if (audio.muted) {
        audio.muted = false;
        muteBtn.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
    } else {
        audio.muted = true;
        muteBtn.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
    }
});

const toggleBtn = document.querySelector('.toggleBtn');
const containText = document.querySelector('.containText');
const containListMusic = document.querySelector('.containListMusic');

toggleBtn.addEventListener('click', function() {
  containText.style.display = containText.style.display === 'none' ? 'flex' : 'none';
  containListMusic.style.display = containListMusic.style.display === 'flex' ? 'none' : 'flex';
});

var musicIndex = 0;

var listMusic = [
  'GioJank.mp3',
  'RTSNPHCN.mp3',
  'LaAnh.mp3',
  'HenEmOLanYeuThu2.mp3',
  'AnhDaTuBoRoiDay.mp3',
  'KiaBongDangAi.mp3'
];


const boxMusics = document.querySelectorAll(".boxMusic");

boxMusics.forEach((boxMusic, index) => {

  boxMusic.addEventListener("click", function(event) {
    var title = event.currentTarget.querySelector("span").textContent;
    var containText = document.querySelector(".containText span");
    containText.textContent = title;
    musicIndex = index;
    document.querySelector('#myAudio').src = './audio/'+listMusic[musicIndex]; 
    for(var i = 0 ; i < boxMusics.length ; i++){
      boxMusics[i].style = 'opacity: 0.5;';
    }
    boxMusic.style = 'opacity: 1;';
  });

});

audio.addEventListener('play', function() {
  
  boxMusics.forEach((boxMusic, index) => {
  
    if(index == musicIndex){
      var title = boxMusic.querySelector("span").textContent;
      var containText = document.querySelector(".containText span");
      containText.textContent = title;
      musicIndex = index;
  
      for(var i = 0 ; i < boxMusics.length ; i++){
        boxMusics[i].style = 'opacity: 0.5;';
      }
      boxMusic.style = 'opacity: 1;';
  
    }
  
  });
  
  })

audio.addEventListener('ended', function() {
musicIndex++;
musicIndex > (listMusic.length - 1) ? musicIndex = 0 : musicIndex = musicIndex;
document.querySelector('#myAudio').src = './audio/'+listMusic[musicIndex];

boxMusics.forEach((boxMusic, index) => {

  if(index == musicIndex){
    var title = boxMusic.querySelector("span").textContent;
    var containText = document.querySelector(".containText span");
    containText.textContent = title;
    musicIndex = index;

    for(var i = 0 ; i < boxMusics.length ; i++){
      boxMusics[i].style = 'opacity: 0.5;';
    }
    boxMusic.style = 'opacity: 1;';

  }

});

})