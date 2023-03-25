// import various modules and dependencies
import express from 'express';


// declare the port
const port = 3000;

// create an instance of express
const app = express();

// use express json middleware
app.use(express.json());

// routes will go here

// export the app and listen on the port
export default () => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
}
