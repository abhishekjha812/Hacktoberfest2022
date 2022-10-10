import { Box, makeStyles, Typography } from "@material-ui/core"
const useStyles = makeStyles({
    container: {
        height: 350,
        margin: 10,
        border: "1px solid #D3C3ED",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        "& > *": {
            padding: "0 5 5 5 "
        },
        boxShadow: "5px 0px 12px black",
        transition: "all 2s"

    },
    image: {
        height: 150,
        width: "100%",
        objectFit: "cover",
        borderRadius: "10px 10px 0 0 "
    },
    text: {
        color: "#878787",
        fontSize: 12,
        wordBreak: "break-word",

    },
    heading: {
        fontSize: 18,
        fontWeight: 600

    }
    ,
    detail: {
        fontSize: 14,
        padding: "0px 50px",
        wordBreak: "break-word",
        textAlign: "center"
    }
})
const addElipsis = (string, len) => {
    return string.length > len ? string.substring(0, len) : string;

}
const Post = ({ post }) => {
    const classes = useStyles()
    const url = post.picture || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
    return (
        <Box className={classes.container}>
            <img className={classes.image} src={url} alt="wrapper" />
            <Typography className={classes.text}>
                {post.categories}
            </Typography>
            <Typography className={classes.heading}>
                {addElipsis(post.title, 20)}
            </Typography>

            <Typography className={classes.text}>
                Autor: {post.username}
            </Typography>
            <Typography className={classes.detail} >
                {addElipsis(post.description, 100)}
            </Typography>

        </Box>
    )
}
export default Post 
