import "dotenv/config";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import cors from "cors";
import { buildSchema } from "drizzle-graphql";
import { drizzle } from "drizzle-orm/mysql2";
import express from "express";
import * as mysql from "mysql2/promise";
import { dbConfig, isDev } from "./config";
import * as dbSchema from "./db/schema";

const port = 3000;

const app = express();
app.use(express.json());

const main = async () => {
  const connectionPooler = await mysql.createPool(dbConfig);

  const db = drizzle(connectionPooler, {
    schema: dbSchema,
    mode: "default",
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
