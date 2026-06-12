const TWELVE_HOURS = 12 * 60 * 60 * 1000;
const ALBUM_COUNT = 3;
const FLIP_DURATION = 850; // Matches CSS transition duration
const FLIP_STAGGER = 90;

const STORAGE_KEYS = {
  albums: "selectedAlbums",
  albumRefresh: "lastAlbumRefresh",
  shortcuts: "shortcuts",
};

const albums = [
  {
    id: "abbey-road",
    title: "Abbey Road",
    image: "Covers/abbey-road.jpg",
    spotify: "https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN",
  },
  {
    id: "at-long-last-asap",
    title: "At. Long. Last. ASAP",
    image: "Covers/at-long-last-asap.jpg",
    spotify: "https://open.spotify.com/album/3arNdjotCvtiiLFfjKngMc",
  },
  {
    id: "atrocity-exhibition",
    title: "Atrocity Exhibition",
    image: "Covers/atrocity-exhibition.jpg",
    spotify: "https://open.spotify.com/album/3JSWZWeTHF4HDGt5Eozdy7",
  },
  {
    id: "call-me-if-you-get-lost",
    title: "Call Me If You Get Lost",
    image: "Covers/call-me-if-you-get-lost.jpg",
    spotify: "https://open.spotify.com/album/45ba6QAtNrdv6Ke4MFOKk9",
  },
  {
    id: "channel-orange",
    title: "Channel Orange",
    image: "Covers/Channel-orange.jpg",
    spotify: "https://open.spotify.com/album/392p3shh2jkxUxY2VHvlH8",
  },
  {
    id: "circles",
    title: "Circles",
    image: "Covers/circles.jpg",
    spotify: "https://open.spotify.com/album/5sY6UIQ32GqwMLAfSNEaXb",
  },
  {
    id: "crimson-king",
    title: "In the Court of the Crimson King",
    image: "Covers/crimson-king.jpg",
    spotify: "https://open.spotify.com/album/5wec5BciMpDMzlEFpYeHse",
  },
  {
    id: "futuresex-lovesounds",
    title: "FutureSex/LoveSounds",
    image: "Covers/futuresex-lovesounds.jpg",
    spotify: "https://open.spotify.com/album/3pO5OPh1VY8ogBaXsmrQ18",
  },
  {
    id: "gemini-rights",
    title: "Gemini Rights",
    image: "Covers/gemini-rights.jpg",
    spotify: "https://open.spotify.com/album/3Ks0eeH0GWpY4AU20D5HPD",
  },
  {
    id: "grace",
    title: "Grace",
    image: "Covers/grace.jpg",
    spotify: "https://open.spotify.com/search/Grace%20Jeff%20Buckley",
  },
  {
    id: "gkmc",
    title: "good kid, m.A.A.d city",
    image: "Covers/Gkmc.jpg",
    spotify: "https://open.spotify.com/album/748dZDqSZy6aPXKcI9H80u",
  },
  {
    id: "heaven-or-hell",
    title: "Heaven or Hell",
    image: "Covers/heaven-or-hell.jpg",
    spotify:
      "https://open.spotify.com/search/Heaven%20or%20Hell%20Don%20Toliver",
  },
  {
    id: "house-of-balloons",
    title: "House of Balloons",
    image: "Covers/house-of-balloons.jpg",
    spotify: "https://open.spotify.com/album/6wRev1uYL0JsMsWqktJuVi",
  },
  {
    id: "i-lay-down-my-life-for-you",
    title: "I Lay Down My Life for You",
    image: "Covers/i-lay-down-my-life-for-you.jpg",
    spotify:
      "https://open.spotify.com/search/I%20Lay%20Down%20My%20Life%20For%20You%20JPEGMAFIA",
  },
  {
    id: "lahai",
    title: "Lahai",
    image: "Covers/lahai.jpg",
    spotify: "https://open.spotify.com/search/Lahai%20Sampha",
  },
  {
    id: "led-zepplin",
    title: "Led Zeppelin",
    image: "Covers/led-zepplin.jpg",
    spotify: "https://open.spotify.com/search/Led%20Zeppelin%20album",
  },
  {
    id: "let-got-sort-em-out",
    title: "Let God Sort Em Out",
    image: "Covers/let-got-sort-em-out.jpg",
    spotify:
      "https://open.spotify.com/search/Let%20God%20Sort%20Em%20Out%20Clipse",
  },
  {
    id: "lonerism",
    title: "Lonerism",
    image: "Covers/lonerism.jpg",
    spotify: "https://open.spotify.com/search/Lonerism%20Tame%20Impala",
  },
  {
    id: "madvillainy",
    title: "Madvillainy",
    image: "Covers/Madvillany.jpg",
    spotify: "https://open.spotify.com/album/19bQiwEKhXUBJWY6oV3KZk",
  },
  {
    id: "malibu",
    title: "Malibu",
    image: "Covers/malibu.jpg",
    spotify: "https://open.spotify.com/album/4VFG1DOuTeDMBjBLZT7hCK",
  },
  {
    id: "marvin-gaye",
    title: "What's Going On",
    image: "Covers/marvin-gaye.jpg",
    spotify:
      "https://open.spotify.com/search/What's%20Going%20On%20Marvin%20Gaye",
  },
  {
    id: "never-enough",
    title: "Never Enough",
    image: "Covers/never-enough.jpg",
    spotify: "https://open.spotify.com/search/Never%20Enough%20Daniel%20Caesar",
  },
  {
    id: "pet-sounds",
    title: "Pet Sounds",
    image: "Covers/pet-sounds.jpg",
    spotify: "https://open.spotify.com/album/6GphKx2QAPRoVGWE9D7ou8",
  },
  {
    id: "pinata",
    title: "Pinata",
    image: "Covers/pinata.jpg",
    spotify: "https://open.spotify.com/album/43uErencdmuTRFZPG3zXL1",
  },
  {
    id: "prince-1999",
    title: "1999",
    image: "Covers/prince-1999.jpg",
    spotify: "https://open.spotify.com/search/1999%20Prince",
  },
  {
    id: "ramona-park-broke-my-heart",
    title: "Ramona Park Broke My Heart",
    image: "Covers/ramona-park-broke-my-heart.jpg",
    spotify:
      "https://open.spotify.com/search/Ramona%20Park%20Broke%20My%20Heart%20Vince%20Staples",
  },
  {
    id: "regata-de-blanc",
    title: "Reggatta de Blanc",
    image: "Covers/regata-de-blanc.jpg",
    spotify:
      "https://open.spotify.com/search/Reggatta%20de%20Blanc%20The%20Police",
  },
  {
    id: "rodeo",
    title: "Rodeo",
    image: "Covers/rodeo.jpg",
    spotify: "https://open.spotify.com/album/4PWBTB6NYSKQwfo79I3prg",
  },
  {
    id: "salad-days",
    title: "Salad Days",
    image: "Covers/salad-days.jpg",
    spotify: "https://open.spotify.com/search/Salad%20Days%20Mac%20DeMarco",
  },
  {
    id: "saturation-3",
    title: "Saturation III",
    image: "Covers/saturation-3.jpg",
    spotify: "https://open.spotify.com/search/Saturation%20III%20Brockhampton",
  },
  {
    id: "slim-shady-lp",
    title: "The Slim Shady LP",
    image: "Covers/slim-shady-lp.jpg",
    spotify: "https://open.spotify.com/search/The%20Slim%20Shady%20LP%20Eminem",
  },
  {
    id: "sonder-sons",
    title: "Sonder Son",
    image: "Covers/sonder-sons.jpg",
    spotify: "https://open.spotify.com/search/Sonder%20Son%20Brent%20Faiyaz",
  },
  {
    id: "songs-in-the-key-of-life",
    title: "Songs in the Key of Life",
    image: "Covers/songs-in-the-key-of-life.jpg",
    spotify:
      "https://open.spotify.com/search/Songs%20in%20the%20Key%20of%20Life%20Stevie%20Wonder",
  },
  {
    id: "stankonia",
    title: "Stankonia",
    image: "Covers/stankonia.jpg",
    spotify: "https://open.spotify.com/search/Stankonia%20Outkast",
  },
  {
    id: "tatboo",
    title: "Taboo",
    image: "Covers/tatboo.jpg",
    spotify: "https://open.spotify.com/search/TA13OO%20Denzel%20Curry",
  },
  {
    id: "the-doors",
    title: "The Doors",
    image: "Covers/the doors.jpg",
    spotify: "https://open.spotify.com/search/The%20Doors%20album",
  },
  {
    id: "the-forever-story",
    title: "The Forever Story",
    image: "Covers/the-forever-story.jpg",
    spotify: "https://open.spotify.com/album/3QVjpIxcksDkJmOnvlOJjg",
  },
  {
    id: "the-melodic-blue",
    title: "The Melodic Blue",
    image: "Covers/the-melodic-blue.jpg",
    spotify:
      "https://open.spotify.com/search/The%20Melodic%20Blue%20Baby%20Keem",
  },
  {
    id: "unorthodox-jukebox",
    title: "Unorthodox Jukebox",
    image: "Covers/unorthodox-jukebox.jpg",
    spotify:
      "https://open.spotify.com/search/Unorthodox%20Jukebox%20Bruno%20Mars",
  },
  {
    id: "wallsocket",
    title: "Wallsocket",
    image: "Covers/wallsocket.jpg",
    spotify: "https://open.spotify.com/search/Wallsocket%20underscores",
  },
  {
    id: "whole-lotta-red",
    title: "Whole Lotta Red",
    image: "Covers/whole-lotta-red.jpg",
    spotify:
      "https://open.spotify.com/search/Whole%20Lotta%20Red%20Playboi%20Carti",
  },
  {
    id: "wish-you-were-here",
    title: "Wish You Were Here",
    image: "Covers/wish-you-were-here.jpg",
    spotify: "https://open.spotify.com/album/0bCAjiUamIFqKJsekOYuRw",
  },
  {
    id: "ye",
    title: "Ye",
    image: "Covers/Ye.jpg",
    spotify: "https://open.spotify.com/album/2Ek1q2haOnjF9aX1QePE3k",
  },
];

/* =========================
   Elements
========================= */
const albumsContainer = document.getElementById("albums");
const shuffleBtn = document.getElementById("shuffleBtn");
const shortcutsGrid = document.getElementById("shortcutsGrid");
const addShortcutBtn = document.getElementById("addShortcutBtn");
const modal = document.getElementById("modal");
const saveShortcutBtn = document.getElementById("saveShortcut");
const cancelShortcutBtn = document.getElementById("cancelShortcut");
const siteTitleInput = document.getElementById("siteTitle");
const siteURLInput = document.getElementById("siteURL");

let currentAlbums = [];
let isAlbumAnimating = false;

/* =========================
   Storage helpers
========================= */
function readJSON(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/* =========================
   Album rotation
========================= */
function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    if (img.decode) {
      img.decode().then(resolve).catch(resolve);
    } else {
      img.onload = img.onerror = resolve;
    }
  });
}

function nextFrame() {
  return new Promise((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(resolve)),
  );
}

function getRandomAlbums(count = ALBUM_COUNT) {
  return [...albums].sort(() => Math.random() - 0.5).slice(0, count);
}

function getAlbumsById(albumIds) {
  if (!Array.isArray(albumIds)) return [];
  return albumIds
    .map((id) => albums.find((a) => a.id === id))
    .filter(Boolean)
    .slice(0, ALBUM_COUNT);
}

function storeSelectedAlbums(selectedAlbums) {
  writeJSON(
    STORAGE_KEYS.albums,
    selectedAlbums.map((a) => a.id),
  );
  localStorage.setItem(STORAGE_KEYS.albumRefresh, Date.now().toString());
}

function getCurrentAlbums() {
  const selectedAlbums = getAlbumsById(readJSON(STORAGE_KEYS.albums, []));
  const lastRefresh = Number(localStorage.getItem(STORAGE_KEYS.albumRefresh));
  const refreshIsFresh = lastRefresh && Date.now() - lastRefresh < TWELVE_HOURS;

  if (selectedAlbums.length === ALBUM_COUNT && refreshIsFresh) {
    return selectedAlbums;
  }

  const newAlbums = getRandomAlbums();
  storeSelectedAlbums(newAlbums);
  return newAlbums;
}

function createAlbumCard() {
  const albumLink = document.createElement("a");
  const albumWrapper = document.createElement("span");
  const frontImage = document.createElement("img");
  const backImage = document.createElement("img");

  albumLink.className = "album-link";
  albumLink.target = "_blank";
  albumLink.rel = "noopener noreferrer";

  albumWrapper.className = "album-wrapper";
  frontImage.className = "album-front";
  backImage.className = "album-back";

  albumWrapper.append(frontImage, backImage);
  albumLink.appendChild(albumWrapper);
  return albumLink;
}

function ensureAlbumCards() {
  while (albumsContainer.children.length < ALBUM_COUNT) {
    albumsContainer.appendChild(createAlbumCard());
  }
  while (albumsContainer.children.length > ALBUM_COUNT) {
    albumsContainer.lastElementChild.remove();
  }
  return [...albumsContainer.children];
}

function setAlbumCards(selectedAlbums) {
  ensureAlbumCards().forEach((albumCard, index) => {
    const album = selectedAlbums[index];
    albumCard.href = album.spotify;
    albumCard.title = album.title;

    const front = albumCard.querySelector(".album-front");
    const back = albumCard.querySelector(".album-back");
    front.src = album.image;
    front.alt = `${album.title} album cover`;
    back.src = album.image;
    back.alt = `${album.title} album cover`;
  });
  currentAlbums = selectedAlbums;
}

function setAlbumControlsDisabled(isDisabled) {
  isAlbumAnimating = isDisabled;
  shuffleBtn.disabled = isDisabled;
  shuffleBtn.setAttribute("aria-disabled", isDisabled.toString());
}
async function flipAlbumCard(albumCard, album) {
  // guard per-card to avoid re-entrancy
  if (albumCard.dataset.switching === "true") return;
  albumCard.dataset.switching = "true";

  await preloadImage(album.image);

  const wrapper = albumCard.querySelector(".album-wrapper");
  const front = albumCard.querySelector(".album-front");
  const back = albumCard.querySelector(".album-back");

  // put the new image on the back side (hidden initially)
  back.src = album.image;
  back.alt = `${album.title} album cover`;

  // Determine whether we're flipping to the back or back to front
  const willFlipToBack = !albumCard.classList.contains("is-switched");
  const animName = willFlipToBack ? "rotate" : "rotate-inverse";

  // start the appropriate keyframe animation on the wrapper
  wrapper.style.animation = `${animName} ${FLIP_DURATION}ms var(--flip-ease) both`;

  // reflect target state on the album card immediately (matches sample's toggle)
  albumCard.classList.toggle("is-switched", willFlipToBack);

  // halfway through the flip swap which face is active and update the front src
  await wait(FLIP_DURATION / 2);
  await nextFrame();
  await nextFrame();
  // swap the visible image on the front while the back is facing us
  front.src = album.image;
  front.alt = `${album.title} album cover`;

  // update link/title so it's correct at completion
  albumCard.href = album.spotify;
  albumCard.title = album.title;

  // wait for the animation remainder then clean up
  await wait(FLIP_DURATION / 2);
  wrapper.style.animation = "";
  delete albumCard.dataset.switching;
}

async function refreshAlbums({ force = false, animate = false } = {}) {
  if (isAlbumAnimating) return;

  const selectedAlbums = force ? getRandomAlbums() : getCurrentAlbums();

  if (force) storeSelectedAlbums(selectedAlbums);

  if (!animate || !currentAlbums.length) {
    setAlbumCards(selectedAlbums);
    return;
  }

  setAlbumControlsDisabled(true);
  try {
    const albumCards = ensureAlbumCards();
    const animations = albumCards.map((card, i) => {
      return wait(i * FLIP_STAGGER).then(() =>
        flipAlbumCard(card, selectedAlbums[i]),
      );
    });
    await Promise.all(animations);
    currentAlbums = selectedAlbums;
  } finally {
    setAlbumControlsDisabled(false);
  }
}

// Initial Run
refreshAlbums();

shuffleBtn.addEventListener("click", () => {
  refreshAlbums({ force: true, animate: true });
});

document.addEventListener("keydown", (event) => {
  const isTyping = ["INPUT", "TEXTAREA"].includes(
    document.activeElement.tagName,
  );
  if (!isTyping && !isAlbumAnimating && event.key.toLowerCase() === "r") {
    refreshAlbums({ force: true, animate: true });
  }
});

/* =========================
   Shortcuts
========================= */
function getShortcuts() {
  return readJSON(STORAGE_KEYS.shortcuts, []);
}

function saveShortcuts(shortcuts) {
  writeJSON(STORAGE_KEYS.shortcuts, shortcuts);
}

function getShortcutInitial(title) {
  return title.trim().charAt(0).toUpperCase() || "S";
}

function normalizeUrl(url) {
  if (/^https?:\/\//i.test(url)) return url;
  return `https://${url}`;
}

function deleteShortcut(index) {
  const shortcuts = getShortcuts();
  shortcuts.splice(index, 1);
  saveShortcuts(shortcuts);
  renderShortcuts();
}

function createShortcutElement(shortcut, index) {
  const shortcutElement = document.createElement("a");
  const iconElement = document.createElement("div");
  const titleElement = document.createElement("span");
  const deleteBtn = document.createElement("button");

  shortcutElement.className = "shortcut";
  shortcutElement.href = shortcut.url;
  shortcutElement.target = "_blank";
  shortcutElement.rel = "noopener noreferrer";

  iconElement.className = "shortcut-icon";
  iconElement.textContent = getShortcutInitial(shortcut.title);

  titleElement.textContent = shortcut.title;

  deleteBtn.className = "shortcut-delete-btn";
  deleteBtn.innerHTML = "&times;";
  deleteBtn.title = "Delete Shortcut";
  deleteBtn.type = "button";

  // Intercept events to prevent navigation when hitting delete button
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    deleteShortcut(index);
  });

  shortcutElement.append(iconElement, titleElement, deleteBtn);
  return shortcutElement;
}

function renderShortcuts() {
  shortcutsGrid.innerHTML = "";
  getShortcuts().forEach((shortcut, index) => {
    shortcutsGrid.appendChild(createShortcutElement(shortcut, index));
  });
}

renderShortcuts();

/* =========================
   Modal
========================= */
function openModal() {
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  siteTitleInput.focus();
}

function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  siteTitleInput.value = "";
  siteURLInput.value = "";
  addShortcutBtn.focus();
}

function saveShortcut() {
  const title = siteTitleInput.value.trim();
  const url = siteURLInput.value.trim();

  if (!title || !url) return;

  const shortcuts = getShortcuts();
  shortcuts.push({ title, url: normalizeUrl(url) });

  saveShortcuts(shortcuts);
  renderShortcuts();
  closeModal();
}

addShortcutBtn.addEventListener("click", openModal);
cancelShortcutBtn.addEventListener("click", closeModal);
saveShortcutBtn.addEventListener("click", saveShortcut);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

modal.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
  if (event.key === "Enter") saveShortcut();
});
