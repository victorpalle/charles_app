import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    container: {
        minHeight: '100vh',
        background: 'linear-gradient(#e66465, #9198e5)'
    },
    titleContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10vh 10vw',
        fontFamily: 'Barlow',
        fontSize: '30px',
    },

  });


export const HomePage = () => {

    const classes = useStyles();

    return (
    <div className={classes.container}>
      <div className={classes.titleContainer} id="header">
        <div>Charles App</div>
        <div>Comming soon</div>
        <div>Stay tuned</div>
      </div>
    </div>
    );
}