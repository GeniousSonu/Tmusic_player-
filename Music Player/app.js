const music = new Audio('audio/1.mp3');
// music.play();

const songs = [
    {
        id: "1",
        songName: `Babam bam bam  <br> 
        <div class="subtitle">Paradox</div>`,
        poster: "img/1.jpg"
    },
    {
        id: "2",
        songName: `Besharam Rang  <br> 
        <div class="subtitle">Vishal and Shilpa</div>`,
        poster: "img/2.jpg"
    },
    {
        id: "3",
        songName: `Besharmi Ki Heights  <br> 
        <div class="subtitle"> Benny Dayal</div>`,
        poster: "img/3.jpg"
    },
    {
        id: "4",
        songName: `Bholi Si Surat  <br> 
        <div class="subtitle">Udit Naran</div>`,
        poster: "img/4.jpg"
    },
    {
        id: "5",
        songName: `chaleya Jawan <br> 
        <div class="subtitle">Arijit singh</div>`,
        poster: "img/5.jpg"
    },
    {
        id: "6",
        songName: `Coca Cola tu  <br> 
        <div class="subtitle">Toni kakkar</div>`,
        poster: "img/6.jpg"
    },
    {
        id: "7",
        songName: `Dhemme dhemme  <br> 
        <div class="subtitle">Toni kakkar</div>`,
        poster: "img/7.jpg"
    },
    {
        id: "8",
        songName: `Dhindhora baje re  <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/8.jpg"
    },
    {
        id: "9",
        songName: `Dil Dhadakne do  <br> 
        <div class="subtitle">Shankar Madhavan</div>`,
        poster: "img/9.jpg"
    },
    {
        id: "10",
        songName: `Halka Halka  <br> 
        <div class="subtitle">shilpa </div>`,
        poster: "img/10.jpg"
    },
    {
        id: "11",
        songName: `Ik junoon Ik dewangi <br> 
        <div class="subtitle">Benny Dayal</div>`,
        poster: "img/11.jpg"
    },
    {
        id: "12",
        songName: `Jhome Jo Pathaan  <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/12.jpg"
    },
    {
        id: "13",
        songName: `Kashmir Mai tu Kanyakumari  <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/13.jpg"
    },
    {
        id: "14",
        songName: `Main Nikla Gaddi Leke  <br> 
        <div class="subtitle">Udit Narayan</div>`,
        poster: "img/14.jpg"
    },
    {
        id: "15",
        songName: `Pyar hota kai bar hai  <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/15.jpg"
    },
    {
        id: "16",
        songName: `Senorita  <br> 
        <div class="subtitle">Hirittik,Farran </div>`,
        poster: "img/16.jpg"
    },
    {
        id: "17",
        songName: `Subhanallove  <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/17.jpg"
    },
    {
        id: "18",
        songName: `Tere Hawale  <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/18.jpg"
    },
    {
        id: "19",
        songName: `Tere pyar me  <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/19.jpg"
    },
    {
        id: "20",
        songName: `What Jumka  <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/20.jpg"
    }
]


Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

//Searching data start 
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const {id, songName, poster} = element;
    // console.log(songName);
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `
    <img src="${poster}" alt="">
                            <div class="content">
                                ${songName}
                            </div>
    `;
    search_results.appendChild(card);
});

// Filtering in Search bar 
let input = document .getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        const as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value)> -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }

        if (input.value == 0) {
            search_results.style.display = "none";
        } else {
            search_results.style.display = "";
        }
    }
})

//Search Data End
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');


masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();   
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})


const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = ()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `audio/${index}.mp3`;

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let{ songName } = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download',songName);
            // let{songName, poster } = elss;
            // poster_master_play.src = poster;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
});
// index++;
// console.log(index)



//      TIMING
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    // console.log(music_curr);
    // console.log(music_dur);
    
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    // console.log(min1);
    if (sec1 < 10) {
        sec1 - `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 - `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;


    // SEEK 
    let progressBar = parseInt((music_curr / music_dur)*100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;

});

// changes of seekbar (skipping some part of songs)
seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration / 100;
});

// volume
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

// volume bar sliding with changing icons
vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    // volume control 
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});


// Next or Previous
let back = document.getElementById('back');
let next = document.getElementById('next');
// Checking for counting of total songs
//index = Array.from(document.getElementsByClassName('songItem')).length;
// console.log(index);     

back.addEventListener('click',() => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
        // after the first song if we click on the previous button it will play the last song from the songlist .
    }
    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let{ songName } = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})

next.addEventListener('click',() => {
    index ++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        // after the first song if we click on the previous button it will play the last song from the songlist .
    }
    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let{ songName } = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
});





let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
})

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click',()=>{
    Artists_bx.scrollLeft += 330;
})
pop_art_left.addEventListener('click',()=>{
    Artists_bx.scrollLeft -= 330;
})

//Activation of Shuffle button
let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
    
        case"repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;

        case"random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break; 
    }
});


// Moving to next song after ending of a song
// By Next , Repeat , Random

const next_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index++;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els)=>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let{ songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download',songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

const repeat_music = () => {
    index;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els)=>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let{ songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download',songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

const random_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * songs.length)+1);
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els)=>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let{ songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download',songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
    }
});