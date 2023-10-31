import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    email: {
      type: string,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'],
    },
  },
  { timestamps: true }
);

export default User = mongoose.model('User', userSchema);
