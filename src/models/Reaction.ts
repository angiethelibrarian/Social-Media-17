import { Schema, Types, type Document } from 'mongoose';

const reactionSchema = new Schema({
   reactionId: {
     type: Schema.Types.ObjectId,
     default: () => new Types.ObjectId()
   },
   reactionBody: {
     type: String,
     required: true,
     maxlength: 280
   },
   username: {
     type: String,
     required: true
   },
   createdAt: {
     type: Date,
     default: Date.now,
     get: (timestamp:any) => dateFormat(timestamp)
   }
});

reactionSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;

});
export default reactionSchema;