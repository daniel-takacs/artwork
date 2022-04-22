import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  selectedItem,
  removeSelectedItem,
} from "../../redux/actions/itemActions";
import "./ArtworkDetails.css";
import ReactLoading from "react-loading";

function ArtworkDetails({ balls }) {
  const item = useSelector((state) => state.item);
  const [dataDetails, setDataDetails] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { image_id, date_display } = item;
  const { itemId } = useParams();
  const { label } = dataDetails;
  const dispatch = useDispatch();

  const fetchItemDetail = async (id) => {
    const response = await axios
      .get(`https://api.artic.edu/api/v1/artworks/${id}`)
      .catch((err) => {
        console.log(err);
      });
    setIsLoaded(true);
    dispatch(selectedItem(response.data.data));
  };

  const fetchDetails = async (id) => {
    const response = await axios
      .get(`https://api.artic.edu/api/v1/artworks/${id}/manifest.json`)
      .catch((err) => {
        console.log(err);
      });
    setIsLoaded(true);
    setDataDetails(response.data);
  };

  useEffect(() => {
    if (itemId && itemId !== "") fetchItemDetail(itemId);
    fetchDetails(itemId);
    return () => {
      dispatch(removeSelectedItem());
    };
  }, [itemId]);

  console.log(dataDetails);

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return (
      <div className="react-loading">
        <ReactLoading type={balls} color="#808080" delay="55" />
      </div>
    );
  } else {
    return (
      <div>
        {Object.keys(dataDetails).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <>
            <div class="card mb-3 justify-content-center align-items-center">
              <div class="card-body">
                <div class="text-center pic">
                  <img
                    src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="details-content">
              <h2 class="card-title">{label}</h2>
              <p class="card-text">{date_display}</p>
              <p class="card-text">{dataDetails["description"][0]["value"]}</p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h4>&nbsp;{dataDetails["metadata"][0]["label"]}</h4>
                    </td>
                    <td>&nbsp;{dataDetails["metadata"][0]["value"]}</td>
                  </tr>
                  <tr>
                    <td>
                      <h4>&nbsp;{dataDetails["metadata"][1]["label"]}</h4>
                    </td>
                    <td>&nbsp;{dataDetails["metadata"][1]["value"]}</td>
                  </tr>
                  <tr>
                    <td>
                      <h4>&nbsp;{dataDetails["metadata"][2]["label"]}</h4>
                    </td>
                    <td>&nbsp;{dataDetails["metadata"][2]["value"]}</td>
                  </tr>
                  <tr>
                    <td>
                      <h4>&nbsp;{dataDetails["metadata"][3]["label"]}</h4>
                    </td>
                    <td>&nbsp;{dataDetails["metadata"][3]["value"]}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default ArtworkDetails;
