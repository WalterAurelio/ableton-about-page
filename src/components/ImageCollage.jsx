import PropTypes from "prop-types";

function ImageCollage({ positionBg, imgs, reverse, colorBg }) {

  return (
    <div className="collage_container">
      <div className={`bg_color ${positionBg} ${colorBg}`}></div>
    
      <div className={`images_container ${ reverse ? 'switch_sides': '' }`}>
        <div className="img_container">
          <img src={imgs[0]} alt="live_mixing" />
        </div>
        <div className="img_container">
          <img src={imgs[1]} alt="dj_mixing" />
          { imgs.length > 2 && <img src={imgs[2]} alt="dj_mixing" />}
        </div>
      </div>
    </div>
  );
}

ImageCollage.propTypes = {
  positionBg: PropTypes.string,
  imgs: PropTypes.array,
  reverse: PropTypes.bool,
  colorBg: PropTypes.string
}

export default ImageCollage;