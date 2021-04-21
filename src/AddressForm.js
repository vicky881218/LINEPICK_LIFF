import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import { useParams } from 'react-router';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
title: {
  color: '#8C7599',
  fontWeight: "bold",
  fontSize: 18,
  textDecoration: "underline",
},
buttons: {
  display: 'flex',
  justifyContent: 'flex-end',
},
button: {
  marginTop: theme.spacing(3),
  marginLeft: theme.spacing(1),
},
}));

export default function AddressForm(props) {
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
  
  const [buyerId] = useState(id);
  const [buyerName, setBuyerName] = useState(buyerInformations.buyerName);
  const [buyerPhone, setBuyerPhone] = useState(buyerInformations.buyerPhone);
  const [buyerMail, setBuyerMail] = useState(buyerInformations.buyerMail);
  const [buyerAddress, setBuyerAddress] = useState(buyerInformations.buyerAddress);

  function send(){

    const buyerInfo={
      buyerId,
      buyerName,
      buyerPhone,
      buyerMail,
      buyerAddress,
      pickmoney:buyerInformations.pickmoney,
      pickpoint:buyerInformations.pickpoint
    };

    console.log("in send buyerInfo"+buyerInfo);
    props.update(buyerInfo);

    axios.put("/BuyerInformation/", buyerInfo)
    .then(res => {
      console.log(res);
      console.log(res.data);
      //props.hide();
    });
  }

if (buyerInformations.buyerPhone==null || buyerInformations.buyerPhone==""){
  return (
    <React.Fragment>
      <Typography className={classes.title}>
        基本資訊
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            required
            id="buyerName"
            name="姓名"
            label="姓名"
            value={buyerName} onChange={e => setBuyerName(e.target.value)}
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="buyerPhone"
            name="購買者電話號碼"
            label="購買者電話號碼"
            value={buyerPhone} onChange={e => setBuyerPhone(e.target.value)}
            fullWidth
            autoComplete="tel"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="buyerMail"
            name="購買者電子郵件"
            label="購買者電子郵件"
            value={buyerMail} onChange={e => setBuyerMail(e.target.value)}
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="buyerAddress"
            name="地址"
            label="地址"
            value={buyerAddress} onChange={e => setBuyerAddress(e.target.value)}
            fullWidth
            autoComplete="address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="確認資料無誤"
          />
        </Grid>
      </Grid>
      <div className={classes.buttons}>
                
          <Button
            variant="outlined"
            color="primary"
            onClick={() => send()}
            className={classes.button}
                  >
            Next
                <NavigateNextIcon />
          </Button>
                </div>
    </React.Fragment>
  );
}else{
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      基本資訊
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            required
            id="buyerName"
            name="姓名"
            label={buyerInformations.buyerName}
            value={buyerName} onChange={e => setBuyerName(e.target.value)}
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="buyerPhone"
            name="購買者電話號碼"
            label={buyerInformations.buyerPhone}
            value={buyerPhone} onChange={e => setBuyerPhone(e.target.value)}
            fullWidth
            autoComplete="tel"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="buyerMail"
            name="購買者電子郵件"
            label={buyerInformations.buyerMail}
            value={buyerMail} onChange={e => setBuyerMail(e.target.value)}
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="buyerAddress"
            name="地址"
            label={buyerInformations.buyerAddress}
            value={buyerAddress} onChange={e => setBuyerAddress(e.target.value)}
            fullWidth
            autoComplete="address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="確認資料無誤"
          />
        </Grid>
      </Grid>
      <div className={classes.buttons}>
                
          <Button
            variant="outlined"
            color="primary"
            onClick={() => send()}
            className={classes.button}
                  >
            Next
                <NavigateNextIcon />
          </Button>
                </div>
    </React.Fragment>
  );
}
}