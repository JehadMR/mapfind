import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  headerbar: {
    position: 'static',
    height: '48px',

  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    flexBasis: '240px',
    boxSizing: 'content-box',
    borderRight: '1px solid var(--color-border-menu, rgba(0, 0, 0, .2))',
    height: '100%',
  },

  searchbox: {
    justifyContent: 'space-between',
    display: 'flex',


  },

  bartext: {

    height: '100%',


  },
  
  search: {

    display: 'flex',
    height: '40px',
    boxSizing: 'borderBox',
    alignItems: 'center',
    backgroundColor: '#383838',
    '&:hover': { backgroundColor: '#444444' },
    borderRadius: '6px',
    cursor: 'text',
    width: '100%',
    [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
  },
  searchIcon: {
    padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
  },
  toolbar: {
    userSelect: 'none',
    backgroundColor: 'var(--color-bg-toolbar, #2c2c2c)',
    borderBottom: '1px solid var(--color-conditionalborder)',
    display: 'flex',
    paddingRight: '12px',
    position: 'fixed',
    width: '100%',
    height: '48px',
    zIndex: '4',
    justifyContent: 'space-between',
    top: '0',
    boxSizing: 'border-box',
    fontFamily: "'IBM Plex Sans', sans-serif",
  },
}));