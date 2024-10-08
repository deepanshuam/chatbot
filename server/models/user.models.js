// server/models/User.js
import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  service: String,
  action: String,
});

export default model('User', UserSchema);
