import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Card from "../../components/Card";
import "./home.css";
import { removePhoto } from "../../redux-toolkit/photoSlice";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const photos = useSelector((state) => state.photos.photos);
  console.log(photos);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRemoveImg = (photo) => {
    const removeImgId = photo.id;
    console.log("removeID:", removeImgId);
    const action = removePhoto(removeImgId);
    dispatch(action);
  };

  const handleEditImg = (photo) => {
    const photoId = photo.id;
    navigate(`/${photoId}`);
  };

  return (
    <>
      <div className="card-grid">
        {photos.map((photo, index) => (
          <Card
            key={index}
            title={photo.title}
            imgURL={photo.photo.preview}
            onRemoveImg={() => handleRemoveImg(photo)}
            onEditImg={() => handleEditImg(photo)}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
