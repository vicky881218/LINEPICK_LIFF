import React,{useState,useEffect} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';
import Divider from '@material-ui/core/Divider';
import Repurchase from './Repurchase';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import RecordHeader from './RecordHeader';
import Footer from './Footer';
import {useHistory } from 'react-router-dom';


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
        marginBottom: 10,
    },
    menu: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-end',
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
        width:'70%'
    },
    cards: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    expanded: {
        marginBottom: 8,
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
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
        width: 150,
    },
    buyButton: {
        color: "#8C7599",
        fontSize: 16,
        fontWeight: "bold",
        textDecoration: "underline",
    },
    detailList: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    listItem: {
        padding: theme.spacing(1, 0),
    },
    priceItem: {
        justifyContent: 'space-around',
    },
}));

const StyledMenu = withStyles({ //訂單狀態
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: "#8C7599",
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);



export default function Record() {
    const classes = useStyles();
    const { id } = useParams();
    const [orderContent, setOrderContent] = useState([""]);
    const [status, setStatus] = useState("");

    useEffect(() => {
        async function fetchData () {  
        console.log("buyerId:"+id);   
          const oneNameAllStyle = await axios.get('/OrderlistContent/'+id);
          setOrderContent(oneNameAllStyle.data);  
          console.log("orderStatus:"+oneNameAllStyle.data[0].orderListStatus);
          setStatus(oneNameAllStyle.data[0].orderListStatus);
          console.log("order:"+oneNameAllStyle.data[0].orderListId);
        }
        fetchData();
      },[]);
    //訂單狀態
    console.log("order2:"+orderContent[0].orderListId);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const history = useHistory();
    const updateStatus = () => {
        const orderInfo={
            orderListId: orderContent[0].orderListId,
            payType: orderContent[0].payType,
            payStatus: orderContent[0].payStatus,
            orderListStatus: "已完成",
            orderListPayment: orderContent[0].orderListPayment,
            orderDate: orderContent[0].orderDate,
            pickmoneyUse: orderContent[0].pickmoneyUse,
            buyerId: orderContent[0].buyerId
        }
        axios.post("/OrderStatusInReact/", orderInfo)
        .then(res => {
            console.log(res);
            console.log(res.data);
          });
          history.push('/BuyerAllOrderlist/'+orderContent[0].buyerId);
    };

    //回購彈出選單
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState("");
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleBuyClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    const sections=[
        {typeName:'未出貨'},
        {typeName:'運送中'},
        {typeName:'已完成'},
    ]

    if(status=="運送中"){
    return (
        <div>
            <RecordHeader sections={sections}/>
        <body className={classes.body}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <DescriptionIcon fontSize="medium" />
                    賴皮紀錄
                </div>
                <Divider className={classes.divider} />
             
                
                    <div>
                        <div>
                                <div className={classes.cards}>
                                    <Card className={classes.card} variant="outlined">
                                     
                                        <div className={classes.details}>
                                            <CardContent className={classes.content}>
                                                <Typography variant="subtitle1" >
                                                    {<span>訂單編號: {orderContent[0].orderListId}</span>}
                                                </Typography>
                                                <Typography variant="subtitle1" >
                                                    {<span>購買日期: {orderContent[0].orderDate}</span>}
                                                </Typography>
                                                <Typography variant="subtitle1">
                                                    {<span>總金額: {orderContent[0].orderListPayment}元</span>}
                                                </Typography>
                                                <div style={{flexDirection:'row'}}>
                                                <div>
                                                    <Button variant="text" size="small" className={classes.buyButton} onClick={handleClickOpen}>
                                                        再買一次
                                                    </Button>
                                                    <Repurchase selectedValue={selectedValue} open={open} onClose={handleBuyClose} />
                                                    <Button variant="text" size="small" className={classes.buyButton} onClick={updateStatus}>
                                                        完成訂單
                                                    </Button>
                                                    <Repurchase selectedValue={selectedValue} open={open} onClose={handleBuyClose} />
                                                </div>
                                                </div>
                                            </CardContent>
                                        </div>
                                    </Card>
                                </div>   
                          </div>
                          {orderContent.map((buyerorder) => (
                                    <div>
                                        <Typography>
                                            <ListItem className={classes.listItem} key={buyerorder.productName}>
                                                <ListItemText primary={buyerorder.productName} secondary={buyerorder.productStyle} />
                                                <div className={classes.priceItem}>
                                                    <Typography variant="body2">{<span> x {buyerorder.orderItemQuantity}</span>}</Typography>
                                                    <Typography variant="body2">{<span> $ {buyerorder.productPrice}</span>}</Typography>
                                                </div>
                                            </ListItem>
                                        </Typography>
                                    </div>
                         ))}
                               
                                    <div>
                                        <Typography>
                                            <ListItem className={classes.listItem} key={orderContent[0].payType}>
                                                <ListItemText primary={orderContent[0].payType} />
                                                <div className={classes.priceItem}>
                                                    <Typography variant="body2">{orderContent[0].payStatus}</Typography>
                                                </div>
                                            </ListItem>
                                        </Typography>
                                    </div>
                     
                    </div>
                
            </div>
        </body >
        <Footer title="LINE PICK" description="Wish you a wonderful day !" />
        </div>
    );
}else{
    return (
        <div>
            <RecordHeader sections={sections}/>
        <body className={classes.body}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <DescriptionIcon fontSize="medium" />
                    賴皮紀錄
                </div>
                <Divider className={classes.divider} />
             
                
                    <div>
                        <div>
                                <div className={classes.cards}>
                                    <Card className={classes.card} variant="outlined">
                                     
                                        <div className={classes.details}>
                                            <CardContent className={classes.content}>
                                                <Typography variant="subtitle1" >
                                                    {<span>訂單編號: {orderContent[0].orderListId}</span>}
                                                </Typography>
                                                <Typography variant="subtitle1" >
                                                    {<span>購買日期: {orderContent[0].orderDate}</span>}
                                                </Typography>
                                                <Typography variant="subtitle1">
                                                    {<span>總金額: {orderContent[0].orderListPayment}元</span>}
                                                </Typography>
                                                <div>
                                                    <Button variant="text" size="small" className={classes.buyButton} onClick={handleClickOpen}>
                                                        再買一次
                                                    </Button>
                                                    
                                                    <Repurchase selectedValue={selectedValue} open={open} onClose={handleBuyClose} />
                                                </div>
                                            </CardContent>
                                        </div>
                                    </Card>
                                </div>   
                          </div>
                          {orderContent.map((buyerorder) => (
                                    <div>
                                        <Typography>
                                            <ListItem className={classes.listItem} key={buyerorder.productName}>
                                                <ListItemText primary={buyerorder.productName} secondary={buyerorder.productStyle} />
                                                <div className={classes.priceItem}>
                                                    <Typography variant="body2">{<span> x {buyerorder.orderItemQuantity}</span>}</Typography>
                                                    <Typography variant="body2">{<span> $ {buyerorder.productPrice}</span>}</Typography>
                                                </div>
                                            </ListItem>
                                        </Typography>
                                    </div>
                         ))}
                               
                                    <div>
                                        <Typography>
                                            <ListItem className={classes.listItem} key={orderContent[0].payType}>
                                                <ListItemText primary={orderContent[0].payType} />
                                                <div className={classes.priceItem}>
                                                    <Typography variant="body2">{orderContent[0].payStatus}</Typography>
                                                </div>
                                            </ListItem>
                                        </Typography>
                                    </div>
                     
                    </div>
                
            </div>
        </body >
        <Footer title="LINE PICK" description="Wish you a wonderful day !" />
        </div>
    );
}}
