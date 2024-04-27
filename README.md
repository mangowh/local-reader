# Prova Tecnica Tambellini - Hastega

Requisiti:

- Docker
- docker-compose

## Avvio in modalità produzione

```
docker compose up -d
```

Dopo la procedura di build delle immagini Docker, l'applicativo sarà disponbile a http://127.0.0.1:8080

## Avvio in modalità sviluppo

```
docker compose -f docker-compose.yml -f docker-compose.development.yml up -d
```

In questa modalità, oltre a l'interfaccia web sarà disponibile:

- L'API GraphQL (e l'interfaccia web di Apollo GraphQL) su http://127.0.0.1:3000
- Il database PostegreSQL su http://127.0.0.1:5432

Inoltre saranno abilitati i log di debug del backend e del database

## Struttura di progetto

All'interno della cartella `services` sono posizionate le cartelle dedicate per i 2 servizi sviluppati (frontend e backend). Per dettagli fare riferimento alle cartelle dei singoli progetti.