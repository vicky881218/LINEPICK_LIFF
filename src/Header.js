import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "#8C7599",
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#f9e7d2",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  toolbarLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  toolbarTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    color: "#77773c",
    fontWeight: "bold",
    fontSize: 25,
  },
  toolbarRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    backgroundColor: "#c8d3c5",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 5,
    fontSize: 15,
  },


}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <div className={classes.toolbarLeft}>
          <Button >
            <ShoppingCartIcon fontSize="large" className={classes.icon} />
          </Button>
        </div>
        <div className={classes.toolbarTitle}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            {title}
          </Typography>
        </div>
        <div className={classes.toolbarRight}>
          <Button>
            <AssignmentIndIcon fontSize="large" className={classes.icon}/>
          </Button>
        </div>
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