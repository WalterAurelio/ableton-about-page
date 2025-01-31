import PropTypes from "prop-types";
import { bottomCategories } from '../assets/bottomCategories';
import { FaFacebookF, FaYoutube, FaInstagram, FaXTwitter } from "react-icons/fa6";

function BottomCategory({ category }) {
  const { categoryName, options } = bottomCategories.find(c => c.categoryName === category);

  return (
    <div className="category_container" >
      <p className="category_name">{ categoryName !== 'Ableton' && categoryName }</p>
      {
        options.map((option, index) =>
          <a key={index} href="#" className="category_option">
            {option} &gt;
          </a>
        )
      }
      {
        categoryName === 'Ableton' &&
        <div className="social_container">
          <div className="icon_container">
            <FaFacebookF className="icon" />
          </div>
          <div className="icon_container">
            <FaXTwitter className="icon" />
          </div>
          <div className="icon_container">
            <FaYoutube className="icon" />
          </div>
          <div className="icon_container">
            <FaInstagram className="icon" />
          </div>
        </div>
      }
    </div>
  )
}

BottomCategory.propTypes = {
  category: PropTypes.string
}

export default BottomCategory