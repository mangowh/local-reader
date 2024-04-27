# Backend

## Avvio in modalità produzione

```
npm run start
```

Il servizio sarà disponibile sulla porta 3000

## Avvio in modalità sviluppo

```
npm run dev
```

In questa modalità viene fatto anche il typecheck di Typescript

## Migrazioni e Seeding

Per generare le migrazioni a partire dalle entità definite nello `schema.ts`

```
npm run migration:generate
```

Per eseguire le migrazioni eseguire il comando

```
npm run migration:apply
```

Per popolare il database vuoto eseguire

```
npm run db:seed
```
