import React,{useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CreateIcon from '@material-ui/icons/Create';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { useParams } from 'react-router';
import Header2 from './Header2';
import Footer from './Footer';
import {useHistory } from 'react-router-dom';

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
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 5),
        backgroundColor: "#6b7f94",
    },
}));

export default function ChangeInfo() {
    const classes = useStyles();
    const  [buyerInformations, setBuyerInformations] =  useState([]);
    const { id } = useParams();
  
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
    
    const history = useHistory();
    function send(){
      const buyerInfo={
        buyerId:id,
        buyerName:buyerInformations.buyerName,
        buyerPhone:buyerInformations.buyerPhone,
        buyerMail:buyerInformations.buyerMail,
        buyerAddress:buyerInformations.buyerAddress,
        pickmoney:buyerInformations.pickmoney,
        pickpoint:buyerInformations.pickpoint
      };
  
      console.log("in send buyerInfo"+buyerInfo);
  
      axios.put("/BuyerInformation/", buyerInfo)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });

      history.push('/BuyerInfo/'+id);
    }
    return (
        <div>
            <Header2/>
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <CreateIcon fontSize="large"/>
                    </Avatar>
                    <Typography component="h1" variant="h6" className={classes.title}>
                        修改購買資訊
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="Name"
                                    name="Name"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="Name"
                                    label={buyerInformations.buyerName}
                                    value={buyerInformations.buyerName} onChange={e => setBuyerInformations({...buyerInformations,buyerName :e.target.value})}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="Phone"
                                    label={buyerInformations.buyerPhone}
                                    value={buyerInformations.buyerPhone} onChange={e => setBuyerInformations({...buyerInformations,buyerPhone :e.target.value})}
                                    name="Phone"
                                    autoComplete="Phone"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="Email"
                                    label={buyerInformations.buyerMail}
                                    value={buyerInformations.buyerMail} onChange={e => setBuyerInformations({...buyerInformations,buyerMail :e.target.value})}
                                    name="Email"
                                    autoComplete="Email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="Address"
                                    label={buyerInformations.buyerAddress}
                                    value={buyerInformations.buyerAddress} onChange={e => setBuyerInformations({...buyerInformations,buyerAddress :e.target.value})}
                                    type="Address"
                                    id="Address"
                                    autoComplete="Address"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={() => send()}
                        >
                            修改
                        </Button>
                        
                    </form>
                </div>
            </Container>
            <Footer title="LINE PICK" description="Wish you a wonderful day !" />
        </div>
    );
}