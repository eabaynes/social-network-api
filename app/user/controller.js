// import user model
import User from './User.js';

// user controller methods
const userController = {
    // create a new user
    create(newUser) {
        return User.create(newUser);
    },
    // get all users
    getAll() {
        return User.find();
    },
    // get a user by id
    getById(id) {
        return User.findById(id);
    },
    // update a user by id
    update(userID, updatedUser) {
        return User.findByIdAndUpdate(
            { _id: userID },
            { $set: updatedUser },
            { new: true }
        );
    },
    // delete a user by id
    delete(userID) {
        return User.findByIdAndDelete(userID);
    },
    // add a friend to a user's friend list
    addFriend(userID, friendID) {
        return User.findByIdAndUpdate(
            { _id: userID },
            { $push: { friends: friendID } },
            { new: true }
        );
    },
    // remove a friend from a user's friend list
    removeFriend(userID, friendID) {
        return User.findByIdAndUpdate(
            { _id: userID },
            { $pull: { friends: friendID } },
            { new: true }
        );
    }
};

// export user controller
export default userController;