# Comment utiliser l'application AIRTABLE comme backend avec Next.js

L'utilisation d'Airtable comme back peut être une solution très intéressante compte tenu des grandes possibilités offertes par cette application.


## Pour commencer

Démarrer le serveur en mode développement:

```bash
npm run dev
# or
yarn dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir le résultat.


## Template Airtable utilisé

Le template Airtable utilisé dans ce repository est: [Product catalog](https://www.airtable.com/templates/product-catalog-and-orders/expZvMLT9L6c4yeBX). Sélectionnez-le dans votre Workspace Airtable.


## Exploitation de l'API

Dans votre application Airtable, ouvrez la documentation API relative à votre Workspace utilisé.

Créer un fichier .env et renseignez les clés comme suit:
`
AIRTABLE_API_KEY=YOUR API KEY
AIRTABLE_BASE_ID=YOUR BASE ID
AIRTABLE_TABLE_NAME=Furniture
`
