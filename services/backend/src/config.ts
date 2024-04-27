export const isDev = process.env.NODE_ENV === "development";

export const dbConfig = {
  host: process.env.DB_HOST,
  port: 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

/* export const dbConfig = {
  host: process.env.DB_HOST,
  port: 3306,

  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,

  database: process.env.DB_NAME,
} satisfies ConnectionOptions; */
