import '@material-ui/core';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Link, useHistory } from "react-router-dom"

const usestyles = makeStyles({
    component: {
        background: "#ffffff",
        color: "#545454",
    },
    container: {
        justifyContent: "center ",
        "& > *": {
            padding: 20
        }
    }
    ,
    links: {
        textDecoration: "none",
        color: "inherit",
        "&:hover": {
            textDecoration: "none"
        }

    }

})

function Header() {
    const history = useHistory();
    const classes = usestyles();
   
    return (
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
                <Link to={`/`} className={classes.links} ><Typography>HOME </Typography></Link>
                <Link className={classes.links}><Typography>ABOUT  </Typography></Link>
                <Link className={classes.links} ><Typography>CONTACTS </Typography></Link>
                <Link className={classes.links}> <Typography>LOGIN</Typography></Link>
            </Toolbar>
        </AppBar >
    )
}

export default Header
