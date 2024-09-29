import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import session from 'express-session';
import { MongoClient } from 'mongodb';

const app = express();
app.use(cors());
app.use(bodyParser.json());
const uri = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(uri);

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));


let db;
db = client.db('EduForums');
let count = 0;

  app.post('/student-signup', async (req, res) => {
    
    const { name, password, userType } = req.body;
    
    req.session.user = name;
    

    if (req.session && req.session.user && count >= 1) {
      return res.status(400).send({ error: 'A user is already logged in' });
    }

    const existingUser = await db.collection('users').findOne({ name });

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    //Inserts it into the users collection
    const insertResult = await db.collection('users').insertOne({ name, password, userType });
    count += 1;
  

    res.json({ success: true });
  });


  app.post('/login-student', async (req, res) => {

    const { name, password } = req.body;
    req.session.user = name;

    if (req.session && req.session.user && count >= 2) {
      return res.status(400).send({ error: 'A user is already logged in' });
    }

    // Find the user in the database
    const user = await db.collection('users').findOne({ name });
  
    if (!user) {
      // If the user does not exist, send an error message
      return res.status(400).json({error: 'User does not exist'});
    }
  
    // Check if the provided password matches the one in the database
    if (password !== user.password) {
      // If the passwords do not match, send an error message
      return res.status(400).send({error: 'Invalid password' });
    }
  
    // If everything is okay, send a success message
    res.json({ success:true });
  });
  
  
  app.post('/logout', (req, res) => {
    if (req.session) {
      req.session.destroy((err) => {
        if (err) {
          return res.status(500).send({ success: false, error: 'Could not log out.' });
        } else {
          count = 0;
          return res.status(200).send({ success: true });
        }
      });
    } else {
      return res.status(400).send({ success: false, error: 'No user is currently logged in' });
    }
  });
  
  

  app.listen(3000, () => {
    console.log("Server listening at http://localhost:3000");
  });

