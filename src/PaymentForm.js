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
  return (
    <React.Fragment>
      <Typography className={classes.title}>
        選擇付款方式
      </Typography>
      <CssBaseline />
      <main>
        <FormControl component="fieldset">
          <RadioGroup aria-label="payment">
          {paymentPosts.map((post) => (
            <FormControlLabel value={post.title} control={<Radio color="primary"/>} label={post.title} />
            ))}
          </RadioGroup>
        </FormControl>
      </main>
    </React.Fragment>
  );
}
