import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
title: {
  color: '#8C7599',
  fontWeight: "bold",
  fontSize: 18,
  textDecoration: "underline",
},
}));

export default function AddressForm() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography className={classes.title}>
        基本資訊
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            required
            id="firstName"
            name="firstName"
            label="姓名"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="buyer_phone"
            name="購買者電話號碼"
            label="購買者電話號碼"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="buyer_mail"
            name="購買者電子郵件"
            label="購買者電子郵件"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address"
            name="地址"
            label="地址"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="已確認上列資料輸入無誤"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}