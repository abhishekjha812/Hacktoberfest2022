import { Box, makeStyles, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Edit, Delete } from "@material-ui/icons"
import { Link, useHistory } from 'react-router-dom'
import { getPost, deleteBlog } from '../../service/api'
import Comments from '../comments/Comments'
const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%",
        height: "50vh",
        objectFit: "cover"

    }
    ,
    container: {
        padding: "0 100px",
        [theme.breakpoints.down("md")]: {
            padding: 0
        }
        ,

    },
    icons: {
        float: "right",

    },

    icon: {
        margin: 5,
        border: "2px solid #545454",
        borderRadius: 10,

    },
    heading: {
        fontSize: 38,
        fontWeight: 600,
        textAlign: "center",
        margin: "50px 0px 10px 0px "

    },
    subheading: {
        color: "#878787",
        display: "flex",
        margin: "20px 0px ",
        [theme.breakpoints.down("md")]: {
            display: "block"
        }

    },
    link: {
        textDecoration: "none",
        color: "inherit"
    }
}))
const DetailVeiw = ({ match }) => {
    const history = useHistory()
    const classes = useStyles()
    const [post, setpost] = useState({})

    useEffect(() => {
        const fetchdata = async () => {
            let res = await getPost(match.params.id)
            console.log(res.data)
            setpost(res.data)
        }
        fetchdata()
    }, [])
    const handleDelete = async () => {
        await deleteBlog(post._id)
        history.push("/")
    }

    return (
        <Box className={classes.container}>
            <img className={classes.image} src={post.picture || url} alt=" banner " />
            <Box className={classes.icons} >
                <Delete onClick={() => handleDelete()} color="secondary" className={classes.icon} />
                <Link to={`/update/${post._id}`}> <Edit color="error" className={classes.icon} /></Link>
            </Box>
            <Typography className={classes.heading} >
                {post.title}
            </Typography>
            <Box className={classes.subheading}>
                <Link className={classes.link} to={`/?username=${post.username}`} >
                    <Typography>
                        Author : <strong>{post.username}</strong>
                    </Typography>
                </Link>
                <Typography style={{ marginLeft: "auto" }}>
                    Date : {new Date(post.createdDate).toDateString()}
                </Typography>
            </Box>
            <Typography>
                {post.description}
            </Typography>
            <Comments post={post} />
        </Box >
    )
}
export default DetailVeiw 
