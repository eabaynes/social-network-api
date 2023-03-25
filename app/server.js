// import various modules and dependencies
import express from 'express';
import userRoutes from './user/user-routes.js';
import thoughtRoutes from './thought/thought-routes.js';


// declare the port
const port = 3000;

// create an instance of express
const app = express();

// use express json middleware
app.use(express.json());

// routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

// export the app and listen on the port
export default () => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
}
