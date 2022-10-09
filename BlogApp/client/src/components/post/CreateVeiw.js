import { Box, makeStyles, FormControl, InputBase, Button, TextareaAutosize } from "@material-ui/core"
import { AddCircle } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { createPost, uploadFile } from "../../service/api";
import { useHistory } from "react-router-dom"
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

    }
    ,
    form: {
        display: "flex ",
        flexDirection: "row",
        margin: 5
    }
    ,
    textfield: {
        flex: 1,
        margin: "0 30px ",
        fontSize: 25
    },
    textarea: {
        width: "100%",
        marginTop: 50,
        border: "none",
        fontSize: 18,
        "&:focus-visible": {
            outLine: "none"
        }

    }

}))
const initialState = {
    title: "",
    description: "",
    picture: "",
    username: "Himanshu",
    categories: "All",
    createdDate: new Date()
}
const CreateVeiw = () => {
    const history = useHistory();
    const classes = useStyles();
    const [post, setpost] = useState(initialState)
    const [file, setfile] = useState("");
    const [img, setimg] = useState("")
    const url = post.picture ? post.picture : "https://source.unsplash.com/random/2560×1440/?computer,programming"

    useEffect(() => {
        const getImage = async () => {
            if (file) { 
                const data = new FormData();
                data.append("name", file.name)
                data.append("file", file);
                const image = await uploadFile(data)
                post.picture = image.data
                setimg(image.data)
            }
        }
        getImage();
    }, [file])
    const handleChange = (e) => {
        setpost({
            ...post, [e.target.name]: e.target.value,
        })
    }
    const savePost = async () => {
        console.log(post)
        
        await createPost(post);
        history.push("/") 
    }

    return (
        <Box className={classes.container}>
            <img className={classes.image} src={url} alt="bannnenr " />
            <FormControl className={classes.form} >
                <label htmlFor="file"><AddCircle color="secondary" fontSize="large" /></label>
                <input type="file" id="file" style={{
                    display: "none"
                }} onChange={(e) => setfile(e.target.files[0])} />
                <InputBase name="title" onChange={(e) => handleChange(e)} placeholder="Tile" className={classes.textfield} />
                <Button onClick={() => savePost()} variant="contained" color="primary"> Publish</Button>


            </FormControl>
            <TextareaAutosize name="description" onChange={(e) => handleChange(e)} className={classes.textarea
            } rowsMin={5} placeholder="Tell your Story " />
        </Box>
    )
}
export default CreateVeiw