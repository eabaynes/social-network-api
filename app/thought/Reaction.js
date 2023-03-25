// import dayjs to format date
import dayjs from 'dayjs';
import { Schema, model } from 'mongoose';

// create a schema for reactions
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: [true, 'Reaction body is required'],
            maxlength: [280, 'Reaction body must be less than 280 characters long']
        },
        username: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dayjs(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        }
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

// create the Reaction model using the ReactionSchema
export default reactionSchema;