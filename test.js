const albumCovers = [
  {
    title: "Channel Orange",
    artist: "Frank Ocean",
    image: "Covers/Channel-orange.jpg",
  },
  {
    title: "good kid, m.A.A.d city",
    artist: "Kendrick Lamar",
    image: "Covers/Gkmc.jpg",
  },
  { title: "Ye", artist: "Kanye West", image: "Covers/Ye.jpg" },
  {
    title: "The Slim Shady LP",
    artist: "Eminem",
    image: "Covers/slim-shady-lp.jpg",
  },
  {
    title: "I Lay Down My Life for You",
    artist: "JPEGMAFIA",
    image: "Covers/i-lay-down-my-life-for-you.jpg",
  },
  { title: "Circles", artist: "Mac Miller", image: "Covers/circles.jpg" },
  {
    title: "Madvillainy",
    artist: "Madvillain",
    image: "Covers/Madvillany.jpg",
  },
  {
    title: "Wish You Were Here",
    artist: "Pink Floyd",
    image: "Covers/wish-you-were-here.jpg",
  },
  {
    title: "Whole Lotta Red",
    artist: "Playboi Carti",
    image: "Covers/whole-lotta-red.jpg",
  },
  {
    title: "Call Me If You Get Lost",
    artist: "Tyler, The Creator",
    image: "Covers/call-me-if-you-get-lost.jpg",
  },
  { title: "Rodeo", artist: "Travis Scott", image: "Covers/rodeo.jpg" },
  {
    title: "At.Long.Last.A$AP",
    artist: "A$AP Rocky",
    image: "Covers/at-long-last-asap.jpg",
  },
  {
    title: "Heaven or Hell",
    artist: "Don Toliver",
    image: "Covers/heaven-or-hell.jpg",
  },
  {
    title: "Gemini Rights",
    artist: "Steve Lacy",
    image: "Covers/gemini-rights.jpg",
  },
  {
    title: "The Melodic Blue",
    artist: "Baby Keem",
    image: "Covers/the-melodic-blue.jpg",
  },
  {
    title: "House of Balloons",
    artist: "The Weeknd",
    image: "Covers/house-of-balloons.jpg",
  },
  { title: "Lahai", artist: "Sampha", image: "Covers/lahai.jpg" },
  { title: "Lonerism", artist: "Tame Impala", image: "Covers/lonerism.jpg" },
  {
    title: "Unorthodox Jukebox",
    artist: "Bruno Mars",
    image: "Covers/unorthodox-jukebox.jpg",
  },
  {
    title: "Ramona Park Broke My Heart",
    artist: "Vince Staples",
    image: "Covers/ramona-park-broke-my-heart.jpg",
  },
  { title: "Stankonia", artist: "Outkast", image: "Covers/stankonia.jpg" },
  {
    title: "Piñata",
    artist: "Freddie Gibbs & Madlib",
    image: "Covers/pinata.jpg",
  },
  {
    title: "Never Enough",
    artist: "Daniel Caesar",
    image: "Covers/never-enough.jpg",
  },
  {
    title: "The Forever Story",
    artist: "JID",
    image: "Covers/the-forever-story.jpg",
  },
  {
    title: "Saturation III",
    artist: "Brockhampton",
    image: "Covers/saturation-3.jpg",
  },
  { title: "TA13OO", artist: "Denzel Curry", image: "Covers/tatboo.jpg" },
  {
    title: "Salad Days",
    artist: "Mac DeMarco",
    image: "Covers/salad-days.jpg",
  },
  { title: "Malibu", artist: "Anderson .Paak", image: "Covers/malibu.jpg" },
  {
    title: "FutureSex/LoveSounds",
    artist: "Justin Timberlake",
    image: "Covers/futuresex-lovesounds.jpg",
  },
  { title: "Grace", artist: "Jeff Buckley", image: "Covers/grace.jpg" },
  {
    title: "Abbey Road",
    artist: "The Beatles",
    image: "Covers/abbey-road.jpg",
  },
  {
    title: "Atrocity Exhibition",
    artist: "Danny Brown",
    image: "Covers/atrocity-exhibition.jpg",
  },
  {
    title: "Wallsocket",
    artist: "underscores",
    image: "Covers/wallsocket.jpg",
  },
  {
    title: "Songs in the Key of Life",
    artist: "Stevie Wonder",
    image: "Covers/songs-in-the-key-of-life.jpg",
  },
  {
    title: "Reggatta de Blanc",
    artist: "The Police",
    image: "Covers/regata-de-blanc.jpg",
  },
  { title: "1999", artist: "Joey Bada$$", image: "Covers/prince-1999.jpg" },
  {
    title: "In the Court of the Crimson King",
    artist: "King Crimson",
    image: "Covers/crimson-king.jpg",
  },
  {
    title: "Led Zeppelin II",
    artist: "Led Zeppelin",
    image: "Covers/led-zepplin.jpg",
  },
  {
    title: "What's Going On",
    artist: "Marvin Gaye",
    image: "Covers/marvin-gaye.jpg",
  },
  {
    title: "Pet Sounds",
    artist: "The Beach Boys",
    image: "Covers/pet-sounds.jpg",
  },
  { title: "L.A. Woman", artist: "The Doors", image: "Covers/the doors.jpg" },
  {
    title: "Random Access Memories",
    artist: "Daft Punk",
    image: "Covers/random-access-memories.jpg",
  },
  { title: "Nectar", artist: "Joji", image: "Covers/nector.jpg" },
  {
    title: "I Didn't Mean to Haunt You",
    artist: "Quadeca",
    image: "Covers/i-didn't-meant-to-haunt-you.jpg",
  },
  { title: "Ctrl", artist: "SZA", image: "Covers/ctrl.jpg" },
  { title: "Redemption", artist: "Jay Rock", image: "Covers/redemption.jpg" },
  { title: "Psychodrama", artist: "Dave", image: "Covers/psychodrama.jpg" },
  { title: "Continuum", artist: "John Mayer", image: "Covers/continuum.jpg" },
  {
    title: "Never Mind the Bollocks",
    artist: "Sex Pistols",
    image: "Covers/never-mind-the-bullock-here-come's-the-sex-pistols.jpg",
  },
  {
    title: "Highway 61 Revisited",
    artist: "Bob Dylan",
    image: "Covers/highway-61-revisted.jpg",
  },
  {
    title: "Sticky Fingers",
    artist: "The Rolling Stones",
    image: "Covers/sticky-fingers.jpg",
  },
  {
    title: "Astral Weeks",
    artist: "Van Morrison",
    image: "Covers/astral-weeks.jpg",
  },
  {
    title: "Cosmo's Factory",
    artist: "CCR",
    image: "Covers/cosmo's-theory.jpg",
  },
];

const shells = document.querySelectorAll(".card-shell");
const flipButton = document.querySelector(".flip-button");
const middleCard = document.querySelector(".card-shell:nth-child(2)");

let seenAlbums = [];

function createCoverImage(album) {
  const image = document.createElement("img");
  image.src = album.image;
  image.alt = `${album.title} album cover`;
  return image;
}

function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getRandomAlbums(count) {
  if (seenAlbums.length + count > albumCovers.length) {
    seenAlbums = [];
  }

  const available = albumCovers.filter((a) => !seenAlbums.includes(a));
  const shuffled = shuffleArray(available);
  const picked = shuffled.slice(0, count);
  seenAlbums.push(...picked);
  return picked;
}

function loadAlbumsIntoCards(albums, face) {
  shells.forEach((shell, i) => {
    const faceEl = shell.querySelector(`.${face}`);
    faceEl.innerHTML = "";
    faceEl.appendChild(createCoverImage(albums[i]));
  });
}

shells.forEach((shell, index) => {
  const card = shell.querySelector(".card");

  if (index !== 1) {
    shell.addEventListener("mousedown", () => shell.classList.add("pressed"));
    shell.addEventListener("mouseup", () => shell.classList.remove("pressed"));
    shell.addEventListener("mouseleave", () =>
      shell.classList.remove("pressed"),
    );
  }

  card.addEventListener("transitionend", (event) => {
    if (event.propertyName === "transform") {
      shell.classList.remove("is-flipping");
    }
  });
});

let currentAlbums = getRandomAlbums(3);
loadAlbumsIntoCards(currentAlbums, "front");

let nextAlbums = getRandomAlbums(3);
loadAlbumsIntoCards(nextAlbums, "back");

flipButton.addEventListener("click", () => {
  shells.forEach((shell, i) => {
    setTimeout(() => {
      const card = shell.querySelector(".card");

      shell.classList.add("is-flipping");
      if (i !== 1) {
        shell.classList.add("pressed");
      }
      card.classList.toggle("flipped");
      if (i !== 1) {
        setTimeout(() => shell.classList.remove("pressed"), 175);
      }
    }, i * 150);
  });

  const lastCard = shells[shells.length - 1].querySelector(".card");
  lastCard.addEventListener(
    "transitionend",
    () => {
      const isFlipped = lastCard.classList.contains("flipped");
      if (isFlipped) {
        currentAlbums = nextAlbums;
        nextAlbums = getRandomAlbums(3);
        loadAlbumsIntoCards(nextAlbums, "front");
      } else {
        nextAlbums = getRandomAlbums(3);
        loadAlbumsIntoCards(nextAlbums, "back");
      }
    },
    { once: true },
  );
});

middleCard.addEventListener("click", () => {
  const isTilted = middleCard.classList.contains("tilted");
  middleCard.classList.toggle("tilted");

  if (isTilted) {
    middleCard.style.zIndex = "10";
    middleCard.addEventListener(
      "transitionend",
      () => {
        middleCard.style.zIndex = "";
      },
      { once: true },
    );
  }
});
