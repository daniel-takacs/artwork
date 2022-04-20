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


function ArtworkComponent({ favourites, setFavourites, query, setQuery }) {
  const [active, setActive] = useState(false);
  const items = useSelector((state) => state.allItems.items);

  const renderList = items.map((item) => {
    const { id, title, image_id, date_display, artist_title  } = item;

    /*   const addToFavourite = (e) => {
      e.preventDefault()
      setFavourites(...prevFavourites => [...prevFavourites, id])
      console.log(id);
    }; */
    const addToFavourite = (e, id) => {
      e.preventDefault();
      if (!favourites.includes(id)) setFavourites(favourites.concat(id));
      console.log(id);
      setActive(!active);
    };

    return (

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4}>
        <Card key={id} sx={{ maxWidth: 345 }}>
          <Link to={`/item/${id}`} style={{ textDecoration: "none", color: "black" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="340"
              image={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
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


      /*     <li class="my__cards_item">
            <div key={id} class="my__card">
            <Link to={`/item/${id}`} style={{ textDecoration: "none", color: "black" }}>
              <div class="my__card_image"><img src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`} /></div>
              <div class="my__card_content">
                <h2 class="my__card_title">{title}</h2>
                <p class="my__card_text">{artist_title}</p>
                <div className="fav-icon">
                <IconButton aria-label="delete">
                  <FavoriteIcon onClick={(e)=>addToFavourite(e,id)}/>
                </IconButton>
    
                </div>
              </div>
              </Link>
            </div>
          </li> */

      /*   <div key={id} className="card__container">
          <Link to={`/item/${id}`} style={{ textDecoration: "none", color: "black" }}>
            <div className="card__image-container">
              <img src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`} style={{ width: "100%" }} alt={thumbnail.alt_text}/>
              </div>
              <div className="card__content">
              <h5 className="card__title text--medium">{title}, <span>{date_display}</span></h5>
              <div className="card__info">
              <p className="artist__title">{artist_title}</p>
              <div className="card__button text--medium">
              <FavoriteBorderIcon onClick={(e)=>addToFavourite(e,id)} style={{fill: "red"}}/>
              </div>
              </div>
              </div>
           
          </Link>
        </div> */

      /*   <div key={id} className="col-sm-6 col-md4 v my-2">
        <Link to={`/item/${id}`}>
          <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
            <div className="card-body">
              <img
                src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
                class="card-img-top"
                alt=""
              
              />
              <h5 className="card-title">{title}</h5>
              <FavoriteBorderIcon onClick={(e)=>addToFavourite(e,id)} style={{fill: "red"}}/>
      {/*         {active ? <FavoriteIcon/> : 
              <FavoriteBorderIcon onClick={(e)=>addToFavourite(e,id)} style={{fill: "red"}}/>} 
            </div>
          </div>
        </Link>
      </div> */
    );
  });

  return <>{renderList}</>;
}

export default ArtworkComponent;
