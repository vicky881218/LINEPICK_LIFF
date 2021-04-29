import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

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


export default function Type() {
  
  const  [productPosts, setProductPosts] =  useState([]);
  const { typeId } = useParams();
  const[sections,setSections]=useState([]);

useEffect(() => {

  async function fetchData () {
    console.log ("in Type useEffect:");
    console.log ("in TypeId:"+typeId);
    const result = await axios.get('/SecondType/'+typeId);
    const type = await axios.get("/Type");
    setSections(type.data);
    console.log ("result:");
    console.log(result.data);
    setProductPosts(result.data);  
    
  }
  fetchData();
},[typeId]);

  
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header  sections={sections} />
      <Container className={classes.root}>
      
        <body>
          <Grid container spacing={5} >
            {productPosts.map((post) => (
              <Grid item key={productPosts.productId} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={post.productPhoto}
                    title={post.productName}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.productName}
                    </Typography>
                    <Typography>
                      {<span>價格: {post.productPrice} 元</span>}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.visit}>
                      <Button className={classes.cardButton}>
                      <Link to={'/ProductsInfo/'+post.productName} >
                      <VisibilityIcon />
                           Pick
                        </Link>
                      </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </body> 
      </Container>
      <Footer title="Line Pick" description="Wish you a wonderful day !" />
    </React.Fragment>
  );
}