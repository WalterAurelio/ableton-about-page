import PropTypes from "prop-types";
import paragraphsArray from "../assets/paragraphs";

function Paragraph({ paragraphId }) {
  const { title, description } = paragraphsArray.find(p => p.id === paragraphId);

  return (
    <section className="paragraph">
      <h3 className="title">{ title }</h3>
      <p className="description">{ description }</p>
    </section>
  )
}

Paragraph.propTypes = {
  paragraphId: PropTypes.number
}

export default Paragraph;