import React, { useState, useEffect } from 'react';
//import Typography from '@material-ui/core/Typography';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
//import avatarImage from '../../images/UserPic.png'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        // backgroundColor: theme.palette.background.paper,
        //maxWidth: 900,
        marginRight: 25,
    },
}));

export default function UserProfile() {
    const classes = useStyles();

    let [username, setUsername] = useState("");
    let [address, setAddress] = useState("");
    let [avatarUrl, setAvatarUrl] = useState("");
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [city, setCity] = useState("");
    let [zip, setZip] = useState("");

    useEffect(() => {
        getData();
        async function getData() {
            let res = await fetch("https://randomuser.me/api/");
            let json = await res.json();

            if (json.error) {
                console.log('there is an error');
                console.log(json.error);
                return;
            }

            let user = json.results[0];
            // console.log(user);

            let username = user.login.username;
            setUsername(username);

            let address = user.location.street
            setAddress(address);

            let avatarUrl = user.picture.thumbnail;
            setAvatarUrl(avatarUrl);

            let firstName = user.name.first;
            setFirstName(firstName);

            let lastName = user.name.last;
            setLastName(lastName);

            let city = user.location.city;
            setCity(city);

            let zip = user.location.postcode;
            setZip(zip);
        }
    }, [])

    return (
        <div className={classes.root}>
            <div style={styles.topBar}>Profile</div>
            <form style={styles.form}>
                <div style={styles.userAvatarAndName}>
                    <div>
                        <Avatar alt="Remy Sharp" src={avatarUrl} />
                    </div>
                    <div style={styles.usernameAndSubtitle}>
                        <div style={styles.username}>{username}</div>
                        <div style={styles.subtitle}>Chagne Profile Photo</div>
                    </div>
                </div>
                <Grid container spacing={3} style={styles.container}>
                    <Grid item xs={6}>
                        <label>Username</label>
                        <input style={styles.input} value={username} onChange={(e) => {
                            setUsername(e.target.value);
                        }} />
                    </Grid>
                    <Grid item xs={6}>
                        <label>Address</label>
                        <input style={styles.input} value={address} onChange={(e) => {
                            setAddress(e.target.value);
                        }} />
                    </Grid>
                    <Grid item xs={6}>
                        <label>First Name</label>
                        <input style={styles.input} value={firstName} onChange={(e) => {
                            setFirstName(e.target.value);
                        }} />
                    </Grid>
                    <Grid item xs={6}>
                        <label>City</label>
                        <input style={styles.input} value={city} onChange={(e) => {
                            setCity(e.target.value);
                        }} />
                    </Grid>
                    <Grid item xs={6}>
                        <label>Last Name</label>
                        <input style={styles.input} value={lastName} onChange={(e) => {
                            setLastName(e.target.value);
                        }} />
                    </Grid>
                    <Grid item xs={6}>
                        <label>Zip</label>
                        <input style={styles.input} value={zip} onChange={(e) => {
                            setZip(e.target.value);
                        }} />
                    </Grid>
                    <Grid item xs={8} style={styles.buttonRow}>
                        <Button variant="contained" component="span">
                            Update profile
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

const styles = {
    topBar: {
        padding: "10px",
        backgroundColor: "#ebebeb",
        display: "flex",
        border: "1px solid black",
        marginTop: "10px"
    },
    userAvatarAndName: {
        display: "flex",
        padding: "30px"
    },
    subtitle: {
        fontSize: "10px",
        textAlign: "left"
    },
    username: {
        textAlign: "left"
    },
    usernameAndSubtitle: {
        marginLeft: "10px",
        paddingTop: "5px",
        marginBottom: '15px'
    },
    input: {
        marginLeft: "10px",
        fontSize: '.75em',
        marginBottom: '15px'
    },
    container: {
        paddingLeft: '20%'

    },
    buttonRow: {
        display: "flex",
        justifyContent: "center",
        marginLeft: '3%',
        marginTop: '3%'
    },
    form: {
        fontSize: '1.5em'
    }
    
}