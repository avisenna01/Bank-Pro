import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 9),
    backgroundColor: "#111113",
    borderRadius: "0px",
    height: "auto",

  },
  title: {
    fontSize: "70px",
    color: "white",
    fontFamily: 'SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    textAlign: "center",
    marginTop: "160px"
  },
}));

const inputBox = {

  border: "4px solid #66BBFF",
  marginTop: "15px",
  width: "250px",
  backgroundColor: "white",
  height: "40px",
  borderRadius: "10px",
  fontSize: "20px",
  padding: "5px",
  paddingLeft: "15px"
}

const LoginPage = () => {

  const classes = useStyles();

  // const submitLogin = () => {
  //   const url = "ini url";

  //   console.log(this.state.loginEmail);
  //   console.log(this.state.loginPass);

  //   fetch("ini url")
  //     .then(res => res.json())
  //     .then(res => {
  //       const that = this;
  //       const len = res.data.length;
  //       const checklist = [];
  //       for (let i = 0; i < len; i++) {
  //         checklist.push(res.data[i].user_email);
  //       }
  //       console.log(res)
  //       console.log(checklist);
  //       if (checklist.includes(this.state.loginEmail)) {
  //         const params = {
  //           user_email: this.state.loginEmail,
  //           password: this.state.loginPass
  //         };

  //         fetch(url, {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json"
  //           },
  //           body: JSON.stringify(params)
  //         })
  //           .then(function (response) {
  //             return response.json();
  //           })
  //           .then(function (json) {
  //             console.log(json);
  //             if (json.data.token == null) {
  //               alert("Wrong password");
  //             } else {
  //               cookies.set('token', json.data.token, { path: '/' });
  //               that.setState({
  //                 token: json.data.token,
  //                 redirect: true
  //               });
  //               console.log(cookies.get('token'));
  //               alert("Login success!");
  //               console.log(json.data.token);
  //               console.log(json.data)
  //               console.log(that.state.token)
  //               console.log("sena keren")
  //               alert("ale caur")
  //             }
  //           });
  //       } else {
  //         alert("Email not detected!");
  //       }
  //     });
  // };

  const handleChange = event => {
    console.log(event.target.value)
  };

  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // this.submitLogin()
      console.log("ini sena lesgo")
    }
  }


  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography className={classes.title}>Bank Pro</Typography>
      </Grid>
      <Grid item xs={12} container justify="center" alignItems="center" style={{ paddingBottom: "400px" }}>
        <input onKeyDown={_handleKeyDown} onChange={handleChange} style={inputBox} type="text" placeholder="Account Number" />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
