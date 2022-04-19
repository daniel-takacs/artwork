import React,{useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import axios from "axios"
import { setFavourites } from "../redux/actions/itemActions";

function Favourites() {
  const favourites = useSelector((state) => state.allFavourites.favorites)


/*   const favourites = useSelector((state) => state.allFavourites.favourites);
  const { id } = favourites;
  const dispatch = useDispatch();


  const fetchFavourites = async () => {
    const response = await axios
      .get(`https://api.artic.edu/api/v1/artworks/${id}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(setFavourites(response.data.data));
  };

  useEffect(() => {
    fetchFavourites();
  }, []); */

  return (
    <>
    <div>favourites</div>
    <p>{favourites}</p>
    </>
  )
}

export default Favourites