let song = document.querySelector(".song");
let toggler = document.querySelector(".toggler");
let progress = document.querySelector(".progress");
let duration = document.querySelector(".duration");
let full = document.querySelector('.full-time');

let img = document.querySelector(".img-holder img");
let songName = document.querySelector(".song-name");
let author = document.querySelector(".author");

let songs = [
    {
        name: "kiss the sky",
        source: "songs/kissTheSky.mp3",
        img: "songs/imgs/kissTheSky.jpg",
        author: "jason derullo",
    },
    {
        name: "memories",
        source: "songs/memories.mp3",
        img: "songs/imgs/memories.jpeg",
        author: "maroon 5",
    },
    {
        name: "robbery",
        source: "songs/robbery.mp3",
        img: "songs/imgs/robbery.jpeg",
        author: "juice WRLD",
    },
    {
        name: "the nights",
        source: "songs/theNights.mp3",
        img: "songs/imgs/theNights.jpg",
        author: "avici",
    },
    {
        name: "lucid dreams",
        source: "songs/lucidDreams.mp3",
        img: "songs/imgs/lucidDreams.jpg",
        author: "juice Wrld",
    },
    {
        name: "for my hand",
        source: "songs/forMyHand.mp3",
        img: "songs/imgs/forMyHand.jpg",
        author: "burna boy & ed sheeran",
    },
    {
        name: "let me down slowly",
        source: "songs/letMeDownSlowly.mp3",
        img: "songs/imgs/letMeDownSlowly.jpeg",
        author: "alec benjamin",
    },
    {
        name: "cruel summer",
        source: "songs/cruelSummer.mp3",
        img: "songs/imgs/cruelSummer.png",
        author: "taylor swift",
    },
    {
        name: "thunder",
        source: "songs/thunder.mp3",
        img: "songs/imgs/thunder.jpg",
        author: "imagine dragons",
    },
    {
        name: "pop out",
        source: "songs/popOut.mp3",
        img: "songs/imgs/popOut.png",
        author: "polo g",
    },
];

let index = 0;
function start(){
    songName.innerHTML = songs[index].name;
    author.innerHTML = songs[index].author;
    img.src = songs[index].img;
    song.src = songs[index].source;
    song.play();
    toggler.classList.remove("play");
    toggler.classList.add("stop");
    document.querySelector('.stopped').style.display = 'none';
    document.querySelector('.played').style.display = 'inline';
}
window.onload = () => {
    songName.innerHTML = songs[index].name;
    author.innerHTML = songs[index].author;
    img.src = songs[index].img;
    song.src = songs[index].source;
};

toggler.onclick = () => {
    if (toggler.classList.contains("play")) {
        song.play();
        toggler.classList.remove("play");
        toggler.classList.add("stop");
        document.querySelector('.stopped').style.display = 'none';
        document.querySelector('.played').style.display = 'inline';
    } else {
        song.pause();
        toggler.classList.add("play");
        toggler.classList.remove("stop");
        document.querySelector('.played').style.display = 'none';
        document.querySelector('.stopped').style.display = 'inline';
    }
};
function next(){
    if(index+1 == songs.length){
        index= 0;
    } else {
        index++;
    }
    start();
}
function prev(){
    if(index == 0){
        index = songs.length - 1;
    } else {
        index--;
    }
    start();
}

song.addEventListener("timeupdate", (e) => {
    let current =
        Math.floor(song.currentTime / 60) +
        ":" +
        Math.floor(song.currentTime % 60);
    let duration =
        Math.floor(song.duration / 60) + ":" + Math.floor(song.duration % 60);
    document.querySelector(".current").innerHTML =
        Math.floor(song.currentTime % 60) < 10
            ? Math.floor(song.currentTime / 60) +
              ":" +
              "0" +
              Math.floor(song.currentTime % 60)
            : current;
    
    
    if(!isNaN(song.duration)){
        full.innerHTML = 
        Math.floor(song.duration % 60) < 10
            ? Math.floor(song.duration / 60) +
              ":" +
              "0" +
              Math.floor(song.duration % 60)
            : duration;;
    }
    progress.style.width = (song.currentTime/song.duration) * 100 + '%';
    if (current == duration) {
        next()
    }
});


duration.addEventListener('click', (e) => {
    song.currentTime = ((e.offsetX * 100 / duration.clientWidth) / 100) * song.duration;
})