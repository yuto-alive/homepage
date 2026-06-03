const albums = [
  {
    image: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg",
    spotify: "https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf"
  },

  {
    image: "https://upload.wikimedia.org/wikipedia/en/b/be/KendrickGKMC.jpg",
    spotify: "https://open.spotify.com/album/748dZDqSZy6aPXKcI9H80u"
  },

  {
    image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Travis_Scott_-_Rodeo.png",
    spotify: "https://open.spotify.com/album/4PWBTB6NYSKQwfo79I3prg"
  },

  {
    image: "https://upload.wikimedia.org/wikipedia/en/2/27/Call_Me_If_You_Get_Lost_album_cover.jpg",
    spotify: "https://open.spotify.com/album/45ba6QAtNrdv6Ke4MFOKk9"
  },

  {
    image: "https://upload.wikimedia.org/wikipedia/en/e/e8/Weeknd_-_House_of_Balloons.png",
    spotify: "https://open.spotify.com/album/6wRev1uYL0JsMsWqktJuVi"
  },

  {
    image: "https://upload.wikimedia.org/wikipedia/en/1/1f/Madvillainy_cover.png",
    spotify: "https://open.spotify.com/album/19bQiwEKhXUBJWY6oV3KZk"
  }
];

/* =========================
   ELEMENTS
========================= */

const albumsContainer =
  document.getElementById("albums");

const shuffleBtn =
  document.getElementById("shuffleBtn");

const shortcutsGrid =
  document.getElementById("shortcutsGrid");

const addShortcutBtn =
  document.getElementById("addShortcutBtn");

const modal =
  document.getElementById("modal");

const saveShortcutBtn =
  document.getElementById("saveShortcut");

const siteTitleInput =
  document.getElementById("siteTitle");

const siteURLInput =
  document.getElementById("siteURL");

/* =========================
   ALBUM SHUFFLE
========================= */

function shuffleAlbums() {

  albumsContainer.innerHTML = "";

  const shuffledAlbums =
    [...albums]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

  shuffledAlbums.forEach(album => {

    const img =
      document.createElement("img");

    img.src = album.image;

    img.alt = "Album Cover";

    img.addEventListener("click", () => {
      window.open(album.spotify, "_blank");
    });

    albumsContainer.appendChild(img);
  });
}

/* Initial render */

shuffleAlbums();

/* Shuffle button */

shuffleBtn.addEventListener(
  "click",
  shuffleAlbums
);

/* Keyboard shortcut */

document.addEventListener("keydown", event => {

  if (
    event.key.toLowerCase() === "r"
  ) {
    shuffleAlbums();
  }
});

/* =========================
   SHORTCUTS
========================= */

function getShortcuts() {

  const stored =
    localStorage.getItem("shortcuts");

  return stored
    ? JSON.parse(stored)
    : [];
}

function saveShortcuts(shortcuts) {

  localStorage.setItem(
    "shortcuts",
    JSON.stringify(shortcuts)
  );
}

function renderShortcuts() {

  shortcutsGrid.innerHTML = "";

  const shortcuts =
    getShortcuts();

  shortcuts.forEach(shortcut => {

    const shortcutElement =
      document.createElement("div");

    shortcutElement.classList.add(
      "shortcut"
    );

    shortcutElement.innerHTML = `
      <div class="shortcut-icon">
        🌐
      </div>

      <span>
        ${shortcut.title}
      </span>
    `;

    shortcutElement.addEventListener(
      "click",
      () => {
        window.open(
          shortcut.url,
          "_blank"
        );
      }
    );

    shortcutsGrid.appendChild(
      shortcutElement
    );
  });
}

/* Initial shortcuts render */

renderShortcuts();

/* =========================
   MODAL
========================= */

addShortcutBtn.addEventListener(
  "click",
  () => {
    modal.classList.remove("hidden");
  }
);

/* Close modal when clicking outside */

modal.addEventListener("click", event => {

  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});

/* =========================
   SAVE SHORTCUT
========================= */

saveShortcutBtn.addEventListener(
  "click",
  () => {

    const title =
      siteTitleInput.value.trim();

    const url =
      siteURLInput.value.trim();

    if (!title || !url) {
      return;
    }

    const shortcuts =
      getShortcuts();

    shortcuts.push({
      title,
      url
    });

    saveShortcuts(shortcuts);

    renderShortcuts();

    /* Reset inputs */

    siteTitleInput.value = "";
    siteURLInput.value = "";

    /* Close modal */

    modal.classList.add("hidden");
  }
);