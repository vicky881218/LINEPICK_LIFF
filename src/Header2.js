import React,{useState,useEffect} from 'react';
import clsx from 'clsx';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import DescriptionIcon from '@material-ui/icons/Description';
import StarIcon from '@material-ui/icons/Star';
import { Link } from 'react-router-dom';
import axios from "axios";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "#8C7599",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#f9e7d2",
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-around',
  },
  drawerHeaderFont: {
    color: "#77773c",
    fontSize: 20,
    fontWeight: 'bold',
  },
  drawerFont: {
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
  },
  toolbarTitle: {
    display: 'flex',
    flexDirection: 'row',
    color: "#77773c",
    fontWeight: "bold",
    fontSize: 25,
  },
  toolbarRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonSecondaryFont: {
    fontSize: 5,
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

export default function Header2() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const  [buyerInformations, setBuyerInformations] =  useState([]);
  const [buyerId]= useState("Ub19b06294bf055b1a7574919684b7c32");
  useEffect(() => {
    async function fetchData () {     
      const result = await axios.get('/Checkout/'+buyerId);
      console.log ("result:"+result.data);
      console.log(result.data);
      setBuyerInformations(result.data);
      
    }
    fetchData();
  },[]);

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <div className={classes.toolbarLeft}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon fontSize="large" className={classes.icon} />
          </IconButton>
        </div>
        <div className={classes.toolbarTitle}>
        <Button>
        <Link to={'/'} >
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            LINE PICK
          </Typography>
          
          </Link>
          </Button>
        </div>
        <div className={classes.toolbarRight}>
          <Button>
          <Link to={'/CartProductInfo/'+buyerId} >
            <ShoppingCartIcon fontSize="medium" className={classes.icon} />
            </Link>
          </Button>
          {/* <div className={classes.buttonSecondaryFont}>賴皮指數:{buyerInformations.pickpoint}點</div> */}
        </div>
      </Toolbar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <div className={classes.drawerHeaderFont}>LINE PICK</div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List >
          <ListItem>
            <ListItemIcon><SupervisedUserCircleIcon fontSize="medium" className={classes.drawerFont}/></ListItemIcon>
            <ListItemText className={classes.drawerFont}><Button><Link to={'/BuyerInfo/'+buyerId} >購買資訊</Link></Button></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon><StarIcon fontSize="medium" className={classes.drawerFont}/></ListItemIcon>
            <ListItemText className={classes.drawerFont}><Button><Link to={'/Pickpoint/'+buyerId} >賴皮指數</Link></Button></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon><DescriptionIcon fontSize="medium" className={classes.drawerFont}/></ListItemIcon>
            <ListItemText className={classes.drawerFont}><Button><Link to={'/BuyerAllOrderlist/'+buyerId} >賴皮紀錄</Link></Button></ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
