import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
const useStyles = makeStyles((theme) => ({
  title: {
    color: '#8C7599',
    fontWeight: "bold",
    fontSize: 18,
    textDecoration: "underline",
    marginBottom: 15,
    marginTop: 10,
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

export default function PaymentForm() {
  const classes = useStyles();
  const [valuePayment, setValuePayment] = React.useState('Line Pay');
  const handleChangePayment = (event) => {
    setValuePayment(event.target.value);
  };
  const [valueCoupon, setValueCoupon] = React.useState('use');
  const handleChangeCoupon = (event) => {
    setValueCoupon(event.target.value);
  };

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
        <Typography>可折抵金額:</Typography>
        <main>
          <FormControl component="fieldset">
            <RadioGroup aria-label="coupon" value={valueCoupon} onChange={handleChangeCoupon}>
                <FormControlLabel value="use" control={<Radio color="primary" />} label="是" />
                <FormControlLabel value="unuse" control={<Radio color="primary" />} label="否" />
            </RadioGroup>
          </FormControl>
        </main>
      </div>
    </React.Fragment>
  );
}
