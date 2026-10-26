# AUDIT.md : à compléter

Pour chaque ligne, retrouve le problème correspondant dans `src/App.tsx` / `src/App.css`
et remplis les 3 colonnes. Il y a **6 problèmes volontaires** dans ce starter.

| # | Problème trouvé (où, quoi) | Principe WCAG (P / O / U / R) | Pourquoi c'est bloquant, et pour qui |
|---|------------------------------|-------------------------------|----------------------------------------|
| 1 |lien avec le même texte (cliquez ici)|Compréhensible|Car les liens doivent avoir des noms et un indicatio et pour les lecteur de d'écran qui navigue |
| 2 |<img src="/hero.jpg"> ne contient pas de alt |Perceptible |L'image ne peut pas être décris par un lecteur d'écran pour une personne aveugle par exemple elle ne peut pas être visible |
| 3 |h1 et directement suivi de h3 ,
sans utiliser de balise h2 |Robuste |Les balises des titres servent a naviguer sur le site le fait de ne pas utiliser de balise h2 et de passer directement a la h3 casse la naviguation |
| 4 |Le carousel qui s'affiche en permanance sans moyen de le fermer |Opérable |Le critère WCAG 2.2.2 dit que il doit normalement pouvoir être arréter ou enlever par l'utilisateur |
| 5 |<div className="see-more" onClick> a la place d'un button |Opérable |Avec le Tab on ne peut pas y accéder , on ne peut rien en faire c'est juste du texte brut pour un lecteur d'écran|
| 6 |Statut annulé ou publié porté uniquement par la couleur du point (dot-red/dot-green) |Perceptible |La couleur ne doit jamais être le seul moyen de transmettre une information |

> Rappel : P = Perceptible, O = Opérable, U = Utilisable (Compréhensible), R = Robuste.
