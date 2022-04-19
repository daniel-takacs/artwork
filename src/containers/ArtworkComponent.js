import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFavourites } from "../redux/actions/itemActions";

function ArtworkComponent() {
  const items = useSelector((state) => state.allItems.items);
  const favorites = useSelector((state) => state.allFavourites.favorites)
  const dispatch = useDispatch();

  const renderList = items.map((item) => {
    const { id, title, price, image_id } = item;

    const addToFavorite = (e) => {
      e.preventDefault();
     console.log(id)
     dispatch(setFavourites(id))
    };
    console.log('fav',favorites)
   
    return (
      <div key={id} className="col-sm-6 col-md4 v my-2">
        <Link to={`/item/${id}`}>
          <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
            <div className="card-body">
              <img
                src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
                class="card-img-top"
                alt="Girl in a jacket"
                width="500"
                height="600"
              />
              <h5 className="card-title">{title}</h5>
              <button onClick={addToFavorite}>favorite</button>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
}

export default ArtworkComponent;
