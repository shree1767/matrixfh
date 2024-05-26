import dotenv from 'dotenv';
import process from 'process';

const res = dotenv.config();

const MONGO_URI = process.env.MONGO_URL;

const config = {
    mongo: {
        uri: MONGO_URI
    }
}

export default config;