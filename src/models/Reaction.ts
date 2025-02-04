// Use the following to create a Model called Reaction should have reactionBody, String, Required, Trimmed, createdAt, Date, Default value is the current timestamp, virtuals should be true
const reactionSchema = new Schema({
    type: String,
    required: true,
    trim: true,
},
    createdAt: {
    type: Date,
    default: Date.now,
},
}, {
    toJSON: {
        virtuals: true,
  },
});
//Create a model called Reaction
const Reaction = model('Reaction', reactionSchema);
export default Reaction;
// Use the following to create a Model called Friend should have friendId, ObjectId, Required, Unique
import { Schema, model } from 'mongoose';
const friendSchema = new Schema({
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
},
});