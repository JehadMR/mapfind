import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  headerbar: {
    position: 'static',
    height: '48px',

  },
  title: {
    display: 'flex',
    flexBasis: '222px',
    alignItems: 'center',
    boxSizing: 'content-box',
    borderRight: '1px solid var(--color-border-menu, rgba(0, 0, 0, .2))',
    height: '100%',
    fontWeight: '400',
    fontSize: '0.7rem',
    '&:hover': {     fill: 'rgba(255, 255, 255, 1)',
      color: 'rgba(255, 255, 255, 1)',
      backgroundColor: '#111111'},


 
  },


  titlecontent: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',

  },
  headerlogo: {

    height: '2em',
    width: '2em',
    padding: '9px',

  },
  searchbox: {
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    paddingRight: '11px',


  },

  bartext: {

    height: '100%',


  },
  
  search: {

    display: 'flex',
    height: '42px',
    alignItems: 'center',
    backgroundColor: '#383838',
    '&:hover': { backgroundColor: '#444444' },
    borderRadius: '6px',
    cursor: 'text',
    width: '100%',
    [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
  },
  searchIcon: {
    padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff87',
  },
  inputRoot: {
    color: 'inherit',
    fontSize: '0.9rem',
    fontFamily: "'Inter', sans-serif",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
  },
  toolbar: {
    userSelect: 'none',
    backgroundColor: 'var(--color-bg-toolbar, #2c2c2c)',
    borderBottom: '1px solid var(--color-conditionalborder)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    width: '100%',
    height: '48px',
    zIndex: '4',
    top: '0',
    boxSizing: 'border-box',
    fontFamily: "'Inter', sans-serif",
    color: '#ffff',
    padding: '0px 0px 0px',
  },
}));