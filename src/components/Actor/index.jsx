import PropTypes from "prop-types";
import { Wrapper, Image } from "./Actor.styles";

export default function Actor({ name, character, imageUrl }) {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="Actor Thumbnail" />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
}

Actor.propTypes = {
  name: PropTypes.string,
  charcter: PropTypes.string,
  imageUrl: PropTypes.string,
};
