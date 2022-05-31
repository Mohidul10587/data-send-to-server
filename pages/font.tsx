import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faSearch,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

const Home2 = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faSearch}
        style={{ fontSize: 100, color: "blue" }}
      />

      <FontAwesomeIcon
        icon={faAmbulance}
        style={{ fontSize: 100, color: "orange" }}
      />

      <FontAwesomeIcon
        icon={faAnchor}
        style={{ fontSize: 100, color: "green" }}
      />
    </div>
  );
};

export default Home2;