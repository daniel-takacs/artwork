import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import axios from "axios"

function Favourites({ favourites }) {

  const [fetchFavourites, setFetchFavourites] = useState([])

  let mappedFavourites = favourites.map((item) => <li>{item}</li>)
  
  
  useEffect(() => {
    const fetchData = async () => {
      const responses = await Promise.all(
        favourites.map((id) => axios.get(`https://api.artic.edu/api/v1/artworks/${id}`))
      )
      setFetchFavourites(responses.map((res) => res.data.data))
    }
  
    fetchData()
  }, [setFetchFavourites])
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
console.log('az oldaon', fetchFavourites)
  return (
    <>
  <div>{fetchFavourites.map((item) => (
    <div className='container'>
      <div className='row m-2'>
        <div className="col-sm-6 col-md4 v my-2">
      <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
      <div className="card-body">
        <img
          src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
          class="card-img-top"
          alt="Girl in a jacket"
          width="500"
          height="600"
        />
        <h5 className="card-title">{item.title}</h5>
      </div>
    </div>
    </div>
    </div>
    </div>
  ))}</div>
    </>
  )
}

export default Favourites