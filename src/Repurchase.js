import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const products = [
    { name: '白色戀人巧克力', style: '黑巧克力(24入)', photo: 'https://source.unsplash.com/random', price: '700' },
    { name: '韓國星巴克櫻花杯', style: '雙層玻璃杯', photo: 'https://source.unsplash.com/random', price: '780' },
];

const useStyles = makeStyles({
    content: {
        padding: 5,
    },
    title: {
        color: "#6b7f94",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 15,
    },
    controls: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingBottom: 5,
    },
    listItem: {
        padding: 10,
    },
    priceItem: {
        justifyContent: 'space-around',
    },
    submit: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    total: {
        color: "#77773c",
        fontSize: 18,
    },
    nextStep: {
        color: "#8C7599",
        fontSize: 18,
        fontWeight: "bold",
        textDecoration: "underline",
    },
});

export default function Repurchase(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog onClose={handleClose} open={open} >
            <div className={classes.content}>
                <div className={classes.title}>
                    <ShoppingCartIcon fontSize="medium" />
                    回購商品
                </div>
                <Divider />
                {products.map((product) => (
                    <div className={classes.listItem}>
                        <Typography>
                            <ListItem key={product.name}>
                                <ListItemText primary={product.name} secondary={product.style} />
                                <div className={classes.priceItem}>
                                    <Typography variant="body2">{<span> $ {product.price}</span>}</Typography>
                                </div>
                            </ListItem>
                            <div className={classes.controls}>
                                <Button size="small" className={classes.icon}>
                                    <RemoveCircleOutlineIcon fontSize="small" />
                                </Button>
                                <Input ></Input>
                                <Button size="small" className={classes.icon}>
                                    <AddCircleOutlineIcon fontSize="small" />
                                </Button>
                            </div>
                        </Typography>
                    </div>
                ))}
                <div className={classes.submit}>
                    <Button size="medium" className={classes.total}>
                        <AttachMoneyIcon />
                    總金額:{ }元
                    </Button>
                    <Button size="large" className={classes.nextStep}>
                        前往結帳
                    <NavigateNextIcon />
                    </Button>
                </div>
            </div>
        </Dialog>
    );
}

Repurchase.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};
