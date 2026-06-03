const TWELVE_HOURS = 12 * 60 * 60 * 1000;

const STORAGE_KEYS = {
  albums: "selectedAlbums",
  albumRefresh: "lastAlbumRefresh",
  shortcuts: "shortcuts"
};

const albums = [
  {
    id: "abbey-road",
    title: "Abbey Road",
    image: "Covers/abbey-road.jpg",
    spotify: "https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN"
  },
  {
    id: "at-long-last-asap",
    title: "At. Long. Last. ASAP",
    image: "Covers/at-long-last-asap.jpg",
    spotify: "https://open.spotify.com/album/3arNdjotCvtiiLFfjKngMc"
  },
  {
    id: "atrocity-exhibition",
    title: "Atrocity Exhibition",
    image: "Covers/atrocity-exhibition.jpg",
    spotify: "https://open.spotify.com/album/3JSWZWeTHF4HDGt5Eozdy7"
  },
  {
    id: "call-me-if-you-get-lost",
    title: "Call Me If You Get Lost",
    image: "Covers/call-me-if-you-get-lost.jpg",
    spotify: "https://open.spotify.com/album/45ba6QAtNrdv6Ke4MFOKk9"
  },
  {
    id: "channel-orange",
    title: "Channel Orange",
    image: "Covers/Channel-orange.jpg",
    spotify: "https://open.spotify.com/album/392p3shh2jkxUxY2VHvlH8"
  },
  {
    id: "circles",
    title: "Circles",
    image: "Covers/circles.jpg",
    spotify: "https://open.spotify.com/album/5sY6UIQ32GqwMLAfSNEaXb"
  },
  {
    id: "crimson-king",
    title: "In the Court of the Crimson King",
    image: "Covers/crimson-king.jpg",
    spotify: "https://open.spotify.com/album/5wec5BciMpDMzlEFpYeHse"
  },
  {
    id: "futuresex-lovesounds",
    title: "FutureSex/LoveSounds",
    image: "Covers/futuresex-lovesounds.jpg",
    spotify: "https://open.spotify.com/album/3pO5OPh1VY8ogBaXsmrQ18"
  },
  {
    id: "gemini-rights",
    title: "Gemini Rights",
    image: "Covers/gemini-rights.jpg",
    spotify: "https://open.spotify.com/album/3Ks0eeH0GWpY4AU20D5HPD"
  },
  {
    id: "gkmc",
    title: "good kid, m.A.A.d city",
    image: "Covers/Gkmc.jpg",
    spotify: "https://open.spotify.com/album/748dZDqSZy6aPXKcI9H80u"
  },
  {
    id: "house-of-balloons",
    title: "House of Balloons",
    image: "Covers/house-of-balloons.jpg",
    spotify: "https://open.spotify.com/album/6wRev1uYL0JsMsWqktJuVi"
  },
  {
    id: "madvillainy",
    title: "Madvillainy",
    image: "Covers/Madvillany.jpg",
    spotify: "https://open.spotify.com/album/19bQiwEKhXUBJWY6oV3KZk"
  },
  {
    id: "malibu",
    title: "Malibu",
    image: "Covers/malibu.jpg",
    spotify: "https://open.spotify.com/album/4VFG1DOuTeDMBjBLZT7hCK"
  },
  {
    id: "pet-sounds",
    title: "Pet Sounds",
    image: "Covers/pet-sounds.jpg",
    spotify: "https://open.spotify.com/album/6GphKx2QAPRoVGWE9D7ou8"
  },
  {
    id: "pinata",
    title: "Pinata",
    image: "Covers/pinata.jpg",
    spotify: "https://open.spotify.com/album/43uErencdmuTRFZPG3zXL1"
  },
  {
    id: "rodeo",
    title: "Rodeo",
    image: "Covers/rodeo.jpg",
    spotify: "https://open.spotify.com/album/4PWBTB6NYSKQwfo79I3prg"
  },
  {
    id: "the-forever-story",
    title: "The Forever Story",
    image: "Covers/the-forever-story.jpg",
    spotify: "https://open.spotify.com/album/3QVjpIxcksDkJmOnvlOJjg"
  },
  {
    id: "wish-you-were-here",
    title: "Wish You Were Here",
    image: "Covers/wish-you-were-here.jpg",
    spotify: "https://open.spotify.com/album/0bCAjiUamIFqKJsekOYuRw"
  },
  {
    id: "ye",
    title: "Ye",
    image: "Covers/Ye.jpg",
    spotify: "https://open.spotify.com/album/2Ek1q2haOnjF9aX1QePE3k"
  }
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

function getRandomAlbums(count = 3) {
  return [...albums]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

function getAlbumsById(albumIds) {
  if (!Array.isArray(albumIds)) {
    return [];
  }

  return albumIds
    .map(id => albums.find(album => album.id === id))
    .filter(Boolean)
    .slice(0, 3);
}

function storeSelectedAlbums(selectedAlbums) {
  writeJSON(
    STORAGE_KEYS.albums,
    selectedAlbums.map(album => album.id)
  );

  localStorage.setItem(STORAGE_KEYS.albumRefresh, Date.now().toString());
}

function getCurrentAlbums() {
  const selectedAlbums = getAlbumsById(
    readJSON(STORAGE_KEYS.albums, [])
  );
  const lastRefresh = Number(localStorage.getItem(STORAGE_KEYS.albumRefresh));
  const refreshIsFresh = lastRefresh && Date.now() - lastRefresh < TWELVE_HOURS;

  if (selectedAlbums.length === 3 && refreshIsFresh) {
    return selectedAlbums;
  }

  const newAlbums = getRandomAlbums();
  storeSelectedAlbums(newAlbums);
  return newAlbums;
}

function renderAlbums(selectedAlbums) {
  albumsContainer.innerHTML = "";

  selectedAlbums.forEach(album => {
    const albumLink = document.createElement("a");
    const albumImage = document.createElement("img");

    albumLink.className = "album-link";
    albumLink.href = album.spotify;
    albumLink.target = "_blank";
    albumLink.rel = "noopener noreferrer";
    albumLink.title = album.title;

    albumImage.src = album.image;
    albumImage.alt = `${album.title} album cover`;
    albumImage.loading = "eager";

    albumLink.appendChild(albumImage);
    albumsContainer.appendChild(albumLink);
  });
}

function refreshAlbums({ force = false } = {}) {
  const selectedAlbums = force ? getRandomAlbums() : getCurrentAlbums();

  if (force) {
    storeSelectedAlbums(selectedAlbums);
  }

  renderAlbums(selectedAlbums);
}

refreshAlbums();

shuffleBtn.addEventListener("click", () => {
  refreshAlbums({ force: true });
});

document.addEventListener("keydown", event => {
  const isTyping = ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName);

  if (!isTyping && event.key.toLowerCase() === "r") {
    refreshAlbums({ force: true });
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
  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  return `https://${url}`;
}

function createShortcutElement(shortcut) {
  const shortcutElement = document.createElement("a");
  const iconElement = document.createElement("div");
  const titleElement = document.createElement("span");

  shortcutElement.className = "shortcut";
  shortcutElement.href = shortcut.url;
  shortcutElement.target = "_blank";
  shortcutElement.rel = "noopener noreferrer";

  iconElement.className = "shortcut-icon";
  iconElement.textContent = getShortcutInitial(shortcut.title);

  titleElement.textContent = shortcut.title;

  shortcutElement.append(iconElement, titleElement);
  return shortcutElement;
}

function renderShortcuts() {
  shortcutsGrid.innerHTML = "";
  getShortcuts().forEach(shortcut => {
    shortcutsGrid.appendChild(createShortcutElement(shortcut));
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
  const url = normalizeUrl(siteURLInput.value.trim());

  if (!title || !siteURLInput.value.trim()) {
    return;
  }

  const shortcuts = getShortcuts();
  shortcuts.push({ title, url });

  saveShortcuts(shortcuts);
  renderShortcuts();
  closeModal();
}

addShortcutBtn.addEventListener("click", openModal);
cancelShortcutBtn.addEventListener("click", closeModal);
saveShortcutBtn.addEventListener("click", saveShortcut);

modal.addEventListener("click", event => {
  if (event.target === modal) {
    closeModal();
  }
});

modal.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal();
  }

  if (event.key === "Enter") {
    saveShortcut();
  }
});
