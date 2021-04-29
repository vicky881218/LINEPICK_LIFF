import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Input from '@material-ui/core/Input';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Divider from '@material-ui/core/Divider';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Header2 from './Header2';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 15,
    },
    grid: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    card: {
        //height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    content: {
        flex: '1 0 auto',
    },
    infoStyle: {
        color: "#8C7599",
        fontSize: 16,
    },
    productStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'space-around',
    },
    controls: {
        display: 'flex',
        alignItems: 'flex-start',
    },
    icon: {
        color: "#8C7599",
    },
    cardContent: {
        flexGrow: 1,
    },
    cardButton: {
        color: '#6b7f94',
        fontSize: 18,
        fontWeight: 'bold',
        textDecoration: "underline",
    },
    buy: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    total: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 5,
        marginRight: 5,
    },
    totalIcon: {
        color: "#8C7599",
        fontSize: 20,
        fontWeight: 'bold',
    },
    productTitle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: "#6b7f94",
        fontWeight: "bold",
    },
    productDesc: {
        padding: 8,
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    productPhoto: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        justifyContent: 'center',
    },
    gridListItem: {
        marginTop: 5,
    },
}));



export default function ProductsInfo() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
    };


    const  [productItemPosts, setProductItemPosts] =  useState([]);
    const { name } = useParams();
  
    useEffect(() => {
        async function fetchData () {     
          const oneNameAllStyle = await axios.get('/ProductsInfo/'+name);
          setProductItemPosts(oneNameAllStyle.data);  
        }
        fetchData();
      },[]);

      const [styleValue, setStyleValue] = useState("0 n 0 0");
      useEffect(() => {
        setStyleValue(styleValue)
      }, []);
      const valueChange = (event) => {
        setStyleValue(event.target.value);
      };
      console.log ("value:"+styleValue);  

      const [quantity, setQuantity] = useState(1);
      useEffect(() => {
        setQuantity(quantity)
      }, []);
      const quantityChange = (event) => {
        console.log ("event.target.value:"+event.target.value);
        setQuantity(event.target.value);
      };
      console.log ("quantity:"+quantity);

      const index=styleValue.split(" ")[3];
      console.log ("index:"+index);
      const styleValuePrice=styleValue.split(" ")[2];
      console.log ("styleValuePrice:"+styleValuePrice);
      const styleValueName=styleValue.split(" ")[1];
      console.log ("styleValueName:"+styleValueName);
      const styleValueId=styleValue.split(" ")[0];
      console.log ("styleValueId:"+styleValueId);
      const singleProductTotal=styleValuePrice*quantity;
      


      const [buyerId] = useState("Uce8f955020804de0a0e90fec457e4b32");
      const [productId, setProductId] = useState(styleValueId);
      
  const [productName, setProductName] = useState(productItemPosts.productName);
  const [productDesc, setProductDesc] = useState(productItemPosts.productDesc);
  const [productPrice, setProductPrice] = useState(productItemPosts.productPrice);
  const [productStock, setProductStock] = useState(productItemPosts.productStock);
  const [productPhoto, setProductPhoto] = useState(productItemPosts.productPhoto);
  const [productStyle, setProductStyle] = useState(productItemPosts.productStyle);
  const [discount, setDiscount] = useState(productItemPosts.discount);

  function send(){
    console.log("here send");
    setProductId(styleValueId);
    //setProductStock(productItemPosts.productStock-quantity);
    const remainingProductStock=productItemPosts[index].productStock-quantity;
    console.log("productStock2:"+(productItemPosts[index].productStock-quantity));
    console.log(productItemPosts[index].productStock-quantity);
    // setProductDesc()
    // setProductName();
//更新庫存
    const productInfo={
      productId:styleValueId,
      productName:productItemPosts[index].productName,
      productDesc:productItemPosts[index].productDesc,
      productPrice:productItemPosts[index].productPrice,
      productStock:remainingProductStock,
      productPhoto:productItemPosts[index].productPhoto,
      productStyle:productItemPosts[index].productStyle,
    };
    console.log("here");
    axios.put("/ProductStock/", productInfo)
    .then(res => {
        console.log("under");
      console.log(res);
      console.log(res.data);
    });
  
      
        setProductId(styleValueId);
        const cartInfo={
          buyerId,
          productId:styleValueId,
          quantity,
        };

        axios.put("/CartAdd/", cartInfo)
        .then(res => {
          console.log(res);
          console.log(res.data);
        });
      }

    return (
        <div>
        <Header2/>
        <React.Fragment>
            <CssBaseline />           
            <Container className={classes.root}>
                <Grid className={classes.grid} item xs={12}>
                     {/* {productItemPosts.map((post) => (  */}
                        <Grid item  item xs={12}>
                            <div className={classes.productTitle}>
                                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                                    {productItemPosts.productName}
                                </Typography>
                            </div>
                            <Divider />
                            <div className={classes.productDesc}>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {productItemPosts.productDesc}
                                </Typography>
                            </div>
                            <FormControlLabel
                                control={<Switch checked={checked} onChange={handleChange} />}
                                label="顯示商品資訊與購買"
                            />
                            <Slide direction="left" in={checked} mountOnEnter unmountOnExit >
                                <Card className={classes.card} variant="outlined">
                                    <div className={classes.details}>
                                        <CardContent className={classes.content}>
                                            <Typography className={classes.infoStyle}>
                                                選擇項目:
                                                    <div className={classes.productStyle}>
                                                    <FormControl component="fieldset">
                                                        <RadioGroup aria-label="payment" value={styleValue} onChange={valueChange}>
                                                            {productItemPosts.map((item,index) => (
                                                                <FormControlLabel key={item.productId} value={item.productId+" "+item.productStyle+" "+item.productPrice+" "+index} control={<Radio color="primary" />} label={<span>{item.productStyle}  /  {item.productPrice} 元 / 庫存: {item.productStock}</span>} />
                                                            ))}
                                                        </RadioGroup>
                                                    </FormControl>
                                                </div>
                                            </Typography>
                                        </CardContent>
                                        <div className={classes.controls}>
                                            <Button size="medium" className={classes.icon} onClick={() => setQuantity(quantity - 1)}>
                                                <RemoveCircleOutlineIcon fontSize="medium" />
                                            </Button>
                                            <Input value={quantity} type='text' onChange={quantityChange}></Input>
                                            <Button size="medium" className={classes.icon} onClick={() => setQuantity(quantity + 1)}>
                                                <AddCircleOutlineIcon fontSize="medium" />
                                            </Button>
                                        </div>
                                        <div className={classes.total}>
                                            <Button size="small" className={classes.totalIcon}>
                                                <AttachMoneyIcon />
                                                {singleProductTotal}元
                                                </Button>
                                        </div>
                                        <CardActions className={classes.buy}>
                                            <Button className={classes.cardButton} onClick={() => send(styleValueId)} >
                                            <Link to={'/CartProductInfo/'+buyerId} >
                                                <ShoppingCartIcon />
                                                        Pick
                                                        </Link>
                                                    </Button>
                                        </CardActions>
                                    </div>
                                </Card>
                            </Slide>
                            <Grid className={classes.productPhoto} item xs={12}>
                                {productItemPosts.map((item) => (
                                    <GridList cellHeight={180} className={classes.gridList}>
                                        <GridListTile key={item} className={classes.gridListItem}>
                                            <img src={item.productPhoto} alt={item.productPhoto} />
                                            <GridListTileBar
                                                title={item.productStyle}
                                                subtitle={<span>售價: {item.productPrice}元</span>}
                                            />
                                        </GridListTile>
                                    </GridList>
                                ))}
                            </Grid>
                        </Grid>
                     {/* ))}   */}
                </Grid>               
            </Container>
        </React.Fragment>
        <Footer title="LINE PICK" description="Wish you a wonderful day !" />
        </div>
    );

}