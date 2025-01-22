import img_1 from '../assets/img/alexander-uin5uf7ok0A-unsplash.jpg'
import img_2 from '../assets/img/soundgirls-women-in-audio-D1s0BxMOqhE-unsplash.jpg'

function ImgLayout_1() {
  return (
    <div className="layout-container">
      <div className="left-side"></div>
      <div className="right-side"></div>
      <div className="imgs-container">
        <div className="img-uno-container">
          <img src={img_1} alt="img_producer" className="img_producer" />
        </div>
        <div className="img-dos-container">
          <img src={img_2} alt="img_dj" className="img_dj" />
        </div>
      </div>
    </div>
  )
}

export default ImgLayout_1