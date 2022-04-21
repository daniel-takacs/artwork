import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectedItem, removeSelectedItem } from "../../redux/actions/itemActions";
import './ArtworkDetails.css'
import ReactLoading from "react-loading";

function ArtworkDetails({ balls }) {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const item = useSelector((state) => state.item);
  const { artist_display, title, provenance_text, id, image_id, date_display, thumbnail } = item;
  const { itemId } = useParams();
  const dispatch = useDispatch();
  console.log(itemId);

  const fetchItemDetail = async (id) => {
    const response = await axios
      .get(`https://api.artic.edu/api/v1/artworks/${id}`)
      .catch((err) => {
        console.log(err);
      });
      setIsLoaded(true)
      dispatch(selectedItem(response.data.data));
  };
  useEffect(() => {
    if (itemId && itemId !== "") fetchItemDetail(itemId);
    return () => {
      dispatch(removeSelectedItem());
    };
  }, [itemId]);



  if (error) {
    return <>{error.message}</>
  } else if(!isLoaded) {
    return <div className="react-loading">
        <ReactLoading type={balls} color="#808080"delay="55" />
          </div>
  } else {

  return (
    <div>
      {Object.keys(item).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div class="card mb-3 justify-content-center align-items-center">
            <div class="card-body">
              <div class="text-center pic">
                <img
                  src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
                  class="img-fluid"
                  alt="Responsive image"
                />
              </div>
            </div>
          </div>
          <div className="details-content">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{date_display}</p>
              <p class="card-text">{artist_display}</p>
              <p class="card-text">{thumbnail.alt_text}</p>
          </div>
        </>
      )}
    </div>
  );
  }
}

export default ArtworkDetails;
