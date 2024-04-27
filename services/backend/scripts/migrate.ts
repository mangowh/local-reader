import "dotenv/config";

import { drizzle } from "drizzle-orm/mysql2";
import { migrate } from "drizzle-orm/mysql2/migrator";
import * as mysql from "mysql2/promise";
import path from "path";
import { dbConfig, isDev } from "../src/config";

(async () => {
  const connection = await mysql.createConnection(dbConfig);
  const db = drizzle(connection, { logger: isDev });

  console.log("\nApplico migrazioni...\n");

  await migrate(db, { migrationsFolder: path.join(__dirname, "../drizzle") });

  console.log("\nMigrazioni applicate!\n");

  await connection.end();
})();
