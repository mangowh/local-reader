import "dotenv/config";

import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import path from "path";
import postgres from "postgres";
import { dbConfig, isDev } from "../src/config";

(async () => {
  const client = postgres({ ...dbConfig, max: 1 });
  const db = drizzle(client, { logger: isDev });

  console.log("\nApplico migrazioni...\n");

  await migrate(db, { migrationsFolder: path.join(__dirname, "../drizzle") });

  console.log("\nMigrazioni applicate!\n");

  await client.end();
})();
