import React from 'react';
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

const productPosts = [
    {
        product_desc: '是北海道一種著名的巧克力夾心薄餅，於2塊餅乾中夾著一層的白巧克力。及後有黑色的牛奶巧克力口味。',
        product_name: '白色戀人巧克力 ',
    },
];

const productItemPosts = [
    {
        product_style: '黑巧克力(24入)',
        product_photo: 'https://source.unsplash.com/random',
        product_price: '750',
    },
    {
        product_style: '白巧克力(24入)',
        product_photo: 'https://source.unsplash.com/random',
        product_price: '750',
    },
];

export default function ProductsInfo() {

    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container className={classes.root}>
                <Grid className={classes.grid} item xs={12}>
                    {productPosts.map((post) => (
                        <Grid item key={post} item xs={12}>
                            <div className={classes.productTitle}>
                                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                                    {post.product_name}
                                </Typography>
                            </div>
                            <Divider />
                            <div className={classes.productDesc}>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {post.product_desc}
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
                                                        <RadioGroup aria-label="payment">
                                                            {productItemPosts.map((item) => (
                                                                <FormControlLabel value={item.product_style} control={<Radio color="primary" />} label={<span>{item.product_style}  /  {item.product_price} 元</span>} />
                                                            ))}
                                                        </RadioGroup>
                                                    </FormControl>
                                                </div>
                                            </Typography>
                                        </CardContent>
                                        <div className={classes.controls}>
                                            <Button size="medium" className={classes.icon}>
                                                <RemoveCircleOutlineIcon fontSize="medium" />
                                            </Button>
                                            <Input ></Input>
                                            <Button size="medium" className={classes.icon}>
                                                <AddCircleOutlineIcon fontSize="medium" />
                                            </Button>
                                        </div>
                                        <div className={classes.total}>
                                            <Button size="small" className={classes.totalIcon}>
                                                <AttachMoneyIcon />
                                                { }元
                                                </Button>
                                        </div>
                                        <CardActions className={classes.buy}>
                                            <Button className={classes.cardButton}>
                                                <ShoppingCartIcon />
                                                        Pick
                                                    </Button>
                                        </CardActions>
                                    </div>
                                </Card>
                            </Slide>
                            <Grid className={classes.productPhoto} item xs={12}>
                                {productItemPosts.map((item) => (
                                    <GridList cellHeight={180} className={classes.gridList}>
                                        <GridListTile key={item} className={classes.gridListItem}>
                                            <img src={item.product_photo} alt={item.product_photo} />
                                            <GridListTileBar
                                                title={item.product_style}
                                                subtitle={<span>售價: {item.product_price}元</span>}
                                            />
                                        </GridListTile>
                                    </GridList>
                                ))}
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}