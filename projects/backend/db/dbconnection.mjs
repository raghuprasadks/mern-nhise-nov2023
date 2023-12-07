import { MongoClient } from "mongodb";

const connectionString = "mongodb://127.0.0.1/27017";
const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("endtoend");

export default db;