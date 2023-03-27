import { FormControl, Button } from "@mui/material";
import React from "react";

const Photo = (props) => {
  const { image, onChooseButtonBlur, onChangeImage } = props;

  //   const [image, setImage] = useState([]);

  //   useEffect(() => {
  //     return () => {
  //       image && URL.revokeObjectURL(image.preview);
  //     };
  //   }, [image]);

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    if (e.target.files.length !== 0) {
      file.preview = URL.createObjectURL(file);
      onChangeImage(file);
    }
  };

  return (
    <FormControl className="form-container">
      <Button variant="contained" component="label" onBlur={onChooseButtonBlur}>
        Choose Image
        <input type="file" onChange={handleChangeImage} hidden />
      </Button>
      {image && <img src={image.preview} alt="" width="50%" />}
    </FormControl>
  );
};

export default Photo;
