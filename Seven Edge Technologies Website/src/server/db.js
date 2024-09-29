import { MongoClient } from "mongodb";
const uri = "mongodb://127.0.0.1:27017/";
// Create a new client and connect to MongoDB
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to the MongoDB client
    await client.connect();
    
    // Connect to the "term-project" database and access its "users" collection
    const database = client.db("EduForums");
    const usersCollection = database.collection("users");
    
    // Drop the "users" collection
    await usersCollection.drop();
    console.log("Users collection has been dropped.");

    await usersCollection.insertOne({ username: 'test', password: 'test' });

    
  } catch (err) {
    console.error("An error occurred:", err);
  } finally {
    // Close the MongoDB client connection
    await client.close();
  }
}

// Run the function
run().catch(console.dir);
