import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import PaymentPost from './PaymentPost';
const paymentPosts = [
  {
    title: 'Line Pay',
  },
  {
    title: '匯款',
  },
];

export default function PaymentForm() {


  return (
    <React.Fragment>
      <CssBaseline />
      <main>
           <Grid container spacing={4}>
            {paymentPosts.map((post) => (
              <PaymentPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
    </React.Fragment>
  );
}
