# 🎧 SONORA — Site de musique

## 1. C'est quoi SONORA ?

SONORA est un site de musique inspiré de Spotify. Il permet de découvrir des musiques selon différents styles grâce à des catégories et à une barre de recherche.

Le site possède un design moderne, un fond sombre et des boutons pour naviguer facilement entre les genres musicaux.

## 2. Quelles sont les fonctionnalités ?

- 🎤 **Rap** : découvrir des morceaux de rap.
- 🌸 **Anime** : retrouver des génériques connus, comme ceux de *Fairy Tail*, *Naruto*, *One Piece* et *Demon Slayer*.
- 💜 **K-pop** : découvrir des titres de groupes et d'artistes coréens.
- ⚡ **Moderne** : écouter des titres pop et contemporains.
- 🎻 **Classique** : découvrir des œuvres de compositeurs célèbres.
- 🔎 **Recherche** : chercher une musique, un artiste ou un anime.
- ▶️ **Bouton Écouter** : ouvrir YouTube pour retrouver le morceau.

## 3. De quoi ai-je besoin pour utiliser le site ?

Tu as besoin de :

- Un ordinateur ou un téléphone.
- Un navigateur comme Chrome, Firefox, Edge ou Safari.
- Une connexion Internet pour ouvrir les liens musicaux.

Aucune installation de logiciel spécial n'est nécessaire pour la version actuelle.

## 4. Comment lancer le site ?

1. Crée un dossier nommé `SONORA`.
2. Place les trois fichiers suivants dans ce dossier :
   - `index.html`
   - `style.css`
   - `script.js`
3. Ouvre le fichier `index.html` avec ton navigateur.
4. Clique sur une catégorie pour afficher les musiques correspondantes.
5. Clique sur **▶ Écouter** pour rechercher le morceau sur YouTube.

**Important :** les trois fichiers doivent rester dans le même dossier pour que le site fonctionne correctement.

## 5. À quoi servent les trois fichiers ?

### `index.html`
Il contient la structure de la page : les titres, les boutons, la barre de recherche et la liste des musiques.

### `style.css`
Il définit l'apparence du site : les couleurs, les tailles, les espacements, les cartes musicales et l'affichage sur téléphone.

### `script.js`
Il contient les données des musiques et le fonctionnement des catégories, de la recherche et des boutons d'écoute.

## 6. Comment ajouter une musique ?

Ouvre le fichier `script.js` et ajoute un nouvel objet dans le tableau `musiques`.

Exemple :

```javascript
{
  genre: "Anime",
  titre: "Snow Fairy",
  artiste: "FUNKIST — Fairy Tail",
  emoji: "🧚",
  recherche: "Fairy Tail opening 1 Snow Fairy FUNKIST"
}
```

Respecte la syntaxe JavaScript : les propriétés doivent être séparées par des virgules et le nouvel objet doit être placé à l'intérieur du tableau.

Tu peux modifier le genre, le titre, l'artiste, l'emoji et les mots utilisés pour la recherche YouTube.

## 7. Comment ajouter une nouvelle catégorie ?

Il faut effectuer deux modifications :

1. Dans `index.html`, ajouter un bouton avec un attribut `data-genre`, par exemple `data-genre="Jazz"`.
2. Dans `script.js`, ajouter des musiques dont la propriété `genre` vaut `"Jazz"`.

Le JavaScript utilise les attributs `data-genre` pour filtrer les titres.

## 8. Pourquoi une musique ne se lance-t-elle pas directement sur le site ?

Dans cette version, le bouton **Écouter** ouvre une recherche YouTube. Il ne lance pas directement un lecteur audio intégré.

La disponibilité des morceaux dépend de YouTube et des ayants droit. Une connexion Internet est nécessaire.

## 9. Est-ce que SONORA est Spotify ?

Non. SONORA est un projet indépendant inspiré des sites de streaming musical. Il ne fait pas partie de Spotify et n'est pas affilié à cette entreprise.

Le site actuel ne possède pas encore de compte utilisateur, de système de favoris, de playlists personnelles enregistrées ni de lecteur audio intégré.

## 10. Pourquoi le site ne fonctionne-t-il pas correctement ?

Voici quelques vérifications utiles :

- **Le design ne s'affiche pas :** vérifie que `style.css` se trouve à côté de `index.html` et que son nom est correct.
- **Les boutons ne fonctionnent pas :** vérifie que `script.js` se trouve dans le même dossier.
- **La recherche ne trouve rien :** vérifie l'orthographe du titre ou essaie un mot plus court.
- **YouTube ne s'ouvre pas :** vérifie ta connexion Internet ou les restrictions de ton navigateur.
- **Une musique est introuvable :** essaie d'autres mots de recherche ou le nom de l'artiste.

## 11. Quelles améliorations sont possibles ?

À l'avenir, SONORA pourrait intégrer :

- Un lecteur audio intégré.
- Des boutons lecture, pause et titre suivant.
- Des playlists personnalisées.
- Un système de favoris.
- Des pochettes d'albums.
- Une page dédiée aux génériques d'anime.
- Un mode clair et un mode sombre.
- Un système de comptes utilisateurs.

## 12. Technologies utilisées

- **HTML5** : structure du site.
- **CSS3** : design et mise en page adaptative.
- **JavaScript** : interactions et filtrage des musiques.
- **YouTube** : recherche des morceaux musicaux.

---

**Auteur :** à compléter  
**Projet :** SONORA  
**Version :** 1.0  
**Langue :** français

🎵 *SONORA — Ta musique, ton univers.*
