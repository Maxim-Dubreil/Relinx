# Relinx - prototype v1

## 1. Objectif

- 1 mot à trouver par jour (mot du jour)
- Aucun compte utilisateur
- Aucune stat, aucun streak
- Historique des essais :
  - liste des mots déjà essayés
  - affichage dans l’ordre des tentatives
  - indicateur de proximité (proche/loin) par rapport au mot du jour

> **Le but :** pouvoir aller sur le site, jouer la partie du jour, voir si on a réussi, et visualiser ses essais.

---

## 2. Flow utilisateur (v1)

1. L'utilisateur arrive sur la **home** (`/`).
2. Il voit un bouton **"PLAY"** (ou équivalent).
3. Il clique sur **"PLAY"** et accède à la page **Daily** (`/daily`).
4. Sur la page Daily :
   - Le jeu affiche **deux mots de référence** (mots d'indice / contexte du puzzle).
5. L'utilisateur saisit un **mot de réponse** dans un champ texte et valide.
6. Le jeu renvoie :
   - **Succès** : le mot saisi est le mot du jour.
   - **Échec** : le mot saisi est **ajouté à la liste des essais**.
7. En cas d'échec :

   - La liste des mots déjà essayés est affichée ou mise à jour.
   - Chaque mot essayé affiche un **indicateur de proximité** (ex : très proche / proche / loin / très loin) par rapport au mot du jour.

---

## 3. Règle du jeu (v1)

_fonctionnelles, sans détaille de l’algo_

- Tous les utilisateurs partagent le **même mot du jour**.
- L'utilisateur peut faire **autant d'essais qu'il veut** dans la journée.
- Chaque essai :
  - s'ajoute à la **liste des essais**
  - affiche un indicateur de **proximité** avec le mot du jour
- Le prototype ne gère pas :
  - le nombre maximum d'essais
  - le blocage après réussite
  - la sauvegarde des essais entre les jours (v1 reste « stateless » côté client)

---

## 4. Hors scope

_non géré dans la v1_

- **Comptes utilisateur** (login, profils, sauvegarde personnelle).
- **Stats** (historique de parties, winrate, graphes, etc.).
- **Streak** (séries de jours consécutifs).
- **Design avancé** :
  - pas de Figma complet
  - pas de système de thème complexe
  - _shadcn_ pour l’instant bloc simple
- **Mode de jeu supplémentaire** (autres que le daily).
  - Duel
  - Créatif
- **Sauvegarde côté serveur** des essais par utilisateur.

---

## 5. Critère de “prototype v1 OK”

Le prototype v1 est considéré **terminé** lorsque :

1. Le site est déployé (ex : Vercel) et accessible via une URL publique.
2. Un utilisateur peut :
   - arriver sur `/`
   - cliquer sur “PLAY”
   - voir la page Daily avec les deux mots affichés
   - saisir un mot, valider, et :
     - voir une réponse **succès/échec**
     - voir la liste de ses mots déjà essayés avec un indicateur de proximité
3. Le comportement est stable (pas d’erreur bloquante en usage normal).
