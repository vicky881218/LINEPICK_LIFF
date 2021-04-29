import React,{ useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import VisibilityIcon from "@material-ui/icons/Visibility";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  market: {
    borderWidth: 1,
    borderColor: "#6b7f94",
  },
  marketTitle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#6b7f94",
    fontWeight: "bold",
  },
  marketDesc: {
    display: "flex",
    flexDirection: "column",
    padding: 8,
    alignItems: "center",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    padding: 15,
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardButton: {
    color: "#8C7599",
    fontWeight: "bold",
    fontSize: 20,
    textDecoration: "underline",
  },
  visit: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
}));

const sellerPost = [
  {
    market_name: "日韓代購",
    market_desc: "歡迎蒞臨台灣時尚網購新據點！",
    seller_phone: "0912345678",
    seller_mail: "23@gmail.com",
  },
];

export default function Home() {
  const [productPosts, setProductPosts] = useState([]);
  // const [seller, setSellerPost] = useState([]);


  useEffect(() => {
    async function fetchData() {
      console.log("in Type useEffect:");
      const homeProduct = await axios.get("/Home");
      console.log("homeProduct:");
      console.log(homeProduct.data);
      setProductPosts(homeProduct.data);
      console.log("productPosts:" + productPosts);
    }
    fetchData();
  }, []);

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.root}>
        <body>
          {sellerPost.map((seller) => (
            <div className={classes.market}>
              <div className={classes.marketTitle}>
                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                  {seller.market_name}
                </Typography>
              </div>
              <Divider />
              <div className={classes.marketDesc}>
                <Typography variant="subtitle1" color="textSecondary">
                  {<span> {seller.market_desc} </span>}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {<span>聯絡電話: {seller.seller_phone} </span>}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {<span>聯絡信箱: {seller.seller_mail} </span>}
                </Typography>
              </div>
            </div>
          ))}
          <Grid container spacing={5}>
            {productPosts.map((post) => (
              <Grid item key={post} xs={12} sm={6} md={4}>
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
                      <Link to={"/ProductsInfo/" + post.productName}>
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
    </React.Fragment>
  );
}
