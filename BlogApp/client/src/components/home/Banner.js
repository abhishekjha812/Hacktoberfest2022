import { Box, makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles({
    image: {
        backgroundImage: `url(${"https://source.unsplash.com/random/2560×1440/?computer,programming"})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center",
        backgroundSize: "100%",
        height: "60vh",
        width: "100%",
        display: "flex",
        alignItems: " center",
        flexDirection: "column",
        justifyContent: "center",
        objectFit: "cover",

        "& :first-child": {
            fontSize: 68,
            color: "#ffffff",
            lineHeight: 1
        },
        "& :last-child": {
            fontSize: 20,
            background: "#ffffff"
        }

    }
})
const Banner = () => {
    const classes = useStyles()

    return (
        <Box className={classes.image}>
            <Typography style={{
                textAlign: "center",
                background :"rgba(0,0,0,0.5)",
                padding: "15px 15px ",
                borderRadius:"10px",
                color:"wheat",
                textShadow:"2px 2px 5px black",
                boxShadow:"0px 0px 5px pink"


            }}> EARTHBOXER <br /> BLOGS </Typography>
            <br />
            <Typography>


            </Typography>
        </Box>
    )
}

export default Banner