import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectedItem, removeSelectedItem } from "../redux/actions/itemActions";

function ArtworkDetails() {
  const item = useSelector((state) => state.item);
  const { artist_title, title, provenance_text, id, image_id } = item;
  const { itemId } = useParams();
  const dispatch = useDispatch();
  console.log(itemId);

  const fetchItemDetail = async (id) => {
    const response = await axios
      .get(`https://api.artic.edu/api/v1/artworks/${id}`)
      .catch((err) => {
        console.log(err);
      });

    dispatch(selectedItem(response.data.data));
  };
  useEffect(() => {
    if (itemId && itemId !== "") fetchItemDetail(itemId);
    return () => {
      dispatch(removeSelectedItem());
    };
  }, [itemId]);
  return (
    <div>
      {Object.keys(item).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div class="card mb-3 ">
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{provenance_text}</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <img src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`} class="card-img" alt="..." />
            </div>
          </div>

        </>
      )}
    </div>
  );
}

export default ArtworkDetails;
