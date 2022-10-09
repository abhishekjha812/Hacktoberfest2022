import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
    name: {
        type: String,
        

    },
    postId: {
        type: String,
        

    },
    date: {
        type: String,
      

    },
    comment: {
        type: String,
        required: true,
    },
})
const Comment = mongoose.model("comment", CommentSchema)
export default Comment 