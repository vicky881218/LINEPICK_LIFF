import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const products = [
  { name: '白色戀人巧克力', style: '黑巧克力(24入)', quantity: 1, price: '700' },
  { name: '韓國星巴克櫻花杯', style: '雙層玻璃杯', quantity: 1, price: '780' },
];

const payments = [
  { name: '付款方式', detail: 'Line Pay' },
  { name: '使用購物金', detail: '100' },
  { name: '剩餘購物金', detail: '0' },
];

const InfoPosts = [
  { name: '姓名', info: 'Celine' },
  { name: '聯絡電話:', info: '0912345678' },
  { name: '電子信箱:', info: 'c@gmail.com' },
  { name: '聯絡地址:', info: 'abcde' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  priceItem: {
    justifyContent: 'space-around',
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
    color: '#8C7599',
    fontWeight: "bold",
    fontSize: 18,
    textDecoration: "underline",
    marginBottom: 15,
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className={classes.title}>
        訂單明細
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
              <ListItemText primary={product.name} secondary={product.style} />
              <div className={classes.priceItem}>
              <Typography variant="body2">{<span> x {product.quantity}</span>}</Typography>
              <Typography variant="body2">{<span> $ {product.price}</span>}</Typography>
            </div>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="總金額" />
          <Typography variant="subtitle1" className={classes.total}>
            $1000
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="運費" />
          <Typography variant="subtitle1" className={classes.total}>
            +$60
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="購物金折抵" />
          <Typography variant="subtitle1" className={classes.total}>
            -$100
          </Typography>
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText primary="實付金額" />
          <Typography variant="subtitle1" className={classes.total}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            基本資訊
          </Typography>
          <Grid container>
            {InfoPosts.map((info) => (
              <React.Fragment key={info.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{info.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{info.info}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            付款資訊
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}