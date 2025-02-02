import Navbar from './components/Navbar';
import Hero from './layout/Hero';
import Paragraph from './components/Paragraph';
import ImageCollage from './components/ImageCollage';
import picsForCollage from './assets/picsForCollage';
import LatestJobs from './layout/LatestJobs';
import Footer from './layout/Footer';
import imgMakers from './assets/img/webp/duncan-kidd-89IypmbKhZI-unsplash.webp';
import VideoCustom from './components/VideoCustom';

function App() {
  return (
    <div>
      <Navbar />

      <div className='tabs_container'>
        <a href='#'>About</a>
        <a href='#'>Jobs</a>
      </div>

      <Hero />
      <div className='paragraph_container'>
        <Paragraph paragraphId={1} />
      </div>

      <ImageCollage positionBg={'right'} imgs={picsForCollage[0].images} colorBg={'amarillo'} />
      <div className='paragraph_container'>
        <Paragraph paragraphId={2} />
      </div>

      <VideoCustom />

      <div className='paragraph_container'>
        <Paragraph paragraphId={3} />
      </div>

      <ImageCollage positionBg={'left'} imgs={picsForCollage[1].images} reverse colorBg={'verde'}/>
      <div className='paragraph_container'>
        <Paragraph paragraphId={4} />
      </div>

      <div className='makers_container'>
        <img className='makers_img' src={imgMakers} alt='meet_the_makers' />
        <p>Meet the makers: Ableton developers at work</p>
      </div>

      <div className='paragraph_container'>
        <Paragraph paragraphId={5} />
      </div>

      <ImageCollage positionBg={'center'} imgs={picsForCollage[2].images} colorBg={'violeta'}/>
      <div className='paragraph_container'>
        <Paragraph paragraphId={6} />
      </div>

      <LatestJobs />

      <Footer />

    </div>
  );
}
export default App;
