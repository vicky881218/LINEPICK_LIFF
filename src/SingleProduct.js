import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';
import ProductPost from './ProductPost';


  //因為header寫死
  const sections = [
    
  ];
  
  const productPosts = [
    {
      title: 'Single post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
  ];


  
  export default function SingleProduct() {

    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
        <Header sections={sections}/>
        <main>
           <Grid container spacing={4}>
            {productPosts.map((post) => (
              <ProductPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
        </Container>
      </React.Fragment>
    );
  }