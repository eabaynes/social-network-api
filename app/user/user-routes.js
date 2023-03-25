// imports
import { Router } from 'express';
import userController from './controller.js';

// create a new router
const router = Router();

// routes

// create a new user
router.post('/', (req, res) => {
    // get the new user from the request body
    const newUser = req.body;

    // create the new user
    userController.create(newUser)
        .then(user => {
            // send the new user back to the client
            res.json(user);
        })
        .catch(err => {
            // send the error back to the client
            res.json(err);
        });
});

// get all users
router.get('/', (req, res) => {
    // get all users
    userController.getAll()
        .then(users => {
            // send the users back to the client
            res.json(users);
        })
        .catch(err => {
            // send the error back to the client
            res.json(err);
        });
});

// get a user by id
router.get('/:id', (req, res) => {
    // get the user id from the request params
    const userID = req.params.id;

    // get the user by id
    userController.getById(userID)
        .then(user => {
            // send the user back to the client
            res.json(user);
        })
        .catch(err => {
            // send the error back to the client
            res.json(err);
        });
});

// update a user by id
router.put('/:id', (req, res) => {
    // get the user id from the request params
    const userID = req.params.id;

    // get the updated user from the request body
    const updatedUser = req.body;

    // update the user
    userController.update(userID, updatedUser)
        .then(user => {
            // send the updated user back to the client
            res.json(user);
        })
        .catch(err => {
            // send the error back to the client
            res.json(err);
        });
});

// delete a user by id
router.delete('/:id', (req, res) => {
    // get the user id from the request params
    const userID = req.params.id;

    // delete the user
    userController.delete(userID)
        .then(user => {
            // send the deleted user back to the client
            res.json(user);
        })
        .catch(err => {
            // send the error back to the client
            res.json(err);
        });
});

// add a new friend to a user
router.post('/:id/friends/:friendId', (req, res) => {
    // get the user id from the request params
    const userID = req.params.id;

    // get the friend id from the request params
    const friendID = req.params.friendId;

    // add the friend to the user
    userController.addFriend(userID, friendID)
        .then(user => {
            // send the updated user back to the client
            res.json(user);
        })
        .catch(err => {
            // send the error back to the client
            res.json(err);
        });
});

// remove a friend from a user
router.delete('/:id/friends/:friendId', (req, res) => {
    // get the user id from the request params
    const userID = req.params.id;

    // get the friend id from the request params
    const friendID = req.params.friendId;

    // remove the friend from the user
    userController.removeFriend(userID, friendID)
        .then(user => {
            // send the updated user back to the client
            res.json(user);
        })
        .catch(err => {
            // send the error back to the client
            res.json(err);
        });
});

// get all friends of a user
router.get('/:id/friends', (req, res) => {
    // get the user id from the request params
    const userID = req.params.id;

    // get all friends of the user
    userController.getAllFriends(userID)
        .then(friends => {
            // send the friends back to the client
            res.json(friends);
        })
        .catch(err => {
            // send the error back to the client
            res.json(err);
        });
});

// export the router
export default router;