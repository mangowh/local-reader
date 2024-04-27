import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import path from "path";
import { Pool } from "pg";
import { dbConfig, isDev } from "../src/config";

(async () => {
  const client = new Pool(dbConfig);
  const db = drizzle(client, { logger: isDev });

  console.log("\nApplico migrazioni...\n");

  await migrate(db, { migrationsFolder: path.join(__dirname, "../drizzle") });

  console.log("\nMigrazioni applicate!\n");

  await client.end();
})();
