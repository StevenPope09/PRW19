import React from 'react';
import Header from './components/header/Header'
import Nav from '../src/components/nav/Nav'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router } from "react-router-dom";
import Routes from '../src/components/Routes'
import MyCard from './components/MyCard'
import MyCard2 from './components/MyCard2'
import Grid from '@material-ui/core/Grid';
//Its better to create a route file to hold all your routes.  You may get a lot of routes. 
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
//Look at your index.js I added themeing there.


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // backgroundColor: 'pink',
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    marginTop: 20,
    justifyContent: 'space-between'
  },
  rtNav: {
    marginRight: 25,
    maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
  },
  rtNavText: {
    marginTop: 25,
  }
}));


// //Grid is in talks of being no longer used.  
// function App() {
//   const classes = useStyles();
//   return (
//     <Router>
//       <div className={classes.root}>
//         <Header pgTitle="Neutron Gram" />
//         <Grid container spacing={0}>
//           <Grid item xs={2}>
//             <Nav />
//           </Grid>
//           <Grid item xs={8}>
//             <Routes />
//           </Grid>
//           <Grid item xs={2}>
//             <MyCard />
//             <MyCard2 />
//           </Grid>   
//           <Grid item xs={12}>
//             <Footer />
//           </Grid>
//         </Grid>
//       </div>
//     </Router>
//   )
// }
// export default App;

//I prefer flex

//Grid is in talks of being no longer used.  
// function App() {
//   const classes = useStyles();
//   return (
//     <Router>
//       <div>
//         <Header pgTitle="Neutron Gram" />
//         <div className={classes.root}>
//           <Grid item xs={2}>
//             <Nav />
//           </Grid>
//           <Grid item xs={8}>
//             <Routes />
//           </Grid>
//           <Grid item xs={2}>
//             <MyCard />
//             <MyCard2 />
//           </Grid>   
//           <Grid item xs={12}>
//             <Footer />
//           </Grid>
//         </div>
//       </div>
//     </Router>
//   )
// }
// export default App;

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <Header pgTitle="Neutron Gram" />
        <div className={classes.container}>
          <Nav />
          <Routes />
          <div className={classes.rtNav}>
            <Typography variant="h6" gutterBottom>
              Advertising
            </Typography>
            <MyCard />
            <Typography variant="h6" gutterBottom className={classes.rtNavText}>
              Music
            </Typography>
            <MyCard2 />
          </div>  
        </div> 
        <Footer />
      </div>
    </Router>
  )
}
export default App;


// const styles = {
//   container: {
//     display: 'block',
//     background: 'white',
    
//     //backgroundSize: '50% 100%'


//   },
  // nav: {
  //   marginLeft: '3%',
  //   marginTop: '3%',
  //   position: 'relative',
  //   //bottom: '-25%'
  // },
  // rtContainer: {
  //   marginTop: '8%'
  // }
// }


/* <Grid item xs={8}>
              <nav style={styles.nav}>
                <Nav />
              </nav>
            </Grid>
            <Grid item xs={12}>
              <Routes />
            </Grid>  
          </Grid>

          <div style={styles.rtContainer}>
            <Grid container spacing={12}>
              <Grid item xs={6}>
                <MyCard />
              </Grid>
              <Grid item xs={6}>
                <MyCard2 />
              </Grid>
            </Grid>
          </div> */