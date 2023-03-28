import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Card from "../../components/Card";
import "./home.css";
import { removePhoto } from "../../actions/photo";
const Home = () => {
  const photos = useSelector((state) => state.photo.photos);
  console.log(photos);
  const dispatch = useDispatch();

  const handleRemoveImg = (photo) => {
    const removeImgId = photo.id;
    console.log("removeID:", removeImgId);
    const action = removePhoto(removeImgId);
    dispatch(action);
  };

  return (
    <>
      <div className="card-grid">
        {photos.map((photo, index) => (
          <Card
            key={index}
            title={photo.title}
            imgURL={photo.values.photo.preview}
            onRemoveImg={() => handleRemoveImg(photo)}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
