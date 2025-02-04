// Use the following to create a Model called User should have username, String, Unique, Required, Trimmed
import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
  },
  thoughts: [{
    type: Schema.Types.ObjectId,
    ref: 'Thought'
  }

  ],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
  ]
});
userSchema.virtual('friendCount').get(function () {
  return this.friends.length });
 
//Create a model called User
const User = model('User', userSchema);
export default User;




