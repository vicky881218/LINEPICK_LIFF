import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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

const productPosts = [
    {
        product_name: '白色戀人巧克力 ',
    },
];

const productItemPosts = [
    {
        product_style: '黑巧克力(24入)',
        product_photo: 'https://source.unsplash.com/random',
        product_price: '750',
        product_stock: '20',
    },
    {
        product_style: '白巧克力(24入)',
        product_photo: 'https://source.unsplash.com/random',
        product_price: '750',
        product_stock: '50',
    },
];

export default function Cart() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <body className={classes.body}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <ShoppingCartIcon fontSize="medium" />
                    賴皮願望
                </div>
                <Divider className={classes.divider} />
                {productPosts.map((post) => (
                    <div>
                        {productItemPosts.map((item) => (
                            <FormGroup>
                                <Card className={classes.root} variant="outlined">
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color="primary"
                                                icon={<CheckBoxOutlineBlankIcon fontSize="medium" />}
                                                checkedIcon={<CheckBoxIcon fontSize="medium" />}
                                            />
                                        } className={classes.checkbox} />
                                    <div className={classes.details}>
                                        <CardContent className={classes.content}>
                                            <Typography component="h6" variant="h6">
                                                {post.product_name}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                {<span>品項: {item.product_style}</span>}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                {<span>售價: {item.product_price} 元</span>}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                {<span>庫存: {item.product_stock}</span>}
                                            </Typography>
                                        </CardContent>
                                        <div className={classes.controls}>
                                            <Button size="small" className={classes.icon}>
                                                <RemoveCircleOutlineIcon fontSize="small" />
                                            </Button>
                                            <Input ></Input>
                                            <Button size="small" className={classes.icon}>
                                                <AddCircleOutlineIcon fontSize="small" />
                                            </Button>
                                        </div>
                                        <div className={classes.item}>
                                            <Button size="small" className={classes.icon}>
                                                <DeleteIcon />
                                            移除
                                            </Button>
                                            <Button size="small" className={classes.icon}>
                                                <AttachMoneyIcon />
                                                { }元
                                            </Button>
                                        </div>
                                    </div>
                                    <CardMedia
                                        className={classes.cover}
                                        image={item.product_photo}
                                        title={post.product_name}
                                    />

                                </Card>

                            </FormGroup>
                        ))}
                    </div>
                ))}
                <div className={classes.submit}>
                    <Button size="medium" className={classes.total}>
                        <AttachMoneyIcon />
                    總金額:{ }元
                </Button>
                </div>
                <Divider className={classes.divider} />
                <Button size="large" className={classes.nextStep}>
                    前往結帳
                    <NavigateNextIcon />
                </Button>
            </div>
        </body >
    );
}
