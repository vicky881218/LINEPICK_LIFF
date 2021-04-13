import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import Checkout from './Checkout'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  card: {
    display: 'flex',
    width:'auto',
    height: 500
    
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    display:'block',
    width: '40%',
    margin:'3%',
  },
}));

export default function ProductPost(props) {
  const classes = useStyles();
  const { post } = props;
  console.log ("in productPost:");
  return (
    <Grid>
        <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} image={post.productPhoto} />
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.productName}
              </Typography>
              {/* <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography> */}
              <Typography variant="subtitle1" paragraph>
                {post.productDesc}
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
    </Grid>
  );
}

ProductPost.propTypes = {
  post: PropTypes.object,
};





