import React,{useState,useEffect} from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import ProductPost from './ProductPost';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Text from 'react-text';
import { useParams } from 'react-router';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import Checkout from './Checkout'
import { makeStyles } from '@material-ui/core/styles';

  // const productPosts = [
  //   {
  //     title: 'Single post',
  //     date: 'Nov 12',
  //     description:
  //       'This is a wider card with supporting text below as a natural lead-in to additional content.',
  //     image: 'https://source.unsplash.com/random',
  //     imageText: 'Image Text',
  //   },
  // ];

  // const useStyles = makeStyles((theme) => ({
  //   button: {
  //     margin: theme.spacing(1),
  //   },
  //   card: {
  //     display: 'flex',
  //     width:'auto',
  //     height: 500
      
  //   },
  //   cardDetails: {
  //     flex: 1,
  //   },
  //   cardMedia: {
  //     display:'block',
  //     width: '40%',
  //     margin:'3%',
  //   },
  // }));
  
  export default function SingleProduct() {

    const  [productPosts, setProductPosts] =  useState([]);
    const { id } = useParams();

  useEffect(() => {

    async function fetchData () {
      
      console.log ("p:"+id);
      const result = await axios.get('/SingleProduct');
      console.log ("result:"+result.data);
      console.log(result.data);
      console.log ("result:"+result.data.productId);
      setProductPosts(result.data);
      
      
    }
    fetchData();
  },[]);
  //const classes = useStyles();
    // let a =  Array.of(productPosts);
    // console.log ("Desc:"+productPosts.productDesc);
    // console.log ("a name:"+a);
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" height="100%">
        <Header />
        <main>
       
           <Grid >
          
           {/* <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} image={productPosts.productPhoto} />
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {productPosts.productName}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {productPosts.productDesc}
              </Typography>
              <Typography variant="subtitle1" color="primary">
              <div>

      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      ><Link to='/Checkout'> 購買</Link>
       
      </Button>

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
      >
        加入購物車
      </Button>

    </div>
              </Typography>
            </CardContent>
          </div>

        </Card> 
      */}      
            {productPosts.map((productPost) => (
              <ProductPost key={productPost.productId} post={productPost} />    
              ))}
            
          </Grid>
         
        </main>
        </Container>
      </React.Fragment>
    );
  }