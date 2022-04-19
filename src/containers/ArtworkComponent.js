import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function ArtworkComponent({ favourites, setFavourites, query, setQuery }) {

  const [active, setActive] = useState(false)
  const items = useSelector((state) => state.allItems.items);

  const renderList = items.map((item) => {
    const { id, title, image_id, alt_text } = item;
 
  /*   const addToFavourite = (e) => {
      e.preventDefault()
      setFavourites(...prevFavourites => [...prevFavourites, id])
      console.log(id);
    }; */
    const addToFavourite = (e,id) => {
      e.preventDefault()
      if (!favourites.includes(id)) setFavourites(favourites.concat(id));
      console.log(id);
      setActive(!active)
    };
   
    return (
      <div key={id} className="col-sm-6 col-md4 v my-2">
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
              <FavoriteBorderIcon onClick={(e)=>addToFavourite(e,id)} style={{fill: "red"}}/>} */}
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
}

export default ArtworkComponent;
