import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    l: { type: String },
    i: { imageUrl: { type: String } },
    y: { type: Number },
    rank: { type: Number },
    q: { type: String },
    isFavourite: { type: Boolean, default: true }
})

export default mongoose.model("Movie", MovieSchema)