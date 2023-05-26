import PropTypes from "prop-types";

import Thumb from "../Thumb";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

import NoImage from "../../images/no_image.jpg";

import { Wrapper, Content, Text } from "./MovieInfo.styles";

export default function MovieInfo({ movie }) {
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        />
        <Text>
          <h1>{movie.title}</h1>
          <p>PLOT</p>
          <p>{movie.overview}</p>

          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">
                {parseFloat(movie.vote_average).toFixed(2)}
              </div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors?.length > 1 ? "S" : ""}</h3>
              {movie.directors?.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
}

MovieInfo.propTypes = {
  movie: PropTypes.object,
};
