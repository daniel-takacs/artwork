import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import './ArtworkComponent.css'
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

function ArtworkComponent({ favourites, setFavourites, query, setQuery, input, setInput }) {
  const [active, setActive] = useState(false);
  const items = useSelector((state) => state.allItems.items);

  /* const search = (items) => {
    items.filter(item => {
      if (input === "") {
        return item
      } else if ( item.toLowerCase().includes(input.toLowerCase())) {
        return item
      }
    })
  } */
  const addToFavourite = (e, id) => {
    e.preventDefault();
    if (!favourites.includes(id)) setFavourites(favourites.concat(id));
    console.log(id);
    setActive(!active);
  };

const renderList = items.filter(item => {
  if (input.length === 0) {
    return item
  }else if (item.title.toLowerCase().includes(input.toLowerCase())) {
    return item
  }

}).map((item) => {
    const { id, title, image_id, date_display, artist_title  } = item;

    return (
     <Grid item xs={10} sm={6} md={4} lg={3} xl={2.4}>
        <Card key={id} sx={{ maxWidth: 345 }}>
          <Link to={`/item/${id}`} style={{ textDecoration: "none", color: "black" }}>
          <CardActionArea>
            <CardMedia className="card-image"
              component="img"
              height="340"
              image={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
              alt=""
            />
            <CardContent>
              <Typography className="list-title"gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {artist_title}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <div className="fav-icon">
              <IconButton aria-label="delete">
                <FavoriteIcon onClick={(e) => addToFavourite(e, id)} />
              </IconButton>
            </div>
          </CardActions>
            </Link>
        </Card>
      </Grid>
    )
  })
  return <>{renderList}</>;
}

export default ArtworkComponent