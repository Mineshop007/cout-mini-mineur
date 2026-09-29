# Coût électrique d'un mini mineur Bitcoin (français)

Calculateur gratuit : consommation annuelle et coût d'un mini mineur (Bitaxe Gamma, NerdQaxe++, Avalon Nano 3S ou autre puissance) selon l'option Base ou heures pleines / heures creuses, avec vos propres prix.

**En ligne :** https://mineshop007.github.io/cout-mini-mineur/

## Formules

- **Consommation (kWh/an)** = puissance (W) × heures par jour × 365 ÷ 1 000
- **Part en heures creuses** = heures creuses ÷ heures de fonctionnement (100 % si le mineur ne tourne qu'en heures creuses)
- **Coût HP/HC** = kWh × (part HC × prix HC + part HP × prix HP)

Exemple (test) : 140 W, 24 h/24 → 1 226,4 kWh/an ; uniquement 8 h creuses par jour → 408,8 kWh/an.

Les prix par défaut sont des valeurs d'exemple ; remplacez-les par ceux de votre contrat. Ce n'est pas un calcul de rentabilité : en solo, un mini mineur est un billet de loterie pour un bloc entier.

## Sources

- Tempo : [Légifrance, répartition des jours rouges, blancs et bleus](https://www.legifrance.gouv.fr/loda/article_lc/JORFARTI000033172626)
- Puissances : fiches produits [Mineshop — mini mineurs Bitcoin](https://mineshop.eu/fr/mini-bitcoin-miners)

## Tests

```
node test.js
```

Fourni par [Mineshop.eu](https://mineshop.eu/fr). Pas de cookies, pas d'analyse, aucune transmission des saisies.
