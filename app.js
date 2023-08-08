// All Variables......
let audioElement = new Audio("songs/1.mp3");
let songIndex = 0;
let masterPlay = document.getElementById('play');
let myProgressBar = document.getElementById('myProgressBar');
let timeframe = document.getElementById('timeframe')
let gif1 = document.getElementById('gif1')
let gif2 = document.getElementById('gif2')
let gif3 = document.getElementById('gif3')
let gif4 = document.getElementById('gif4')
let gif5 = document.getElementById('gif5')
let gif6 = document.getElementById('gif6')
let gif7 = document.getElementById('gif7')
let songsItems = Array.from(document.getElementsByClassName('songItem'));
let volume = document.getElementById('volume');
let sound = document.getElementById('sound');
let repeat = document.getElementById('repeat');
let masterSongName = document.getElementById('masterSongName');
let rep = 0;
let suffle = document.getElementById('suffle');
let suff = 0;
let old_volume = 0.5;
let old_time = 0;
let gif_index = 1;

// Songs list
let songs = [
    {songsName: "Warriyo-Mortals",flipPath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songsName: "Huma-Huma",flipPath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songsName: "Invincible-320k",flipPath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songsName: "My Heart",flipPath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songsName: "Heroes-Tonight",flipPath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songsName:"Salam-e-Ishq",flipPath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songsName: "Let me love you",flipPath:"songs/7.mp3", coverPath:"covers/7.jpg"},
]

// All Functionalities....

songsItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songsName")[0].innerText = songs[i].songsName;
    let audioelement = new Audio(`songs/${i}.mp3`);
    // element.getElementsByClassName("songlistplay")[0].innerText = `${Math.floor(audioElement.duration/60)}:${Math.floor(audioElement.duration)%60}`
})

// Play Audio
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        if(gif_index == 1){
            gif1.style.opacity=1;
        }
        else if(gif_index == 2){
            gif2.style.opacity=1;
        }
        else if(gif_index == 3){
            gif3.style.opacity=1;
        }
        else if(gif_index == 4){
            gif4.style.opacity=1;
        }
        else if(gif_index == 5){
            gif5.style.opacity=1;
        }
        else if(gif_index == 6){
            gif6.style.opacity=1;
        }
        else if(gif_index == 7){
            gif7.style.opacity=1;
        }
        songIndex += 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');


    } else if(audioElement.play){
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');

        if(gif_index == 1){
            gif1.style.opacity=0;
        }
        else if(gif_index == 2){
            gif2.style.opacity=0;
        }
        else if(gif_index == 3){
            gif3.style.opacity=0;
        }
        else if(gif_index == 4){
            gif4.style.opacity=0;
        }
        else if(gif_index == 5){
            gif5.style.opacity=0;
        }
        else if(gif_index == 6){
            gif6.style.opacity=0;
        }
        else if(gif_index == 7){
            gif7.style.opacity=0;
        }
    

    }
})


// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //Update Seek Bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
    if(audioElement.duration===null){
        audioElement.duration = 0
    }
    if(Math.floor(audioElement.currentTime)%60<10){
        timeframe.innerText = `${Math.floor(audioElement.currentTime/60)}:0${Math.floor(audioElement.currentTime)%60} / ${Math.floor(audioElement.duration/60)}:${Math.floor(audioElement.duration)%60}`;
    }
    else{
        timeframe.innerText = `${Math.floor(audioElement.currentTime/60)}:${Math.floor(audioElement.currentTime)%60} / ${Math.floor(audioElement.duration/60)}:${Math.floor(audioElement.duration)%60}`;
    }
    


    if(audioElement.currentTime == audioElement.duration){
        console.log('Playing Next Song')
        songIndex += 1;
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    }
});

// Progress Bar-----------------------
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
})



const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songsName;

        gif_index = songIndex;
        if(gif_index == 1){
            gif1.style.opacity=1;
            gif2.style.opacity = gif3.style.opacity = gif4.style.opacity = gif5.style.opacity = gif6.style.opacity = gif7.style.opacity = 0;

        }
        else if(gif_index == 2){
            gif2.style.opacity=1;
            gif3.style.opacity = gif1.style.opacity = gif4.style.opacity = gif5.style.opacity = gif6.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 3){
            gif3.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif4.style.opacity = gif5.style.opacity = gif6.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 4){
            gif4.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif3.style.opacity = gif5.style.opacity = gif6.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 5){
            gif5.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif4.style.opacity = gif3.style.opacity = gif6.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 6){
            gif6.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif4.style.opacity = gif5.style.opacity = gif3.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 7){
            gif7.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif4.style.opacity = gif5.style.opacity = gif6.style.opacity = gif3.style.opacity = 0;
        }
        masterSongName.innerText = songs[songIndex].songsName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })

    
})

//Next button
document.getElementById('next').addEventListener('click',()=>{
    if(rep==0){
        if(suff==0){
            if(songIndex>=7){
                songIndex = gif_index = 1;
            }else{
                songIndex += 1;
                gif_index +=1;
            }
        }
        else{
            songIndex = Math.floor(Math.random()*7) + 1;
            gif_index = songIndex;
        }
        
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songsName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        if(gif_index == 1){
            gif1.style.opacity=0;
        }
        else if(gif_index == 2){
            gif2.style.opacity=0;
        }
        else if(gif_index == 3){
            gif3.style.opacity=0;
        }
        else if(gif_index == 4){
            gif4.style.opacity=0;
        }
        else if(gif_index == 5){
            gif5.style.opacity=0;
        }
        else if(gif_index == 6){
            gif6.style.opacity=0;
        }
        else if(gif_index == 7){
            gif7.style.opacity=0;
        }
        masterPlay.classList.add('fa-pause-circle');
        if(gif_index == 1){
            gif1.style.opacity=1;
            gif2.style.opacity = gif3.style.opacity = gif4.style.opacity = gif5.style.opacity =
            gif6.style.opacity = gif7.style.opacity = 0;

        }
        else if(gif_index == 2){
            gif2.style.opacity=1;
            gif3.style.opacity = gif1.style.opacity = gif4.style.opacity = gif5.style.opacity =
            gif6.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 3){
            gif3.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif4.style.opacity = gif5.style.opacity =
            gif6.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 4){
            gif4.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif3.style.opacity = gif5.style.opacity =
            gif6.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 5){
            gif5.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif4.style.opacity = gif3.style.opacity =
            gif6.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 6){
            gif6.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif4.style.opacity = gif5.style.opacity =
            gif3.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 7){
            gif7.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif4.style.opacity = gif5.style.opacity =
            gif6.style.opacity = gif3.style.opacity = 0;
        }
    }
    else{
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songsName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        if(gif_index == 1){
            gif1.style.opacity=0;
        }
        else if(gif_index == 2){
            gif2.style.opacity=0;
        }
        else if(gif_index == 3){
            gif3.style.opacity=0;
        }
        else if(gif_index == 4){
            gif4.style.opacity=0;
        }
        else if(gif_index == 5){
            gif5.style.opacity=0;
        }
        else if(gif_index == 6){
            gif6.style.opacity=0;
        }
        else if(gif_index == 7){
            gif7.style.opacity=0;
        }
        masterPlay.classList.add('fa-pause-circle');
        if(gif_index == 1){
            gif1.style.opacity=1;
            gif2.style.opacity = gif3.style.opacity = gif4.style.opacity = gif5.style.opacity =
            gif6.style.opacity = gif7.style.opacity = 0;

        }
        else if(gif_index == 2){
            gif2.style.opacity=1;
            gif3.style.opacity = gif1.style.opacity = gif4.style.opacity = gif5.style.opacity =
            gif6.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 3){
            gif3.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif4.style.opacity = gif5.style.opacity =
            gif6.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 4){
            gif4.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif3.style.opacity = gif5.style.opacity =
            gif6.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 5){
            gif5.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif4.style.opacity = gif3.style.opacity =
            gif6.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 6){
            gif6.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif4.style.opacity = gif5.style.opacity =
            gif3.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 7){
            gif7.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif4.style.opacity = gif5.style.opacity =
            gif6.style.opacity = gif3.style.opacity = 0;
        }
    }
})

//Previous button
document.getElementById('previous').addEventListener('click',()=>{
    if(rep==0){
        if(suff==0){
            if(songIndex<=1){
                songIndex = 7;
                gif_index = 7;
            }else{
                songIndex -= 1;
                gif_index -=1;
            }
        }
        else{
            songIndex = Math.floor(Math.random()*7) + 1;
            gif_index = songIndex
        }
        
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songsName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        if(gif_index == 1){
            gif1.style.opacity=0;
        }
        else if(gif_index == 2){
            gif2.style.opacity=0;
        }
        else if(gif_index == 3){
            gif3.style.opacity=0;
        }
        else if(gif_index == 4){
            gif4.style.opacity=0;
        }
        else if(gif_index == 5){
            gif5.style.opacity=0;
        }
        else if(gif_index == 6){
            gif6.style.opacity=0;
        }
        else if(gif_index == 7){
            gif7.style.opacity=0;
        }
        masterPlay.classList.add('fa-pause-circle');
        if(gif_index == 1){
            gif1.style.opacity=1;
            gif2.style.opacity = gif3.style.opacity = gif4.style.opacity = gif5.style.opacity =
            gif6.style.opacity = gif7.style.opacity = 0;

        }
        else if(gif_index == 2){
            gif2.style.opacity=1;
            gif3.style.opacity = gif1.style.opacity = gif4.style.opacity = gif5.style.opacity =
            gif6.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 3){
            gif3.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif4.style.opacity = gif5.style.opacity =
            gif6.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 4){
            gif4.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif3.style.opacity = gif5.style.opacity =
            gif6.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 5){
            gif5.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif4.style.opacity = gif3.style.opacity =
            gif6.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 6){
            gif6.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif4.style.opacity = gif5.style.opacity =
            gif3.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 7){
            gif7.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif4.style.opacity = gif5.style.opacity =
            gif6.style.opacity = gif3.style.opacity = 0;
        }   
    }else{
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songsName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        if(gif_index == 1){
            gif1.style.opacity=0;
        }
        else if(gif_index == 2){
            gif2.style.opacity=0;
        }
        else if(gif_index == 3){
            gif3.style.opacity=0;
        }
        else if(gif_index == 4){
            gif4.style.opacity=0;
        }
        else if(gif_index == 5){
            gif5.style.opacity=0;
        }
        else if(gif_index == 6){
            gif6.style.opacity=0;
        }
        else if(gif_index == 7){
            gif7.style.opacity=0;
        }
        masterPlay.classList.add('fa-pause-circle');
        if(gif_index == 1){
            gif1.style.opacity=1;
            gif2.style.opacity = gif3.style.opacity = gif4.style.opacity = gif5.style.opacity =
            gif6.style.opacity = gif7.style.opacity = 0;

        }
        else if(gif_index == 2){
            gif2.style.opacity=1;
            gif3.style.opacity = gif1.style.opacity = gif4.style.opacity = gif5.style.opacity =
            gif6.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 3){
            gif3.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif4.style.opacity = gif5.style.opacity =
            gif6.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 4){
            gif4.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif3.style.opacity = gif5.style.opacity =
            gif6.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 5){
            gif5.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif4.style.opacity = gif3.style.opacity =
            gif6.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 6){
            gif6.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif4.style.opacity = gif5.style.opacity =
            gif3.style.opacity = gif7.style.opacity = 0;
        }
        else if(gif_index == 7){
            gif7.style.opacity=1;
            gif2.style.opacity = gif1.style.opacity = gif4.style.opacity = gif5.style.opacity =
            gif6.style.opacity = gif3.style.opacity = 0;
        }   
    }
})

//Volume control
volume.addEventListener('change',(e)=>{
     audioElement.volume = e.currentTarget.value/100;
     old_volume = audioElement.volume
})

//Repeat-UnRepeat
repeat.addEventListener('click',(e)=>{
    if(rep==0){
        rep = 1;
        console.log('Repeat on');
    }else{
        rep=0;
        console.log('Repeat off');
    }
})

//Mute-Unmute
sound.addEventListener('click',(e)=>{
    if(audioElement.volume){
        audioElement.volume = false;
        console.log('volume off');
        sound.classList.remove("fa-sharp&nbspfa-solid&nbspfa-volume-high");
        sound.classList.add('fa-sharp&nbspfa-solid&nbspfa-volume-xmark');
    }else if(!audioElement.volume){
        // audioElement.volume = true
        audioElement.volume = old_volume
        console.log('volume on')
        sound.classList.remove('fa-sharp&nbspfa-solid&nbspfa-volume-xmark');
        sound.classList.add('"fa-sharp&nbspfa-solid&nbspfa-volume-high"');
    }
})

// Suffle-Unsuffle
suffle.addEventListener('click',()=>{
    if(suff==0){
        suff=1;
        console.log('Suffle On');
    }
    else{
        suff = 0;
        console.log('Suffle Off');
    }
})

