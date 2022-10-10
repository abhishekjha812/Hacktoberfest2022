import mongoose from "mongoose"
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    picture: {
        type: String,

    },
    username: {
        type: String, 
    },
    categories: {
        type: String,
    },
    createdDate: {
        type: Date,
    }
})
const Post = mongoose.model('post', PostSchema)
export default Post 