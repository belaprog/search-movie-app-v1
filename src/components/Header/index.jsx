import { Link } from "react-router-dom";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImage, TMDBLogoImage } from "./Header.styles";

export default function Header() {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImage src={RMDBLogo} alt="Logo RMDB App" />
        </Link>
        <TMDBLogoImage src={TMDBLogo} alt="Logo TMDB" />
      </Content>
    </Wrapper>
  );
}
