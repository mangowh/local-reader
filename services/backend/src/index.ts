import "dotenv/config";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import { buildSchema } from "drizzle-graphql";
import { drizzle } from "drizzle-orm/node-postgres";
import express from "express";
import { Pool } from "pg";
import { dbConfig, isDev } from "./config";
import * as dbSchema from "./db/schema";

const port = 3000;

const main = async () => {
  const client = new Pool(dbConfig);

  const db = drizzle(client, {
    schema: dbSchema,
    logger: isDev,
  });

  const { schema } = buildSchema(db);

  const app = express();
  app.use(express.json());

  if (isDev) {
    app.use(cors());
  }

  const server = new ApolloServer({ schema, introspection: true });

  await server.start();

  app.use(
    "/",
    (req, res, next) => {
      if (req.body?.query && typeof req.body.query === "string") {
        req.body.query = req.body.query.replace("__typename", "");
      }

      next();
    },
    expressMiddleware(server)
  );

  app.listen(port, "0.0.0.0", () => {
    console.log("Applicazione avviata sulla porta ", port);
  });
};

main();
