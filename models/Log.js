import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  method: String,
  url: String,
  urlLastPart: String,
  date: { type: Date, default: Date.now },
});

const Log = mongoose.model('Log', logSchema);

export default Log;
