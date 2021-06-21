import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Truncate from "react-truncate";
import { useHistory } from "react-router";
import { storeContext } from "../../contexts/StoreContext";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { IconButton } from "@material-ui/core";
import { notifySuccess } from "../../helpers/notifiers";
import purple from "@material-ui/core/colors/purple";
import GradeIcon from "@material-ui/icons/Grade";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    background: "rgb(227,227,241)",
    background:
      "linear-gradient(90deg, rgba(227,227,241,1) 27%, rgba(168,220,231,1) 100%)",
    boxShadow: "0px -1px 12px 5px rgba(0,0,0,0.57)",
  },
  media: {
    height: 170,
  },
  description: {
    height: 100,
    marginTop: 20,
  },
  // cartIconActive: {
  //   color: "primary",
  // },
  // cartIconAnactive: {
  //   color: "secondary",
  // },
});

export default function ProductItem({ data }) {
  const classes = useStyles();

  const { title, images, price, description, id, duration, country, brand } =
    data;
  const {
    addProductToCart,
    cart,
    getCart,
    changeProductCount,
    addProductToFavorite,
    favorite,
    getFavorite,
  } = useContext(storeContext);

  const history = useHistory();
  const [cartState, setCartState] = useState("primary");
  const [favoriteState, setFavoriteState] = useState("primary");

  useEffect(() => {
    getCart();
    getFavorite();
  }, []);
  const saveToCartBtn = () => {
    setCartState("secondary");
  };
  const rmvFromCartBtn = () => {
    setCartState("primary");
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={images[0]} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Truncate
              lines={2}
              ellipsis={"..."}
              style={{ fontWeight: "bold", color: "#005a8d" }}
            >
              {title}
            </Truncate>
          </Typography>

          <Typography variant="h6">{price} руб</Typography>
          <Typography variant="h6">Страна: {country}</Typography>
          <Typography variant="h6">Длительность: {duration}</Typography>

          <Typography
            className={classes.description}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            <Truncate lines={3} ellipsis={"..."}>
              {description}
            </Truncate>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton
          onClick={(e) => {
            addProductToCart(data);
            // setCartState("secondary");
            cart.products.forEach((product) => {
              product.item.id === id
                ? setCartState("primary")
                : setCartState("secondary");
            });
          }}
          color={cartState}
          id="cartIcon"
        >
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton
          onClick={(e) => {
            addProductToFavorite(data);
            // setCartState("secondary");
            favorite.products.forEach((product) => {
              product.item.id === id
                ? setFavoriteState("primary")
                : setFavoriteState("secondary");
            });
          }}
          color={favoriteState}
          id="cartIcon"
        >
          <GradeIcon />
        </IconButton>
        <Button
          onClick={() => history.push(`/products/${id}`)}
          size="small"
          color="primary"
        >
          Подробнее
        </Button>
      </CardActions>
    </Card>
  );
}
