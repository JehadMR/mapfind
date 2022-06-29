import { makeStyles } from "@material-ui/core/styles";



export default makeStyles((theme) => ({

  parapgraph: {
   /* fontFamily:"'Inter', sans-serif",*/

  },

    search: {

        
      },

      toolbar: {
        display: 'flex', justifyContent: 'center', padding: '5%',
      },

    infogrid: {
      marginTop: '5em',
      backgroundColor: 'var(--color-bg-secondary, #f0f0f0)',
      padding: '16px 24px 24px',
      borderRadius: '6px',
      width: '90%',
      display: 'flex',
      alignItems: 'center',
      marginLeft: '4%',
      fontFamily: "'IBM Plex Sans', sans-serif",

    },

    mycard: {
        margin: '0px 1% 0px',
        color: 'rgb(0, 114, 229)',
        WebkitBoxAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        backgroundColor: 'rgba(243, 246, 249, 0.4)',
        border: '1px solid rgb(224, 227, 231)',
        borderRadius: '10px',
        padding: '10px',
        width: '229px',
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