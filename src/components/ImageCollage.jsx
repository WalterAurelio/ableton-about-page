import PropTypes from "prop-types";
import img_1 from "../assets/img/alexander-uin5uf7ok0A-unsplash.jpg";
import img_2 from "../assets/img/soundgirls-women-in-audio-D1s0BxMOqhE-unsplash.jpg";

function ImageCollage({ positionBg }) {

  return (
    <div className="collage_container">
      <div className={`bg_color ${positionBg}`}></div>
    
      <div className="images_container">
        <div className="img_container">
          <img src={img_1} alt="live_mixing" />
        </div>
        <div className="img_container">
          <img src={img_2} alt="dj_mixing" />
        </div>
      </div>
    </div>
  );
}

ImageCollage.propTypes = {
  positionBg: PropTypes.string
}

export default ImageCollage