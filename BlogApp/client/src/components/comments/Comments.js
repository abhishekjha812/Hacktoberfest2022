import { Box, Button, TextareaAutosize, makeStyles, Typography } from "@material-ui/core"
import { useState, useEffect } from "react"
import { newComment, getComments } from "../../service/api"
import Gossip from "./Gossip"
//component

const useStyles = makeStyles({
    component: {
        marginTop: 100,
        marginBottom: 50,
        display: "flex"
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: "50%"
    },
    textarea: {
        width: "100%",
        margin: "0px 10px "

    }
})
const initialValue = {
    name: "",
    postId: "",
    date: new Date(),
    comment: ""

}

const Comments = ({ post }) => {

    const classes = useStyles()
    const url = "http://static.thenounproject.com/png/12017-200.png"
    const [comment, setcomment] = useState(initialValue)
    const [allcomments, setallcomments] = useState([])
    const [toggle, setToggle] = useState(false)
    const [data, setdata] = useState()
    const handleChange = (e) => {
        setcomment({
            ...comment,
            name: post.username,
            postId: post._id,
            comment: e.target.value,
        })
    }
    const postComment = async () => {
        await newComment(comment);
        setToggle(prev => !prev)
        setdata("")


    }
    useEffect(() => {
        const getdata = async () => {
            let res = await getComments(post._id)
            console.log("hello this is res ffrom collemts ")
            setallcomments(res)
        }
        getdata();

    }, [post, toggle])
    return (
        <Box >

            <Box className={classes.component}>
                <img className={classes.image} src={url} alt="dp" />
                <TextareaAutosize name="comment" onChange={(e) => handleChange(e)} value={data} minRows={5} className={classes.textarea} />
                <Button onClick={() => postComment()} variant="contained" color="secondary" size="medium" >POST </Button>
            </Box>

            {
                allcomments && allcomments.map(i => {
                    return (
                        <Gossip gossip={i} setToggle={setToggle} />
                    )
                })
            }

        </Box >

    )
}
export default Comments