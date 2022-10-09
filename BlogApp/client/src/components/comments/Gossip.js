import { Typography, Box, makeStyles } from "@material-ui/core"
import { Delete } from "@material-ui/icons"
import { deleteComment } from "../../service/api"
const useStyles = makeStyles({
    box: {
        display: "flex",
        width: "100%"
    },
    component: {
        color: "black",
        margin: 30,
        background: '#E0E0E0',
        padding: 10

    },
    container: {
        display: "flex",
        marginBottom: 5

    },
    name: {
        fontSize: 10,
        fontWeight: 600,
        marginRight: 5
    },
    date: {
        fontSize: 8,
        fontWeight: 600,
        marginRight: 5,
        color: "#878787"

    }
    ,
    delete: {
        marginLeft: 'auto'
    }
})

const Gossip = ({ gossip, setToggle }) => {
    const classes = useStyles()
    const removeComment = async () => {
        await deleteComment(gossip._id)
        setToggle(prev => !prev)
    }
    return (


        <Box className={classes.component}>
            <Box className={classes.container}>
                <Typography className={classes.name}>{gossip.name}</Typography>
                <Typography className={classes.date}>{new Date(gossip.date).toDateString()}</Typography>
                <Delete onClick={() => removeComment()} className={classes.delete} color="secondary" />
            </Box>
            <Typography>{gossip.comment}</Typography>

        </Box>

    )



}
export default Gossip