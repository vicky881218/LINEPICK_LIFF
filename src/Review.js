import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';
import { useParams } from 'react-router';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { SettingsInputComponent } from '@material-ui/icons';

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
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function Review(prop) {
  console.log ("in Review:");
  console.log ("prop:"+prop.data);
  const payType = prop.data.split('/')[0];
  const useType = prop.data.split('/')[1];
  console.log ("payType:"+payType);
  console.log ("useType:"+useType);
  const classes = useStyles();
  const {id} = useParams();
  var fullDate = new Date();
  var yyyy = fullDate.getFullYear();
  var MM = (fullDate.getMonth() + 1) >= 10 ? (fullDate.getMonth() + 1) : ("0" + (fullDate.getMonth() + 1));
  var dd = fullDate.getDate() < 10 ? ("0"+fullDate.getDate()) : fullDate.getDate();
  var today = yyyy + MM + dd;
  console.log ("today:"+today);

  function send(){
    const realPay = money-usePickmoneyPrice;
    const restPickmoney = buyerInformation.pickmoney-usePickmoneyPrice;
    const reviewInfo=realPay+" "+restPickmoney;

    if(payType=='Line Pay'||payType=='信用卡線上付款'){
      var thisPaySatus='Y';
    }else{
      var thisPaySatus='N';
    }
    prop.update(reviewInfo);
    console.log ("thisPaySatus:"+ thisPaySatus);
    for(var i=0;i<productItemPosts.length;i++){
          const cartInfo={
              cartId:productItemPosts[i].cartId,
              buyerId:id,
              productId:productItemPosts[i].productId,
              quantity:productItemPosts[i].quantity,
              checked:'false'
            };
    
            axios.put("/CartUpdate/", cartInfo)
            .then(res => {
              console.log(res);
              console.log(res.data);
            });
    }

    for(var i=0;i<buyCart.length;i++){
    console.log("thisProductId");
    const thisProductId = buyCart[i].productId;
    console.log(thisProductId);
    const remainingProductStock=allProduct[thisProductId-1].productStock-buyCart[i].quantity;
    console.log(remainingProductStock);
    
    
    const productInfo={
      productId:thisProductId,
      productName:allProduct[thisProductId-1].productName,
      productDesc:allProduct[thisProductId-1].productDesc,
      productPrice:allProduct[thisProductId-1].productPrice,
      productStock:remainingProductStock,
      productPhoto:allProduct[thisProductId-1].productPhoto,
      productStyle:allProduct[thisProductId-1].productStyle,
    };

    axios.put("/ProductStock/", productInfo)
    .then(res => {
        console.log("under");
      console.log(res);
      console.log(res.data);
    });
    }
    const orderlist={
      payType:payType,
      payStatus:thisPaySatus,
      orderListStatus:'未出貨',
      orderListPayment:money,
      orderDate:today,
      pickmoneyUse:usePickmoneyPrice,
      buyerId:id,
    };

    axios.put("/OrderListAdd/", orderlist)
    .then(res => {
      console.log("OrderListAdd");
      console.log(res);
      console.log(res.data);
      for(var i=0;i<buyCart.length;i++){
      const orderItem ={
        orderItemQuantity:buyCart[i].quantity,
        productId:buyCart[i].productId,
        orderListId:res.data
      }
    
    axios.put("/OrderItemAdd/", orderItem)
    .then(res => {
      console.log("OrderItemAdd");
      console.log(res);
      console.log(res.data);
      for(var i=0;i<buyCart.length;i++){
      console.log("console.log(buyCart[i].cartId);"+buyCart[i].cartId);
      axios.delete("/CartDeleted/"+buyCart[i].cartId);
      }
    });
  }
    });
  }

  const  [buyerInformation, setBuyerInformation] =  useState([]);
  const  [buyCart, setBuyCart] =  useState([]);
  const  [productItemPosts, setProductItemPosts] =  useState([]);
  const  [allProduct, setAllProduct] =  useState([]);
  useEffect(() => {
    async function fetchData () {  
      console.log ("id:"+id);
      const result = await axios.get('/Checkout/'+id);
      const buyCart = await axios.get('/Review/'+id);
      const productsInfo = await axios.get('/CartProductInfo/'+id);
      const allProduct = await axios.get('/findProductAll');
      console.log(allProduct.data);
      setAllProduct(allProduct.data);
      setProductItemPosts(productsInfo.data); 
      setBuyerInformation(result.data); 
      setBuyCart(buyCart.data);
    }
    fetchData();
  },[]);
  console.log("allProduct.data:"+allProduct);
  let money = 0;
  for(var i=0;i<buyCart.length;i++){
    money+=buyCart[i].productPrice*buyCart[i].quantity;   
  }

  let usePickmoneyPrice = 0;
  console.log(useType=='use');
  if (useType=='use'){
    console.log("in true");
    if(money>=100 && buyerInformation.pickmoney <= 10*(Math.floor(money/100))){
      usePickmoneyPrice = buyerInformation.pickmoney; 
    }else if(money>=100 && buyerInformation.pickmoney > 10*(Math.floor(money/100))){
      usePickmoneyPrice = 10*(Math.floor(money/100));
    }else{
      usePickmoneyPrice = 0;
  }
    var payments= [
      { name: '付款方式', detail: payType },
      { name: '使用購物金', detail: usePickmoneyPrice },
      { name: '剩餘購物金', detail: buyerInformation.pickmoney-usePickmoneyPrice },
    ];
    
  }else{
    console.log("in false");
    var payments= [
      { name: '付款方式', detail: payType },
      { name: '使用購物金', detail: '0' },
      { name: '剩餘購物金', detail: buyerInformation.pickmoney },
    ];
  }

  const InfoPosts = [
    { name: '姓名:', info: buyerInformation.buyerName },
    { name: '聯絡電話:', info: buyerInformation.buyerPhone },
    { name: '電子信箱:', info: buyerInformation.buyerMail },
    { name: '聯絡地址:', info: buyerInformation.buyerAddress },
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className={classes.title}>
        訂單明細
      </Typography>
      <List disablePadding>
        {buyCart.map((product) => (
          <ListItem className={classes.listItem} key={product.productId}>
              <ListItemText primary={product.productName} secondary={product.productStyle} />
              <div className={classes.priceItem}>
              <Typography variant="body2">{<span> x {product.quantity}</span>}</Typography>
              <Typography variant="body2">{<span> $ {product.productPrice*product.quantity}</span>}</Typography>
            </div>
          </ListItem>
        ))} 
        <ListItem className={classes.listItem}>
          <ListItemText primary="總金額" />
          <Typography variant="subtitle1" className={classes.total}>
            ${money}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="購物金折抵" />
          <Typography variant="subtitle1" className={classes.total}>
            -${usePickmoneyPrice}
          </Typography>
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText primary="實付金額" />
          <Typography variant="subtitle1" className={classes.total}>
            ${money-usePickmoneyPrice}
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
      <div className={classes.buttons}>
                
          <Button
            variant="outlined"
            color="primary"
            onClick={() => send()}
            className={classes.button}
                  >
            送出訂單
                <NavigateNextIcon />
          </Button>
                </div>
    </React.Fragment>
  );
}