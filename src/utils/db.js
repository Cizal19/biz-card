import { MongoClient } from "mongodb";

let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    cachedClient = client;
    return client;
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
}

export async function disconnectFromDatabase() {
  if (!cachedClient) {
    return;
  }

  await cachedClient.close();
  cachedClient = null;
}
