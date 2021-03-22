import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';
// image sources
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';


const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#191a1c",
    },
    secondary: {
      main:"#2c2e31",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem'
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },

  bigSpace: {
    marginTop:"5rem"
  },
  littleSpace: {
    marginTop:"2.5rem"
  },
  grid:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})

function App() {
  const classes = styles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
            Welcome to my website portfolio.
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            This is my first react.js project.
          </Typography>
        </div>

        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<SecurityIcon style={{fill: "#2C2E30", height:"125", width:"125"}}/>} title="Secure" btnTitle="Show me More" />
          <Grid icon={<EventNoteIcon style={{fill: "#2C2E30", height:"125", width:"125"}}/>} title="Reliable" btnTitle="Show me More" />
          <Grid icon={<TrendingUpIcon style={{fill: "#2C2E30", height:"125", width:"125"}}/>} title="Performant" btnTitle="Show me More" />
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>
          <Grid icon={<ImportExportIcon style={{fill: "#2C2E30", height:"125", width:"125"}}/>} title="Modular" btnTitle="Show me More" />
          <Grid icon={<ComputerIcon style={{fill: "#2C2E30", height:"125", width:"125"}}/>} title="Multi-Platform" btnTitle="Show me More" />
          <Grid icon={<HttpIcon style={{fill: "#2C2E30", height:"125", width:"125"}}/>} title="Connected" btnTitle="Show me More" />
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}


//<CustomBtn txt="april_0824"/>
// Start launcher
// npx create-react-app hello-world
// Navigate Folder
// cd portfolio
// npm start


export default App;
