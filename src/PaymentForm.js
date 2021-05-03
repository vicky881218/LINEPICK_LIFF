import React,{useState,useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
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
    marginBottom: 10,
    marginTop: 15,
  },
  money: {
    color: '#6b7f94',
    marginBottom: 5,
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

const paymentPosts = [
  {
    title: 'Line Pay',
  },
  {
    title: '信用卡線上付款',
  },
  {
    title: '超商取貨付款',
  },
];

export default function PaymentForm(props) {
  const classes = useStyles();
  const [valuePayment, setValuePayment] = React.useState('LinePay');
  const handleChangePayment = (event) => {
    setValuePayment(event.target.value);
  };
  const [valueCoupon, setValueCoupon] = React.useState('use');
  const handleChangeCoupon = (event) => {
    setValueCoupon(event.target.value);
  };

  console.log ("valuePayment:"+valuePayment);
  console.log ("valueCoupon:"+valueCoupon);

  const  [pickmoney, setPickmoney] =  useState([]);
  const  [paymentInformation, setPaymentInformation] =  useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData () {  
      console.log ("id:"+id);
      const result = await axios.get('/Checkout/'+id);
      console.log ("result:"+result.data);
      console.log(result.data);
      setPickmoney(result.data); 
    }
    fetchData();
  },[]);

  function send(){
    console.log ("valuePayment in send:"+valuePayment);
    console.log ("valueCoupon in send:"+valueCoupon);
    const paymentInformation = valuePayment+"/"+valueCoupon;
    setPaymentInformation(valuePayment+"/"+valueCoupon);
    props.update(paymentInformation);
  }
  console.log ("paymentInformation after send:"+paymentInformation);


  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <Typography className={classes.title}>
          選擇付款方式
      </Typography>
        <main>
          <FormControl component="fieldset">
            <RadioGroup aria-label="payment" value={valuePayment} onChange={handleChangePayment}>
              {paymentPosts.map((post) => (
                <FormControlLabel value={post.title} control={<Radio color="primary" />} label={post.title} />
              ))}
            </RadioGroup>
          </FormControl>
        </main>
      </div>
      <div>
        <Typography className={classes.title}>
          使用購物金折抵
        </Typography>
        <Typography className={classes.money}>您的賴皮購物金:{pickmoney.pickmoney}元</Typography>
        <Typography>此筆訂單可折抵金額: 14 元</Typography>
        <main>
          <FormControl component="fieldset">
            <RadioGroup aria-label="coupon" value={valueCoupon} onChange={handleChangeCoupon}>
                <FormControlLabel value="use" control={<Radio color="primary" />} label="全部折抵~" />
                <FormControlLabel value="unuse" control={<Radio color="primary" />} label="下次再折!!! " />
            </RadioGroup>
          </FormControl>
        </main>
      </div>
      <div className={classes.buttons}>
          {/* <Button onClick={() => sendBack()} className={classes.button}>
              Back
            </Button> */}
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
