import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD; 

const Connection = () => {
    const DB_URI = `mongodb://arjun:arjunrai22@ac-2fkytwl-shard-00-00.nljeh70.mongodb.net:27017,ac-2fkytwl-shard-00-01.nljeh70.mongodb.net:27017,ac-2fkytwl-shard-00-02.nljeh70.mongodb.net:27017/?ssl=true&replicaSet=atlas-1r5mol-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        mongoose.set('strictQuery', false);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection;