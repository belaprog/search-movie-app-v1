import { Link } from "react-router-dom";
import { Image } from "./Thumb.styles";

export default function Thumb({ image, movieId, clickable }) {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="Movie Thumbnail" />
        </Link>
      ) : (
        <Image src={image} alt="Movie Thumbnail" />
      )}
    </div>
  );
}
