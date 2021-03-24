import { IUser } from "../interfaces/IUser";
import mongoose, { PaginateModel } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const User = new mongoose.Schema({
  walletId: {
    type: String,
    required: [true, "Please enter a walletId"],
    unique: true,
    index: true,
  },
  nonce: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  twitterName: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  nbFollowers: {
    type: Number,
    default: 0,
  },
  nbFollowing: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
});

User.plugin(mongoosePaginate);

const UserModel = mongoose.model<IUser & mongoose.Document>(
  "User",
  User
) as PaginateModel<IUser & mongoose.Document>;

export default UserModel;
