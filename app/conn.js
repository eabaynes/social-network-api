// database client and connection
// node connects to mongo here

import mongoose from 'mongoose';

// export the connection to the database
export default () => {
    mongoose.connect('mongodb://127.0.0.1:27017/social').then(() => {
        console.log('Connected to database');
    }).catch((err) => {
        console.log('Error connecting to database', err);
    });
};