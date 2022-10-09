import express from "express"
import Post from "../schema/postSchema.js"
import Comment from "../schema/commentSchema.js"
import mongoose from "mongoose"
import grid from "gridfs-stream"
import upload from "../utils/Upload.js"
const router = express.Router();


router.post("/create", async (req, res) => {
    
    const post = await new Post(req.body);
    res.status(200).json("blog saved succesfully")
    post.save();
})
router.get("/posts", async (req, res) => {
    let username = req.query.username
    let category = req.query.category
    let posts;
    try {
        if (username) {
            posts = await Post.find({ username: username })
        }
        else if (category) {
            posts = await Post.find({ categories: category })
        }
        else {
            posts = await Post.find({})
        }

        res.status(200).json(posts)
    }
    catch (err) {
        console.log(err)
    }

})
router.get("/post/:id", async (req, res) => {
    try {
        let post = await Post.findById(req.params.id)
        res.status(200).json(post);
    }
    catch (err) {
        responce.status(500).json(err)
    }
})

router.post("/update/:id", async (req, res) => {
    try {
        await Post.findByIdAndUpdate(req.params.id, { $set: req.body })
        res.status(200).json("blog updated ")
    }
    catch (err) {
        res.status(500).json(err)
    }

})
router.delete("/delete/:id", async (req, res) => {
    try {
        let post = await Post.findById(req.params.id)
        await post.delete()
        res.status(200).json("blog deleted ")
    }
    catch (err) {
        res.status(500).json(err)
    }

})
// iske neeche image ko db me daal ne ka kaam kiya hai 

const url = "http://localhost:8000"; 

let gfs;
const conn = mongoose.connection; 
conn.once('open', () => {
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});

router.post('/file/upload', upload.single('file'), (request, response) => {
    if (!request.file)
        return response.status(404).json("File not found");

    const imageUrl = `${url}/file/${request.file.filename}`;
    console.log(imageUrl)
    response.status(200).json(imageUrl);
})
 

router.get('/file/:filename', async (request, response) => {
    try {
        const file = await gfs.files.findOne({ filename: request.params.filename });
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(response); 
    } catch (error) {
        response.status(500).json(error);
    }
})
//iske neeche comments ka kaam kiya hai 


router.post("/comment/new", (req, res) => {
    try {
        const comment = new Comment(req.body)
        comment.save()
        res.status(200).json("commnet saved succesfully ")
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.get("/comments/:id", async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.id })
        res.status(200).json(comments)

    }
    catch (err) {
        res.status(500).json(err)
    }

})
router.delete("/comment/delete/:id", async (req, res) => {
    try {
        await Comment.findByIdAndDelete( req.params.id )

        res.status(200).json("comment delete succesfully ")

    }
    catch (err) {
        res.status(500).json(err)
    }

})

export default router  
//if you wanna have both folfer at one server 
  // "client-install":"cd client && npm install",
  // "client-build":"cd client && npm run build" ,
  // "heoku-postbuild" :"npm run client-install && npm run client-build"