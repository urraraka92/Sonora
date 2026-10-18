
const musiques = [
  // RAP
  {
    genre: "Rap",
    titre: "Bande organisée",
    artiste: "13'Organisé",
    emoji: "🔥",
    recherche: "13 Organisé Bande organisée clip officiel"
  },
  {
    genre: "Rap",
    titre: "Lose Yourself",
    artiste: "Eminem",
    emoji: "🎤",
    recherche: "Eminem Lose Yourself official"
  },

  // ANIME — FAIRY TAIL ET AUTRES GÉNÉRIQUES
  {
    genre: "Anime",
    titre: "Snow Fairy",
    artiste: "FUNKIST — Fairy Tail Opening 1",
    emoji: "🧚",
    recherche: "Fairy Tail opening 1 Snow Fairy FUNKIST"
  },
  {
    genre: "Anime",
    titre: "The Rock City Boy",
    artiste: "JAMIL — Fairy Tail Opening 7",
    emoji: "🎸",
    recherche: "Fairy Tail opening 7 The Rock City Boy"
  },
  {
    genre: "Anime",
    titre: "Masayume Chasing",
    artiste: "BoA — Fairy Tail Opening 15",
    emoji: "🌠",
    recherche: "Fairy Tail opening 15 Masayume Chasing BoA"
  },
  {
    genre: "Anime",
    titre: "Blue Bird",
    artiste: "Ikimono-gakari — Naruto",
    emoji: "🪽",
    recherche: "Naruto Shippuden Blue Bird official"
  },
  {
    genre: "Anime",
    titre: "We Are!",
    artiste: "Hiroshi Kitadani — One Piece",
    emoji: "🏴‍☠️",
    recherche: "One Piece opening We Are Hiroshi Kitadani"
  },
  {
    genre: "Anime",
    titre: "Gurenge",
    artiste: "LiSA — Demon Slayer",
    emoji: "🌺",
    recherche: "LiSA Gurenge Demon Slayer official"
  },
  {
    genre: "Anime",
    titre: "Cha-La Head-Cha-La",
    artiste: "Hironobu Kageyama — Dragon Ball Z",
    emoji: "🐉",
    recherche: "Dragon Ball Z Cha-La Head-Cha-La"
  },
  {
    genre: "Anime",
    titre: "Unravel",
    artiste: "TK — Tokyo Ghoul",
    emoji: "🕸️",
    recherche: "TK Unravel Tokyo Ghoul official"
  },
  {
    genre: "Anime",
    titre: "Silhouette",
    artiste: "KANA-BOON — Naruto Shippuden",
    emoji: "🍃",
    recherche: "KANA BOON Silhouette Naruto Shippuden"
  },
  {
    genre: "Anime",
    titre: "Kaikai Kitan",
    artiste: "Eve — Jujutsu Kaisen",
    emoji: "👁️",
    recherche: "Eve Kaikai Kitan official"
  },
  {
    genre: "Anime",
    titre: "Again",
    artiste: "YUI — Fullmetal Alchemist",
    emoji: "⚙️",
    recherche: "YUI Again Fullmetal Alchemist Brotherhood"
  },

  // K-POP
  {
    genre: "K-pop",
    titre: "Dynamite",
    artiste: "BTS",
    emoji: "💜",
    recherche: "BTS Dynamite official music video"
  },
  {
    genre: "K-pop",
    titre: "How You Like That",
    artiste: "BLACKPINK",
    emoji: "🖤",
    recherche: "BLACKPINK How You Like That official"
  },

  // MODERNE
  {
    genre: "Moderne",
    titre: "Blinding Lights",
    artiste: "The Weeknd",
    emoji: "🌃",
    recherche: "The Weeknd Blinding Lights official"
  },
  {
    genre: "Moderne",
    titre: "Flowers",
    artiste: "Miley Cyrus",
    emoji: "🌼",
    recherche: "Miley Cyrus Flowers official"
  },

  // CLASSIQUE
  {
    genre: "Classique",
    titre: "Clair de lune",
    artiste: "Claude Debussy",
    emoji: "🌙",
    recherche: "Debussy Clair de lune piano"
  },
  {
    genre: "Classique",
    titre: "Les Quatre Saisons",
    artiste: "Antonio Vivaldi",
    emoji: "🎻",
    recherche: "Vivaldi Four Seasons classical music"
  }
];

let genreActif = "Tous";

const zoneMusiques = document.querySelector("#tracks");
const recherche = document.querySelector("#search");
const titrePlaylist = document.querySelector("#playlist-title");

function afficherMusiques() {
  const mot = recherche.value.trim().toLowerCase();

  const resultats = musiques.filter(musique => {
    const bonGenre =
      genreActif === "Tous" || musique.genre === genreActif;

    const texte =
      `${musique.titre} ${musique.artiste} ${musique.genre}`
        .toLowerCase();

    return bonGenre && texte.includes(mot);
  });

  titrePlaylist.textContent =
    genreActif === "Tous"
      ? "À découvrir"
      : `Musique ${genreActif}`;

  if (resultats.length === 0) {
    zoneMusiques.innerHTML =
      '<p class="empty">Aucune musique trouvée.</p>';
    return;
  }

  zoneMusiques.innerHTML = resultats.map(musique => {
    const lien = "https://www.youtube.com/results?search_query=" +
      encodeURIComponent(musique.recherche);

    return `
      <article class="track">
        <div class="cover">${musique.emoji}</div>
        <h3>${musique.titre}</h3>
        <p>${musique.artiste}</p>
        <a
          class="play"
          href="${lien}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Écouter
        </a>
      </article>
    `;
  }).join("");
}

// Quand on clique sur une catégorie
document.querySelectorAll(".genre").forEach(bouton => {
  bouton.addEventListener("click", () => {
    genreActif = bouton.dataset.genre;

    document.querySelectorAll(".genre").forEach(element => {
      element.classList.toggle("active", element === bouton);
    });

    afficherMusiques();
  });
});

// Quand on recherche un titre
recherche.addEventListener("input", afficherMusiques);

// Affichage initial
afficherMusiques();
