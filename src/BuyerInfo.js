import React,{useState,useEffect}from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import CreateIcon from '@material-ui/icons/Create';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { useParams } from 'react-router';
import Header2 from './Header2';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        height: 50,
        width: 50,
        backgroundColor: "#6b7f94",
    },
    title: {
        color: "#6b7f94",
        fontWeight: "bold",
        fontSize: 22,
    },
    change: {
        color: "#6b7f94",
        fontSize: 18,
        textDecoration: "underline",
        marginRight: 5,
    },
    changeInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(2),
    },
    itemText: {
        fontSize: 18,
        color: "#8C7599",
        fontWeight: "bold",
    },
    submit: {
        margin: theme.spacing(3, 0, 5),
        backgroundColor: "#6b7f94",
    },
}));


export default function BuyerInfo() {
    const classes = useStyles();
    const { id } = useParams();
    const  [buyerInformations, setBuyerInformations] =  useState([]);
  useEffect(() => {
    async function fetchData () {     
      console.log ("buyerId:"+id);
      const result = await axios.get('/Checkout/'+id);
      console.log ("result:"+result.data);
      console.log(result.data);
      setBuyerInformations(result.data);
      
    }
    fetchData();
  },[]);

    return (
        <div>
        <Header2/>
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <AssignmentIndIcon fontSize="large" />
                    </Avatar>
                    <Typography className={classes.title}>
                        您的購買資訊
                    </Typography>
                    <form className={classes.form} noValidate>
                        <div className={classes.changeInfo}>
                            <Typography className={classes.change}>
                            <Link to={'/ChangeInfo/'+id} >
                                <CreateIcon fontSize="small" />修改
                                </Link>
                                </Typography>
                               
                        </div>
                        {/* {InfoPosts.map((post) => ( */}
                            <List>
                                <ListItem alignItems="flex-start">
                                    <ListItemText>
                                        <div className={classes.itemText}>姓名:{buyerInformations.buyerName}</div>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem alignItems="flex-start">
                                    <ListItemText >
                                        <div className={classes.itemText}>聯絡電話:{buyerInformations.buyerPhone}</div>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem alignItems="flex-start">
                                    <ListItemText >
                                        <div className={classes.itemText}>電子信箱:{buyerInformations.buyerMail}</div>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem alignItems="flex-start">
                                    <ListItemText >
                                        <div className={classes.itemText}>聯絡地址:{buyerInformations.buyerAddress}</div>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        {/* ))} */}
                        {buyerInformations.buyerPhone==null || buyerInformations.buyerPhone=="" ?
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            <Link to={'/InputInfo/'+id} style={{color:'#FFFF'}} >
                            尚未填寫，點選新增
                            </Link>
                        </Button>
                        :''}
                    </form>
                </div>
            </Container>
            <Footer title="LINE PICK" description="Wish you a wonderful day !" />
        </div>
    );
}