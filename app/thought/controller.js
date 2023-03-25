// import user and thought models
import User from '../user/User.js';
import Thought from './Thoughts.js';

// create the thought controller methods
const thoughtController = {
    // create a new thought
    async create(userID, thoughtText) {
        const thought = await Thought.create({thoughtText});

        return User.findByIdAndUpdate(
            {_id: userID},
            {$push: {thoughts: thought._id}},
            {new: true, runValidators: true}
        );
    },
    // get all thoughts
    getAll() {
        return Thought.find();
    },
    // get a thought by id
    getById(thoughtID) {
        return Thought.findById(thoughtID);
    },
    // update a thought by id
    update(thoughtID, newThought) {
        return Thought.findByIdAndUpdate(
            {_id: thoughtID},
            {$set: newThought},
            {new: true, runValidators: true}
        );
    },
    // delete a thought by id
    delete(thoughtID) {
        return Thought.findByIdAndDelete(thoughtID);
    },
    // add a reaction to a thought
    addReaction(thoughtID, reactionBody) {
        return Thought.findByIdAndUpdate(
            {_id: thoughtID},
            {$push: {reactions: reactionBody}},
            {new: true, runValidators: true}
        );
    },
    // remove a reaction from a thought
    removeReaction(thoughtID, reactionID) {
        return Thought.findByIdAndUpdate(
            {_id: thoughtID},
            {$pull: {reactions: {reactionID}}},
            {new: true, runValidators: true}
        );
    }
};

// export the thought controller
export default thoughtController;