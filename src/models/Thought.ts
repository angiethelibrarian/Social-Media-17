import { Schema, model } from 'mongoose';
import reactionSchema from './Reaction.js';


// Use the following to create a Model called Thought should have thoughtText, String, Required, Trimmed, createdAt, Date, Default value is the current timestamp, virtuals should be true
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [
        reactionSchema],          
});

// TODO: Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
});

//Create a model called Thought
const Thought = model('Thought', thoughtSchema);
export default Thought;