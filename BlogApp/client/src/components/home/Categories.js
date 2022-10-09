import { Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { categories } from "../../constants/data";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({

    table: {
        border: "1px solid rgba(224 ,224, 224,1)",
    },
    links: {
        textDecoration: "none",
        "&:hover": {
            textDecoration: "none"
        }
    },
    create: {
        width: "16vw",
        margin: 5,
        fontSize: 20,
        [theme.breakpoints.down("md")]: {
            fontSize: 10
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            fontSize: 12
        }

    }

}))
const Categories = () => {
    const classes = useStyles();
    return (
        <>
            <Link to="/create" className={classes.links}><Button variant="contained" color="secondary" className={classes.create} >Create BLog</Button></Link>
            <Table className={classes.table}>

                <TableHead>
                    <TableRow>
                        <TableCell>  <Link to={`/`} className={classes.links}> ALL CATEGORIRES</Link> </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categories.map((category) => {
                        return (<TableRow>
                            <TableCell>
                                <Link to={`/?category=${category}`} key={categories.indexOf(category)} className={classes.links}> {category}</Link>
                            </TableCell>
                        </TableRow>)
                    })}
                </TableBody>
            </Table>
        </>
    )
}

export default Categories
