const { Schema, model, Types } = require("mongoose");

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "Thought is required!",
      validate: [
        ({ length }) => length <= 280,
        "Thought length should be 1-280 characters long!",
      ],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
