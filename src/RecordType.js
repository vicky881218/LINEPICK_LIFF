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

const orderlist = [{ id: '1', date:'3/1' }, { id: '2', date:'4/7' }];
const products = [
    { name: '白色戀人巧克力', style: '黑巧克力(24入)', photo: 'https://source.unsplash.com/random', quantity: 1, price: '700' },
    { name: '韓國星巴克櫻花杯', style: '雙層玻璃杯', photo: 'https://source.unsplash.com/random', quantity: 1, price: '780' },
];
const payments = [
    { name: '付款方式', detail: 'Line Pay' },
    { name: '使用購物金', detail: '100' },
    { name: '獲得賴皮指數', detail: '14' },
];

export default function RecordType() {
    const classes = useStyles();
    //訂單狀態
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { orderListStatus,id } = useParams();
    const [orderContent, setOrderContent] = useState([""]);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(() => {
        async function fetchData () {  
        console.log("buyerId:"+id);   
          const oneNameAllStyle = await axios.get('/RecordType/'+orderListStatus+'/'+id);
          setOrderContent(oneNameAllStyle.data);  
        //   console.log("orderppp:"+oneNameAllStyle.data[0].orderListId);
        }
        fetchData();
      },[orderListStatus]);
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

    return (
        <div>
            <RecordHeader sections={sections} />
            <body className={classes.body}>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <DescriptionIcon fontSize="medium" />
                    賴皮紀錄
                </div>
                    <Divider className={classes.divider} />

                    {orderContent.map((buyerorder) => (
                        <div>
                           
                                    <div className={classes.cards}>
                                        <Card className={classes.card} variant="outlined">

                                            <div className={classes.details}>
                                                <CardContent className={classes.content}>
                                                    <Typography variant="subtitle1" >
                                                        {<span>訂單編號: {buyerorder.orderListId}</span>}
                                                    </Typography>
                                                    <Typography variant="subtitle1" >
                                                        {<span>購買日期: {buyerorder.orderDate}</span>}
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        {<span>總金額: {buyerorder.orderListPayment}元</span>}
                                                    </Typography>
                                                    <div>
                                                        {/* <Button variant="text" size="small" className={classes.buyButton} onClick={handleClickOpen}>
                                                            再買一次
                                                    </Button> */}
                                                        <Button variant="text" size="small" className={classes.buyButton}>
                                                           
                                                        <Link to={'/OrderlistContent/' + buyerorder.orderListId}>詳細資訊</Link>

                                                           
                                                        </Button>
                                                        {/* <Repurchase selectedValue={selectedValue} open={open} onClose={handleBuyClose} /> */}
                                                    </div>
                                                </CardContent>
                                            </div>
                                        </Card>
                                    </div>
                                
                        </div>
                    ))}
                </div>
            </body >
            <Footer title="LINE PICK" description="Wish you a wonderful day !" />
        </div>
    );
}
