import React from 'react';
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

const orderlist = [{ id: '1' }, { id: '2' }];
const products = [
    { name: '白色戀人巧克力', style: '黑巧克力(24入)', photo: 'https://source.unsplash.com/random', quantity: 1, price: '700' },
    { name: '韓國星巴克櫻花杯', style: '雙層玻璃杯', photo: 'https://source.unsplash.com/random', quantity: 1, price: '780' },
];
const payments = [
    { name: '付款方式', detail: 'Line Pay' },
    { name: '使用購物金', detail: '100' },
];

export default function Record() {
    const classes = useStyles();

    //訂單狀態
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
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

    return (
        <body className={classes.body}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <DescriptionIcon fontSize="medium" />
                    賴皮紀錄
                </div>
                <Divider className={classes.divider} />
                <div className={classes.menu}>
                    <Button
                        aria-controls="customized-menu"
                        aria-haspopup="true"
                        variant="outlined"
                        color="primary"
                        onClick={handleClick}
                    >
                        選擇訂單狀態
                    </Button>
                    <StyledMenu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <StyledMenuItem>
                            <ListItemIcon>
                                <EventNoteIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="未出貨" />
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <LocalShippingIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="運送中" />
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <CheckBoxIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="已完成" />
                        </StyledMenuItem>
                    </StyledMenu>
                </div>
                {orderlist.map((post) => (
                    <div>
                        <Accordion className={classes.expanded}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <div className={classes.cards}>
                                    <Card className={classes.card} variant="outlined">
                                        <CardMedia
                                            className={classes.cover}
                                            image='https://source.unsplash.com/random'
                                            title='白色戀人巧克力'
                                        />
                                        <div className={classes.details}>
                                            <CardContent className={classes.content}>
                                                <Typography variant="subtitle1" >
                                                    {<span>訂單編號: {post.id}</span>}
                                                </Typography>
                                                <Typography variant="subtitle1" >
                                                    {<span>購買日期: </span>}
                                                </Typography>
                                                <Typography variant="subtitle1">
                                                    {<span>總金額: 元</span>}
                                                </Typography>
                                                <div>
                                                    <Button variant="text" size="small" className={classes.buyButton} onClick={handleClickOpen}>
                                                        回購Pick
                                                    </Button>
                                                    <Repurchase selectedValue={selectedValue} open={open} onClose={handleBuyClose} />
                                                </div>
                                            </CardContent>
                                        </div>
                                    </Card>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails className={classes.detailList}>
                                {products.map((product) => (
                                    <div>
                                        <Typography>
                                            <ListItem className={classes.listItem} key={product.name}>
                                                <ListItemText primary={product.name} secondary={product.style} />
                                                <div className={classes.priceItem}>
                                                    <Typography variant="body2">{<span> x {product.quantity}</span>}</Typography>
                                                    <Typography variant="body2">{<span> $ {product.price}</span>}</Typography>
                                                </div>
                                            </ListItem>
                                        </Typography>
                                    </div>
                                ))}
                                {payments.map((payment) => (
                                    <div>
                                        <Typography>
                                            <ListItem className={classes.listItem} key={payment.name}>
                                                <ListItemText primary={payment.name} />
                                                <div className={classes.priceItem}>
                                                    <Typography variant="body2">{payment.detail}</Typography>
                                                </div>
                                            </ListItem>
                                        </Typography>
                                    </div>
                                ))}
                            </AccordionDetails>
                        </Accordion>
                    </div>
                ))}
            </div>
        </body >
    );
}
