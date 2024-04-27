import "dotenv/config";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import cors from "cors";
import { buildSchema } from "drizzle-graphql";
import express from "express";
import { dbConfig, isDev } from "./config";
import * as dbSchema from "./db/schema";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const port = 3000;

const app = express();
app.use(express.json());

const main = async () => {
  const client = postgres(dbConfig);

  const db = drizzle(client, {
    schema: dbSchema,
    // mode: "default",
    logger: isDev,
  });

  const { schema } = buildSchema(db);

  if (isDev) {
    app.use(cors());
  }

  const server = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(server, { listen: { port } });

  console.log(`\nAPI GraphQL in ascolto su ${url}\n`);
};

main();
