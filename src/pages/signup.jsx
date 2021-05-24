import React, { useState } from 'react'
import { useDispatch } from "react-redux"

// Custom Comps
import Navbar from "../comps/Navbar";

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// REact-router
import { useHistory } from "react-router-dom"

// Auth Actions 
import { userSignUp } from "../store/actions/Auth";

const useStyles = makeStyles((theme) => ({
    modalButton: {
        marginTop: 10,
        textTransform: 'none',
        fontSize: 16,
    },
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        boxSizing: "border-box",
        height: "70vh",
        padding: theme.spacing(2, 4, 3),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderColor: theme.palette.primary.main,
        borderWidth: 3,
        maxWidth: "750px",
        marginLeft: "auto",
        marginRight: "auto",
    },
    modalInput: {
        marginTop: 10,
    }
}));

export default function () {

    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory()

    const [FName, setFName] = useState("")
    const [LName, setLName] = useState("")
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")
    const [error, seterror] = useState(null)

    const signUpHandler = () => {
        dispatch(userSignUp(Email, Password, FName, LName, history, seterror))
    }

    return (
        <div>
            <Navbar signupScreen={true} />
            <div className={classes.mainContainer}>
                <Typography variant="h4" color="primary" gutterBottom>Sign Up</Typography>
                <form className={classes.root} onSubmit={() => { }} autoComplete="off">
                    <TextField onChange={(e) => setFName(e.target.value)} value={FName} className={classes.modalInput} label="First Name" fullWidth type="text" />
                    <TextField onChange={(e) => setLName(e.target.value)} value={LName} className={classes.modalInput} label="Last Name" fullWidth type="text" />
                    <TextField onChange={(e) => setEmail(e.target.value)} value={Email} className={classes.modalInput} label="Email" fullWidth type="email" helperText="example@site.com" />
                    <TextField onChange={(e) => setPassword(e.target.value)} value={Password} className={classes.modalInput} label="Password" fullWidth type="password" />
                    <Button onClick={signUpHandler} disabled={FName === "" || LName === "" || Email === "" || Password === ""} className={classes.modalButton} variant="contained" fullWidth color="primary">Sign Up</Button>
                    {error && <Typography variant="body2" color="error" gutterBottom>{error}</Typography>}
                </form>
            </div>
        </div>
    )
}

