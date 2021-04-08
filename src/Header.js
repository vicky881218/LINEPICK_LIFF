import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/ShoppingCart';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import green from '@material-ui/core/colors/green';
const useStyles = makeStyles((theme) => ({
    //header
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor:green[100]
  },
  toolbarTitle: {
    flex: 1,
    color:green[700]
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    backgroundColor:green[50]
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },

  

  
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;


  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <IconButton size="small"><ListIcon />購買資訊</IconButton>
        <Link className={classes.toolbarTitle} >
        <Typography
          
          component="h2"
          variant="h5"
          align="center"
          noWrap
          
        >
          {title}
        </Typography></Link>
        <IconButton size="small" >
          <SearchIcon />賴皮願望
        </IconButton>
        
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};