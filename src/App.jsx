import Navbar from './components/Navbar';
import Hero from './layout/Hero';
import Paragraph from './components/Paragraph';
import ImageCollage from './components/ImageCollage';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='paragraph_container'>
        <Paragraph paragraphId={1} />
      </div>
      <ImageCollage positionBg={'right'} />

      <div className='paragraph_container'>
        <Paragraph paragraphId={2} />
      </div>
      <div className='paragraph_container'>
        <Paragraph paragraphId={3} />
      </div>
      <div className='paragraph_container'>
        <Paragraph paragraphId={4} />
      </div>
      <div className='paragraph_container'>
        <Paragraph paragraphId={5} />
      </div>
      <div className='paragraph_container'>
        <Paragraph paragraphId={6} />
      </div>
      {/* <ImgLayout_1 /> */}
    </div>
  );
}
export default App;
