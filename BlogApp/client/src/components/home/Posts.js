
import { Grid } from "@material-ui/core"
import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import Post from "./Post"
import { getAllPost } from "../../service/api"

const Posts = () => {
    const { search } = useLocation()
    useEffect(() => {
        const fetchdata = async () => {
            let data = await getAllPost(search)
            console.log(data)
            setposts(data)
        }
        fetchdata();
    }, [search])
    const [posts, setposts] = useState([])
    return (
        posts.map(post => (
            < Grid item lg={3} md={4} sm={6} xs={12} key={post._id} >
                <Link to={`/details/${post._id}`} style={{
                    textDecoration: "none", color: "inherit",
                }} >
                    <Post post={post} />
                </Link>
            </Grid >
        ))



    )
}
export default Posts;
