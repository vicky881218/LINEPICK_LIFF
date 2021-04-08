import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';
import Try from './Try';
import LinePickPhoto from './LinePickPhoto';
//import ProductPost from './ProductPost';

  
  const sections = [
    { title: '日韓食品', url: '#' },
    { title: '日韓唇彩', url: '#' },
    { title: '日韓眼妝', url: '#' },
  ];
  
  const tryPost = [
    {
      title:"Shrimp and ",
      image: 'https://source.unsplash.com/random',
      description:
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',      
    },
    {
      title:"Shrimp and hi",
      image: 'https://source.unsplash.com/random',
      description:
        'This impressive paella is  a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',      
    }
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

    console.log("here")
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
        <Header title="Line Pick" sections={sections}/>
        <main>
          <LinePickPhoto post={linePickPhoto} />
           <Grid container spacing={1}>
            {tryPost.map((post) => (
              <Try key={post.title} post={post} />
            ))}
          </Grid>
        </main>
        </Container>
        <Footer title="Footer" description="Something here to give the footer a purpose!" />
      </React.Fragment>
    );
  }