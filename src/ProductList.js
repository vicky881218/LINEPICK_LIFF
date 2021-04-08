import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';
import ProductPost from './ProductPost';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinePickPhoto from './LinePickPhoto';

const useStyles = makeStyles({
    root: {
   
      width: "50%", 
    },
    media: {
      height: 400,
    },
    card:{
      width:"50%",
    },
    container:{
        display:"flex",
        flexDirection:"row",
        
        paddingTop:"2%",
        paddingBlockEnd:"2%",
       
    }
  });
  const sections = [
    { title: '日韓食品', url: '#' },
    { title: '日韓唇彩', url: '#' },
    { title: '日韓眼妝', url: '#' },
  ];
  
  const productPosts = [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
  
  ];
 
 
  
  export default function ProductList() {
    const classes = useStyles();
    console.log("here")
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
        <Header title="Line Pick" sections={sections}/>
        <div className={classes.container}>
        <div align="center" className={classes.card}>
        <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cf.creatrip.com/original/blog/6727/422wpx6pyvx389ldlwyolzzp18bgo9m0.png?f=webp&q=80&d=500"
          title="Contemplative Reptile"
        />
        
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    <div align="center" className={classes.card}>
        <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cf.creatrip.com/original/blog/6727/422wpx6pyvx389ldlwyolzzp18bgo9m0.png?f=webp&q=80&d=500"
          title="Contemplative Reptile"
        />
        
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>
        </Container>
        
        <Footer title="Footer" description="Something here to give the footer a purpose!" />
      </React.Fragment>
    );
  }