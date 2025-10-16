// test-db-connection.ts
import "dotenv/config";
import * as path from "path";
import dotenv from "dotenv";
import mysql from "mysql2/promise";

// Explicitly load .env from this project folder
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

console.log("Loaded ENV:", {
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PORT: process.env.DB_PORT,
  DB_DATABASE: process.env.DB_DATABASE,
});

async function testConnection() {
  try {
    const conn = await mysql.createConnection({
      host: process.env.DB_HOST || "127.0.0.1",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_DATABASE || "",
      port: Number(process.env.DB_PORT || 3306), // default to 3306
      connectTimeout: 8000,
    });

    console.log("✅ Connected to MySQL successfully!");
    const [rows] = await conn.query("SELECT COUNT(*) AS total FROM members");
    console.log("Members table rows:", rows);
    await conn.end();
  } catch (err) {
    console.error("❌ Connection failed:");
    console.error(err);
  }
}

testConnection();
