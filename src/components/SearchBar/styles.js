import { makeStyles } from "@material-ui/core/styles";



export default makeStyles((theme) => ({

    search: {

        
      },

      toolbar: {
        display: 'flex', justifyContent: 'center', padding: '5%',
      },

    mycard: {
        margin: '0px 5% 0px',
        color: 'rgb(0, 114, 229)',
        WebkitBoxAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        backgroundColor: 'rgba(243, 246, 249, 0.4)',
        border: '1px solid rgb(224, 227, 231)',
        borderRadius: '10px',
        fontFamily: "'IBM Plex Sans', sans-serif",
        padding: '10px',
        width: '27%',
        paddingLeft: '14px',

    },

    cardhead: {

        margin: '0px',
        textTransform: 'initial',
        letterSpacing: '0px',
        fontSize: '0.875rem',
        lineHeight: '1.75',
        fontWeight: 'bold',
        color: 'rgb(26, 32, 39)',

    },
    cardtext: {

        margin: '4px 0px 0px',
        display: 'inline-block',
        letterSpacing: '0px',
        fontSize: '0.75rem',
        lineHeight: '1.5',
        fontWeight: 'normal',
        color: 'rgb(62, 80, 96)',

    },

}));