import { Router } from 'express';
import thoughtController from './controller.js';

// create a new router
const router = Router();

// routes

// get all thoughts
router.get('/', (req, res) => {
    // get all thoughts
    thoughtController.getAll()
        .then(thoughts => {
            // send the thoughts back to the client
            res.json(thoughts);
        })
        .catch(err => {
            // send the error back to the client
            res.json(err);
        });
});

// get a thought by id
router.get('/:id', (req, res) => {
    // get the thought id from the request params
    const thoughtID = req.params.id;

    // get the thought by id
    thoughtController.getById(thoughtID)
        .then(thought => {
            // send the thought back to the client
            res.json(thought);
        })
        .catch(err => {
            // send the error back to the client
            res.json(err);
        });
});

// create a new thought
router.post('/:userID', (req, res) => {
    // get the user id from the request params
    const userID = req.params.userID;

    // get the thought text from the request body
    const thoughtText = req.body.thoughtText;

    // create the new thought
    thoughtController.create(userID, thoughtText)
        .then(user => {
            // send the updated user back to the client
            res.json(user);
        })
        .catch(err => {
            // send the error back to the client
            res.json(err);
        });
});

// update a thought by id
router.put('/:id', (req, res) => {
    // get the thought id from the request params
    const thoughtID = req.params.id;

    // get the new thought from the request body
    const newThought = req.body;

    // update the thought
    thoughtController.update(thoughtID, newThought)
        .then(thought => {
            // send the updated thought back to the client
            res.json(thought);
        })
        .catch(err => {
            // send the error back to the client
            res.json(err);
        });
});

// delete a thought by id
router.delete('/:id', (req, res) => {
    // get the thought id from the request params
    const thoughtID = req.params.id;

    // delete the thought
    thoughtController.delete(thoughtID)
        .then(thought => {
            // send the deleted thought back to the client
            res.json(thought);
        })
        .catch(err => {
            // send the error back to the client
            res.json(err);
        });
});

// add a reaction to a thought
router.post('/:thoughtID/reactions', (req, res) => {
    // get the thought id from the request params
    const thoughtID = req.params.thoughtID;

    // get the reaction from the request body
    const reaction = req.body;

    // add the reaction to the thought
    thoughtController.addReaction(thoughtID, reaction)
        .then(thought => {
            // send the updated thought back to the client
            res.json(thought);
        })
        .catch(err => {
            // send the error back to the client
            res.json(err);
        });
});

// update a reaction by id
router.put('/:thoughtID/reactions/:reactionID', (req, res) => {
    // get the thought id from the request params
    const thoughtID = req.params.thoughtID;

    // get the reaction id from the request params
    const reactionID = req.params.reactionID;

    // get the new reaction from the request body
    const newReaction = req.body;

    // update the reaction
    thoughtController.updateReaction(thoughtID, reactionID, newReaction)
        .then(thought => {
            // send the updated thought back to the client
            res.json(thought);
        })
        .catch(err => {
            // send the error back to the client
            res.json(err);
        });
});

// delete a reaction by id
router.delete('/:thoughtID/reactions/:reactionID', (req, res) => {
    // get the thought id from the request params
    const thoughtID = req.params.thoughtID;

    // get the reaction id from the request params
    const reactionID = req.params.reactionID;

    // delete the reaction
    thoughtController.deleteReaction(thoughtID, reactionID)
        .then(thought => {
            // send the updated thought back to the client
            res.json(thought);
        })
        .catch(err => {
            // send the error back to the client
            res.json(err);
        });
});

// export the router
export default router;