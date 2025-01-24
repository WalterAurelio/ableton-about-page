import Navbar from './components/Navbar';
import Hero from './layout/Hero';
import Paragraph from './components/Paragraph';
import ImageCollage from './components/ImageCollage';
import picsForCollage from './assets/picsForCollage';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='paragraph_container'>
        <Paragraph paragraphId={1} />
      </div>

      <ImageCollage positionBg={'right'} imgs={picsForCollage[0].images} colorBg={'amarillo'} />
      <div className='paragraph_container'>
        <Paragraph paragraphId={2} />
      </div>

      <div className='paragraph_container'>
        <Paragraph paragraphId={3} />
      </div>

      <ImageCollage positionBg={'left'} imgs={picsForCollage[1].images} reverse colorBg={'verde'}/>
      <div className='paragraph_container'>
        <Paragraph paragraphId={4} />
      </div>

      <div className='paragraph_container'>
        <Paragraph paragraphId={5} />
      </div>

      <ImageCollage positionBg={'center'} imgs={picsForCollage[2].images} colorBg={'violeta'}/>
      <div className='paragraph_container'>
        <Paragraph paragraphId={6} />
      </div>
      {/* <ImgLayout_1 /> */}
    </div>
  );
}
export default App;
