import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function ArtworkComponent({ favourites, setFavourites, query, setQuery }) {
  const [active, setActive] = useState(false);
  const items = useSelector((state) => state.allItems.items);

  const renderList = items.map((item) => {
    const { id, title, image_id, alt_text, date_display, artist_title, thumbnail } = item;

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
      <div key={id} className="card__container">
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
      </div>

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
