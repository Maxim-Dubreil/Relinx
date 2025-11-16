# RELINX – Concept & Production v1.2

> Objectif de ce document : décrire la vision complète du jeu Relinx (produit final), au-delà du prototype v1.Le prototype v1 couvre uniquement **Logic – Daily minimal**.Ce document sert de **référence produit** pour les évolutions futures.

---

## 1. Présentation du jeu

### 1.1 Général

- **Nom** : Relinx
- **Type** : Jeu web casual intellectuel
- **Plateforme cible** : Web (desktop + mobile)
- **Durée de session** : 2–10 minutes

**Objectif central :**

Trouver le mot logique ou symbolique qui relie deux mots donnés.

**Exemple :**

> DENT + OR → COURONNE

---

### 1.2 Résumé

Relinx est un **jeu de réflexion accessible** qui stimule :

- la **logique** (associations rationnelles),
- la **créativité** (associations symboliques / poétiques),
- la **compétition légère** (classements, duels).

Le joueur voit **deux mots** et doit deviner **le mot lien** entre eux.

Plusieurs modes de jeu exploitent ce concept :

- 🧩 **Logic** — Trouver le mot exact ou le plus proche logiquement.
- 🎨 **Creative** — Proposer une connexion symbolique, poétique ou originale.
- ⚔️ **Duel** — Affronter un autre joueur en temps limité sur les mêmes énigmes.

Sous-modes transverses :

- **Daily** : 1 énigme quotidienne commune, avec streaks et classement.
- **Level / Libre** : séries d'énigmes aléatoires ou progression.

---

## 2. Structure globale du produit

### 2.1 Modes principaux

1. **Mode Logique**
   - Daily (énigme du jour, classement, streak)
   - Libre / Levels (progression continue ou aléatoire)
2. **Mode Créatif**
   - Daily (énigme du jour, scoring IA, réponses populaires)
   - Libre (génération aléatoire ou manuelle de mots, exploration créative)
3. **Mode Duel**
   - 1v1 asynchrone ou temps réel
   - Même série d'énigmes pour les deux joueurs
   - Gagnant = meilleur score sur la série

---

### 2.2 Sous-modes : Daily & Libre

- **Daily**
  - 1 énigme par jour et par mode.
  - Commune à tous les joueurs.
  - Liée à la progression (streak, stats, historique).
- **Libre / Level**
  - Sessions rejouables à volonté.
  - Énigmes aléatoires ou progression par niveaux.
  - Orienté entraînement et plaisir de jeu sans contrainte de temps.

---

## 3. HOME

### 3.1 Style & intention

- Interface **sobre** et **immersive**.
- Fond sombre, halo lumineux entre les deux mots.
- Accroche principale :
  > « Explore les liens cachés entre les mots. »
- Objectif : **immerger directement**, aucune friction.

### 3.2 Navigation principale

Boutons principaux (modes) :

- **Logique**
- **Créatif**
- **Duel**

Boutons secondaires :

- **Historique**
- Accès au **Profil** ou **Paramètres**

### 3.3 Éléments complémentaires

- Indicateur de **streak** (ex : « 6 jours consécutifs »).
- **Classement** du jour / global.
- Bouton **Partager** (score, lien du jour, duel).

> Note : Certains éléments (streak, classement, partage) arrivent après le prototype v1.

---

## 4. MODE LOGIQUE

### 4.1 Objectif

Proposer des énigmes où le joueur doit trouver le **mot le plus pertinent logiquement** pour relier deux mots.

Exemple :

> OR + DENT → COURONNE

---

### 4.2 Logic Daily — Gameplay

**But :** 1 énigme logique par jour, commune à tous.

**Écran :**

- Deux mots affichés en grand (ex : `OR · DENT`).
- Champ de saisie : « Propose un mot ».
- Bouton « Valider ».
- Barre / indicateur de **proximité** montrant la distance sémantique :
  - Rouge : éloigné
  - Jaune : approchant
  - Vert : proche ou exact

**Comportement :**

- Peu ou pas de limite d'essais pour éviter la frustration.
- À chaque tentative :
  - Indicateur de proximité (Froid / Tiède / Chaud / Brûlant).
  - Mise à jour de la **liste des essais** (ordre chronologique).
- En cas de réussite :
  - Message :
    > « Bravo ! Tu as trouvé le lien en X essais ! 🎉 »
  - Score (0–1000) basé sur :
    - Nombre d'essais,
    - Rapidité,
    - Distance moyenne des essais.

**Meta / Social (phase ultérieure) :**

- Affichage du **pourcentage de réussite global** :
  > « 42 % des joueurs ont trouvé aujourd'hui. »
- Classement du jour.
- Bouton : « Continuer en mode libre ».

---

### 4.3 Logic Libre — Gameplay

**But :** proposer des énigmes en continu, sans contrainte quotidienne.

- Interface similaire au Daily.
- Énigmes aléatoires ou progression par niveaux.
- Score **local** (par session ou cumul).
- Pas de classement global (ou secondaire).

> Note : La structure Logic Daily peut servir de base UX/tech à Logic Libre.

---

## 5. MODE CRÉATIF

### 5.1 Objectif

Encourager des réponses **symboliques, poétiques ou originales**, évaluées par une IA ou la communauté.

---

### 5.2 Creative Daily — Gameplay

**Écran :**

- Texte d'intro, ex :
  > « Aujourd'hui, inspire-toi : LUNE + MER »
- Champ de saisie :
  > « Ton idée, ton lien, ton intuition… »
- Bouton « Valider ».

**Évaluation (via IA) :**

- Score (0 à 1000).
- Catégorie :
  - Logique
  - Original
  - Poétique
- Feedback texte court, ex :
  > « Une belle image, pleine de douceur. »

**Meta :**

- Bouton : « Voir les autres mots populaires ».
- Affichage des réponses les plus aimées / votées.

---

### 5.3 Creative Libre — Gameplay

- Génération **aléatoire** ou **manuelle** de deux mots.
- Score personnel / local.
- Niveaux créatifs possibles :
  - « Explore 10 associations »
  - « Découvre 3 thèmes »

---

## 6. MODE DUEL

### 6.1 Mécanique

Mode compétitif basé sur les mêmes énigmes pour deux joueurs.

- 2 joueurs :
  - Via lien d'invitation (entre amis)
  - Ou via matchmaking aléatoire.
- Même **suite d'énigmes** pour les deux.
- Timer : ex. **90 secondes**.
- Feedback instantané sur chaque essai (proximité, comme en Logic).

### 6.2 Fin de partie

Exemple de résumé :

> Duel terminé !Mot : NEIGE + PLAGEMaxim : 820 pts ; Yannis : 760 pts → Gagnant : Maxim

Écran de fin :

- Résumé des scores.
- Boutons :
  - Revanche
  - Partager
  - Nouveau duel

Statistiques mises à jour (duels joués / gagnés).

---

## 7. PROGRESSION & PROFIL

### 7.1 Statistiques globales

Par joueur, on peut suivre :

- **Streak** (jours consécutifs avec participation au daily).
- **Score global logique** (ELO ou agrégat).
- **Score moyen créatif.**
- **Nombre de duels gagnés.**
- **Temps moyen de découverte** pour les daily.

### 7.2 Historique

Écran dédié :

- Liste de tous les **mots du daily** (Logique & Créatif).
- Pour chaque jour :
  - Duo de mots du jour,
  - Réponse du joueur,
  - Score obtenu,
  - Taux de réussite global,
  - Bouton **« Rejouer »** (mode entraînement ou replay).

---

## 8. SYSTÈMES D'ANCRAGE / RÉTENTION

### 8.1 Objectifs

- Créer un **rituel quotidien** (daily).
- Donner un sentiment de **progression**.
- Encourager le retour régulier sans générer de frustration.

### 8.2 Éléments clés

- 🔥 **Streak** : jours consécutifs de participation.
- 🧠 **Score global logique**.
- 🎨 **Moyenne créative**.
- ⚔️ **Victoires en duel**.
- 🏅 **Badges & titres** (ex : Curieux, Stratège, Visionnaire).
- 🔔 **Notifications quotidiennes** (web push / email) :
  - « Ton lien du jour est prêt 🧩 »
- 📜 **Historique** : accès aux anciens puzzles.

### 8.3 Streaks & feedback visuel

- Streak visible sur la Home.
- Animations : flamme / halo progressif pour chaque jour validé.
- Feedback positif, jamais culpabilisant.

---

## 9. IDENTITÉ & UNIVERS

### 9.1 Ambiance

- **Intelligente**, calme, légèrement **mystique**.
- Sensation de laboratoire / temple de la pensée.

### 9.2 Palette

- Fond **noir** / **indigo**.
- Dégradés lumineux : **doré**, **cyan**, **violet**.
- Contrastes forts, lisibilité prioritaire.

### 9.3 Animations

- Subtiles :
  - Respiration légère des halos,
  - Fil lumineux entre les mots,
  - Feedback doux sur validation (vibration, légère expansion).

### 9.4 Son & feedback

- Pas de musique en boucle (éviter la fatigue).
- Sons discrets :
  - Chime,
  - Souffle,
  - Petites impulsions.

### 9.5 Ton du texte

- **Bienveillant**, valorisant, jamais agressif :

Exemples :

- « Tu touches juste. »
- « Une belle idée. »
- « Presque, continue. »
- « Tu t'en rapproches. »

---

## 10. Expérience joueur – Flows principaux

### 10.1 Logic Daily – Flow

1. Arrivée sur la page du jour → deux mots (ex : `OR · DENT`).
2. Saisie d'un mot → la barre de proximité s'anime (rouge/jaune/vert).
3. Feedback à chaque tentative :
   - Texte : « Assez proche / Froid / Chaud / Brûlant ».
4. Réussite :
   - Animation lumineuse,
   - Message de succès,
   - Score (0–1000) + taux de réussite global.
5. Fin :
   - Boutons « Partager ton score » / « Continuer en mode libre ».
   - Mise à jour du streak et du classement.

---

### 10.2 Creative Daily – Flow

1. Écran d'intro :

   > « Aujourd'hui, inspire-toi : LUNE + MER. »

2. Saisie libre du joueur (ex : « Écume »).
3. L'IA évalue la réponse :
   - Score (0–1000),
   - Type de lien : Logique / Original / Poétique,
   - Feedback personnalisé.
4. Fin :
   - Bouton « Voir les mots populaires »,
   - Affichage des réponses les plus votées ❤️.
5. Mise à jour du profil créatif (score moyen, contributions marquantes).

---

### 10.3 Duel – Flow

1. Lancement d'un duel :
   - Via lien d'invitation : `relinx.app/duel?id=abc123`
   - Ou matchmaking.
2. Les deux joueurs voient les mêmes mots.
3. Timer (ex : 90s) :
   - Essais successifs,
   - Feedback en temps réel.
4. Fin du duel :
   - Résumé des scores,
   - Gagnant affiché.
5. Écran de fin :
   - Revanche,
   - Partage,
   - Nouveau duel.
6. Stats de duel mises à jour (victoires, défaites, ratio).

---

## 11. Roadmap produit (vue macro)

> Phase 0 – Prototype v1 (en cours / **done**)
>
> - Logic Daily minimal :
>   - 1 énigme par jour
>   - liste d’essais
>   - indicateur de proximité
> - UI simple, pas de compte, pas de stats.

### Phase 1 – Logic Daily complet

- Ajout du score (0–1000)
- Classement du jour / global
- Streaks
- Historique des daily (logic)
- UI plus travaillée (thème de base)

### Phase 2 – Logic Libre

- Mode libre / niveaux
- Score logique global
- Achievements basiques

### Phase 3 – Mode Créatif

- Daily créatif avec IA
- Réponses populaires / votes
- Statistiques créatives

### Phase 4 – Mode Duel & Social

- Duels 1v1
- Invitations / matchmaking
- Classement duel
- Partage social plus poussé

---

> Ce document décrit la vision cible de Relinx.
>
> Le prototype v1 sert de **socle technique et UX** pour construire progressivement cette roadmap.
