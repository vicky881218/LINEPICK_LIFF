import React,{useState,useEffect}from 'react';
import { makeStyles} from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Divider from '@material-ui/core/Divider';
import Input from '@material-ui/core/Input';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DeleteIcon from '@material-ui/icons/Delete';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link} from 'react-router-dom';
import Header2 from './Header2';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
    title: {
        color: "#6b7f94",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    divider: {
        color: "#77773c",
        marginBottom: 10,
    },
    body: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'space-around',
        overflow: 'hidden',
        padding: 20,
    },
    root: {
        display: 'flex',
        marginBottom: 10,
    },
    item: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    checkbox: {
        paddingLeft: 10,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 140,
    },
    controls: {
        display: 'flex',
        alignItems: 'flex-start',
        paddingBottom: theme.spacing(1),
    },
    icon: {
        color: "#8C7599",
    },
    total: {
        color: "#77773c",
        fontSize: 18,
    },
    nextStep: {
        color: "#8C7599",
        fontSize: 20,
        fontWeight: "bold",
        textDecoration: "underline",
    },
    submit: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
}));

export default function Cart() {
    console.log("In Cart:");
    const classes = useStyles();
    const [checked, setChecked] = useState([]);

    const  [productItemPosts, setProductItemPosts] =  useState([]);
    const  [sum, setSum] =  useState(0);
    const  {id} = useParams();
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        async function fetchData () {   
          console.log("try useEffect:"+id);     
          const productsInfo = await axios.get('/CartProductInfo/'+id);
          setProductItemPosts(productsInfo.data); 
          productsInfo.data.forEach((item, index)=>checked[index]=false);
          console.log("productItemPosts:"+productsInfo.data);     
        }
        fetchData();
      },[deleted]);

    function remove(cartId){
        console.log("cart_id:"+cartId);
        axios.delete("/CartDeleted/"+cartId).then(res => {   
          setDeleted(currentDeleted=>setDeleted(!currentDeleted));  
        });
      }

    const setQuantity = (index, amt)=> {
        //stay >=0
        if (productItemPosts[index].quantity+amt >=0) {
            productItemPosts[index].quantity+=amt;
        }
        setProductItemPosts([...productItemPosts]);
    }

    const chooseProduct = (index,event,checked)=> {
        let total = 0;
        console.log("in chooseProduct index:"+index);  
        console.log("in chooseProduct event:"+event.target.value);  
        console.log("in chooseProduct checked before:"+checked);
        const chooseProduct = event.target.value;
        console.log("chooseProduct:"+parseInt(chooseProduct.split(" ")[2]));
        
        if(checked[index]==false){
            checked[index]=true;
            total += parseInt(chooseProduct.split(" ")[2]);
        }else{
            checked[index]=false;
            total -= parseInt(chooseProduct.split(" ")[2]);
        }
        setChecked([...checked]);
        console.log("in chooseProduct checked after:"+checked);
        setSum((sum)=>sum+total);
    }

    const final = () =>{
        console.log("in final:");
        for(var i=0;i<checked.length;i++){
            if (checked[i]==true){
                const cartInfo={
                    cartId:productItemPosts[i].cartId,
                    buyerId:id,
                    productId:productItemPosts[i].productId,
                    quantity:productItemPosts[i].quantity,
                    checked:checked[i]
                  };
          
                  axios.put("/CartUpdate/", cartInfo)
                  .then(res => {
                    console.log(res);
                    console.log(res.data);
                  });
            }
        }
    }

    return (
        <div>
        <Header2/>      
        <body className={classes.body}>
            
            <div className={classes.container}>
                <div className={classes.title}>
                    <ShoppingCartIcon fontSize="medium" />
                    賴皮願望
                </div>
                <Divider className={classes.divider} />
                {productItemPosts.map((item,index) => (
                    <div>
                            <FormGroup>
                                <Card className={classes.root} variant="outlined">
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color="primary"
                                                icon={<CheckBoxOutlineBlankIcon fontSize="medium" />}
                                                checkedIcon={<CheckBoxIcon fontSize="medium" />}
                                                value={item.productId+" "+item.quantity+" "+item.quantity*item.productPrice}
                                                defaultChecked={checked[index]}
                                                onChange={(event) => chooseProduct(index,event,checked)}
                                                alt=""
                                            />
                                        } className={classes.checkbox} />
                                    <div className={classes.details}>
                                        <CardContent className={classes.content}>
                                            <Typography component="h6" variant="h6">
                                                {item.productName}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                {<span>品項: {item.productStyle}</span>}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                {<span>售價: {item.productPrice} 元</span>}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                {<span>庫存: {item.productStock}</span>}
                                            </Typography>
                                        </CardContent>
                                        <div className={classes.controls}>
                                        <Button size="small" className={classes.icon} onClick={() => setQuantity(index, -1)}>
                                                <RemoveCircleOutlineIcon fontSize="small" />
                                            </Button>
                                            <Input value={item.quantity} type='text' ></Input>
                                            <Button size="small" className={classes.icon} onClick={() => setQuantity(index, 1)}>
                                                <AddCircleOutlineIcon fontSize="small" />
                                            </Button>
                                        </div>
                                        <div className={classes.item}>
                                            <Button size="small" className={classes.icon} onClick={()=>remove(item.cartId)}>
                                                <DeleteIcon />
                                            移除
                                            </Button>
                                            <Button size="small" className={classes.icon}>
                                                <AttachMoneyIcon />
                                                {item.quantity*item.productPrice}元
                                            </Button>
                                        </div>
                                    </div>
                                    <CardMedia
                                        className={classes.cover}
                                        image={item.productPhoto}
                                        title={item.productName}
                                    />
                                </Card>
                            </FormGroup>
                    </div>
                ))}
                <div className={classes.submit}>
                    <Button size="medium" className={classes.total}>
                        <AttachMoneyIcon />
                    總金額:{sum}元
                </Button>
                </div>
                <Divider className={classes.divider} />
                <Button size="large" className={classes.nextStep} onClick={final}>
                    <Link to={'/Checkout/'+id}>
                    前往結帳
                    <NavigateNextIcon fontSize="medium"/>
                    </Link>
                </Button>
            </div>   
        </body >
        <Footer title="LINE PICK" description="Wish you a wonderful day !" />
        </div> 
    );
}
