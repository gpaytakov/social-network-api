const { Schema, model, Types } = require("mongoose");

const UserSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      unique: true,
      required: "Username is required!",
      trim: true,
    },

    email: {
      type: String,
      unique: true,
      required: "Email is required!",
      match: [
        /^[a-zA-Z\d-_]+(\.[a-zA-Z\d-_]+)*@([a-zA-Z\d-]{2,12})(\.[a-zA-Z]{2,4})(\.[a-zA-Z]{2})*$/,
        "Please enter a valid e-mail address",
      ],
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;
