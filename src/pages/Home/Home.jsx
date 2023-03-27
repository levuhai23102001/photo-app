import { useSelector } from "react-redux";
import React from "react";
import Card from "../../components/Card";
import "./home.css";
const Home = () => {
  const photos = useSelector((state) => state.photo.photos);
  console.log(photos);

  return (
    <>
      <div className="card-grid">
        {photos.map((photo, index) => (
          <Card
            key={index}
            title={photo.title}
            imgURL={photo.photo.preview}
            // category={photo.categoryId}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
