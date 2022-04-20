import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import axios from "axios"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

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
  return (
    <>
      <Grid container spacing={5} justifyContent="center">
        {fetchFavourites.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>

          </Grid>

          /*     <div className='row m-2'>
                <div className="col-sm-6 col-md4 v my-2">
              <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
              <div className="card-body">
                <img
                  src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
                  class="card-img-top img-fluid"
                  alt="Responsive image"
                />
                <h5 className="card-title">{item.title}</h5>
              </div>
            </div>
            </div>
            </div> */


        ))}
      </Grid>

    </>
  )
}

export default Favourites