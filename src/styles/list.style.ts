import {createStyles, Theme} from '@material-ui/core';

const ListStyles = ({spacing, palette} : Theme)  => createStyles({
  background: {
    height: '100vh',
    width: '100%',
    color: 'white',
    background: `radial-gradient(${palette.primary.main}, rgb(150,123,194)) !important`
  },
  heading: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: '150px',
    padding: spacing(1),
    alignItems: 'center'
  },
  grid: {
    justifyContent:"center",
    alignItems: "center"
  }
});

export default ListStyles;