# Introduction

Le projet que j'ai réalisé est sur thème de Flesh N blood (un jeu de carte), l'objectif était de créer un affichage en faisant apparaitre des cartes en utilisant l'api de flesh  n blood (un json comprenant toutes les cartes et leurs caractéristiques).
Pour ce projet j'ai utilisé le framework symfony et je l'ai fait principalement en js.

# La maquette 
Pour la maquette du site , je suis parti sur un background noir avec 4 carte pour l'adversaire et 4 cartes pour l'utilisateur.

[![d6iA7DB.md.png](https://iili.io/d6iA7DB.md.png)](https://freeimage.host/i/d6iA7DB)


# HTML

Concernant le HTML , j'ai seulement placé les "div" avec des id pour le placement des carte, de la pioche et de la "zone de jeu". j'ai utilisé tailwind et css pour le style.

[![d6i5Mjp.md.png](https://iili.io/d6i5Mjp.md.png)](https://freeimage.host/i/d6i5Mjp)


# L'index du site 
L'index de la page se presente dans la meme idee que la maquette de depart , avec des cartes retourné pour la pioche. et les 8 cartes en jeu quis e generent aleatoirement à chaque rafrachissement de la page. 
[![d6iWLSp.md.png](https://iili.io/d6iWLSp.md.png)](https://freeimage.host/i/d6iWLSp)
[![d6iXnWu.md.png](https://iili.io/d6iXnWu.md.png)](https://freeimage.host/i/d6iXnWu)

[![d6iNcpp.md.png](https://iili.io/d6iNcpp.md.png)](https://freeimage.host/i/d6iNcpp)

#  JavaScript

Concernant le JS , j'ai d'abord importer les données de l'API flesh n blood avec une méthode fetch , j'ai push ces données dans un tableau un tableau initialement vide que j'ai nommé card, j'ai ensuite utilisé un for pour parcourir le tabelau json et afficher les image des cartes de maniere aléatoire avec une fonction (function getRandomItem). j'ai repeté le procédé pour les cartes de l'adversaire en changeant le nom des id.
[![d6ilILl.md.png](https://iili.io/d6ilILl.md.png)](https://freeimage.host/i/d6ilILl)


##  Le Responsive


sur les petits ecrans , une seul pioche est disponible (l'autre pioche est en hidden).

[![d6irq37.md.png](https://iili.io/d6irq37.md.png)](https://freeimage.host/i/d6irq37)
