import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";

function Favourites({ favourites }) {
  const [fetchFavourites, setFetchFavourites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responses = await Promise.all(
        favourites.map((id) =>
          axios.get(`https://api.artic.edu/api/v1/artworks/${id}`)
        )
      );
      setFetchFavourites(responses.map((res) => res.data.data));
    };

    fetchData();
  }, [setFetchFavourites]);

  return (
    <>
      {favourites.length > 0 ? (
        <Grid container spacing={5} justifyContent="center">
          {fetchFavourites.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="340"
                    image={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
                    alt=""
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.artist_title}
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
          ))}
        </Grid>
      ) : (
        <div>No favourites added</div>
      )}
    </>
  );
}

export default Favourites;
