// import dayjs to format date
import dayjs from 'dayjs';
import { Schema, model } from 'mongoose';
import reactionSchema from './Reaction.js';

// create a schema for thoughts
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: [1, 'Thought must be at least 1 character long'],
            maxlength: [280, 'Thought must be less than 280 characters long']
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dayjs(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        },
        username: {
            type: String,
            required: [true, 'Username is required']
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: { virtuals: true, getters: true },
        id: false,
        strict: "throw",
        versionKey: false,
        new: true,
        runValidators: true
    }
);

// create a virtual for total count of reactions on retrieval
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// create the Thought model using the ThoughtSchema
export default model('Thought', thoughtSchema);
