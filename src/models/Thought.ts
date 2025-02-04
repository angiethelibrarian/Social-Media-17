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
  }, {
    toJSON: {
      virtuals: true,
    },
  });
  //Create a model called Thought
  const Thought = model('Thought', thoughtSchema);
  export default Thought;