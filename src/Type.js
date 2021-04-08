import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';
import ProductPost from './ProductPost';

import LinePickPhoto from './LinePickPhoto';

  
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
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://miro.medium.com/max/2560/1*ibFFdpwZYeDfIQ8tm0ss-A.jpeg',
      imageText: 'Image Text',
    },
  ];

  const linePickPhoto = {
    title: 'Title of a longer featured blog post',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
  };
  
  export default function Type() {

    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
        <Header title="Line Pick" sections={sections}/>
        <main>
          <LinePickPhoto post={linePickPhoto} />
           <Grid container spacing={4}>
            {productPosts.map((post) => (
              <ProductPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
        </Container>
        <Footer title="Footer" description="Something here to give the footer a purpose!" />
      </React.Fragment>
    );
  }