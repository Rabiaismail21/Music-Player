// window.addEventListener('load', HomePage);

const song_List = [
  {
    id: 1,
    song: "Bad Guy",
    singer: "Billie Eilish",
    song_source: "./songList/bad guy.mp3",
    img: "https://images.unsplash.com/photo-1580428325880-a9ba19167bb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    song: "I will dance dance",
    singer: "Lady Gaga",
    song_source: "./songList/I will dance.mp3",
    img: "https://images.pexels.com/photos/2868441/pexels-photo-2868441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    song: "Look what you made me do",
    singer: "Taylor Swift",
    song_source: "./songList/look what you made me do.mp3",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 4,
    song: "Bones",
    singer: "Imagine dragons",
    song_source: "./songList/Bones.mp3",
    img: "https://images.pexels.com/photos/162389/lost-places-old-decay-ruin-162389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    song: "Blank space",
    singer: "Taylor Swift",
    song_source: "./songList/blank space.mp4",
    img: "https://images.pexels.com/photos/1759823/pexels-photo-1759823.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    song: "Rolling inthe deep",
    singer: "Adele",
    song_source: "./songList/Rolling in the deep.mp3",
    img: "https://images.pexels.com/photos/3041350/pexels-photo-3041350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

// variables to get html elem
let song_Img = document.getElementById("image");
let song_Name = document.querySelector(".song");
let singer_Name = document.querySelector(".singer");
let prev_Btn = document.querySelector(".prev-btn");
let next_Btn = document.querySelector(".next-btn");
let play_Btn = document.querySelector(".play-btn");
let play_Icon = document.getElementById("play");
let pause_Icon = document.getElementById("pause");
let musicPlayer = document.querySelector(".music-player");
let playBack = document.getElementById('play-back');
let shuffle_Icon = document.getElementById('shuffle');


let count = 0;
let audioPlay = new Audio(song_List[count].song_source);
let currentTime = 0;
isPlaying = false;

song_Img.src = song_List[count].img;
song_Name.innerText = song_List[count].song;
singer_Name.innerText = song_List[count].singer;

// to play next song
next_Btn.addEventListener("click", () => {
  count++;
  if (count >= song_List.length) {
    count = 0;
  }
  song_Img.src = song_List[count].img;
  song_Name.innerText = song_List[count].song;
  singer_Name.innerText = song_List[count].singer;
  play_Icon.style.display = "none";
  pause_Icon.style.display = "block";
  audioPlay.src = song_List[count].song_source;
  audioPlay.play();
  song_Img.classList.add("animate");
  document.querySelector(
    ".main"
  ).style.backgroundImage = `url(${song_List[count].img})`});

// to play previous song
prev_Btn.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = song_List.length;
  } else {
    song_Img.src = song_List[count].img;
    song_Name.innerText = song_List[count].song;
    singer_Name.innerText = song_List[count].singer;
    play_Icon.style.display = "none";
    pause_Icon.style.display = "block";
    audioPlay.src = song_List[count].song_source;
    audioPlay.play();
    song_Img.classList.add("animate");
    document.querySelector(
      ".main"
    ).style.backgroundImage = `url(${song_List[count].img})`;
  }
});

// to play song
function playSong() {
  play_Icon.style.display = "none";
  pause_Icon.style.display = "block";
  audioPlay.src = song_List[count].song_source;
  audioPlay.currentTime = currentTime;
  audioPlay.play();
  isPlaying = true;
  song_Img.classList.add("animate");
}

// to pause song
function pauseSong() {
  play_Icon.style.display = "block";
  pause_Icon.style.display = "none";
  currentTime = audioPlay.currentTime;
  audioPlay.pause();
  isPlaying = false;
  song_Img.classList.remove("animate");
}
play_Icon.addEventListener("click", playSong);
pause_Icon.addEventListener("click", pauseSong);

// to playback song
playBack.addEventListener('click', () => {
    audioPlay.currentTime = 0;
})

  
// to play shuffled song
const shuffledArray = () => {
    let len = Math.floor(Math.random() * song_List.length);
    console.log(len);
    count = len;
    song_Img.src = song_List[count].img;
    audioPlay.src = song_List[count].song_source;
    singer_Name.innerText = song_List[count].singer;
    song_Name.innerText = song_List[count].song;
    document.querySelector(
        ".main"
      ).style.backgroundImage = `url(${song_List[count].img})`;
    if(isPlaying){
        audioPlay.play();
    }
    else {
        audioPlay.pause();
    }
}
shuffle_Icon.addEventListener('click', shuffledArray);




