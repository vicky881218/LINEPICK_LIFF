import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import LinePickPhoto from './LinePickPhoto';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding: 15,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardButton: {
    color: '#8C7599',
    fontWeight: "bold",
    fontSize: 20,
    textDecoration: "underline",
  },
  visit: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
}));


const productPosts = [
  {
    product_photo: 'https://source.unsplash.com/random',
    product_name: '白色戀人巧克力 ',
    product_price: '750',
  },
  {
    product_photo: 'https://source.unsplash.com/random',
    product_name: '白色戀人巧克力 ',
    product_price: '750',
  },
  {
    product_photo: 'https://source.unsplash.com/random',
    product_name: '白色戀人巧克力 ',
    product_price: '750',
  },
  {
    product_photo: 'https://source.unsplash.com/random',
    product_name: '白色戀人巧克力 ',
    product_price: '750',
  },
  {
    product_photo: 'https://source.unsplash.com/random',
    product_name: '白色戀人巧克力 ',
    product_price: '750',
  },
];

const linePickPhoto = {
  image: 'https://source.unsplash.com/random',
};

export default function Type() {

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.root}>
        <body>
          <Grid container spacing={5} >
            {productPosts.map((post) => (
              <Grid item key={post} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={post.product_photo}
                    title={post.product_name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.product_name}
                    </Typography>
                    <Typography>
                      {<span>價格: {post.product_price} 元</span>}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.visit}>
                      <Button className={classes.cardButton}>
                        <VisibilityIcon />
                           Pick
                      </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </body>
      </Container>
    </React.Fragment>
  );
}