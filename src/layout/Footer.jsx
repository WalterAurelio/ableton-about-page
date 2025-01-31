import BottomCategory from "../components/BottomCategory";
import LanguageSelection from "../components/LanguageSelection";
import abletonLogo from '../assets/img/webp/ableton-logo.webp';

function Footer() {
  return (
    <footer className="footer_container">
      <h3>Ableton</h3>

      <div className="categories_container">
        <BottomCategory category='Ableton' />
        <BottomCategory category='Education' />
        <div className="newsletter_container">
          <p>Sign up to our newsletter</p>
          <p className="description">Enter your email address to stay up to date with the latest offers, tutorials, downloads and more.</p>
          <input className="email_input" type="email" placeholder="Email Address" />
          <button className="signup_button" type="submit">Sign Up</button>
        </div>
        <BottomCategory category='Community' />
        <BottomCategory category='Distributors' />
        <LanguageSelection />
      </div>

      <div className="legals_container">
        <a href="#" className="legal">Archive</a>
        <a href="#" className="legal">Contact Us</a>
        <a href="#" className="legal">Press Resources</a>
        <a href="#" className="legal">Legal Info</a>
        <a href="#" className="legal">Privacy Policy</a>
        <a href="#" className="legal">Cookie Settings</a>
        <a href="#" className="legal">Imprint</a>

        <div className="madein_container" >
          <p>Made In Berlin</p>
          <img className="ableton_logo" src={abletonLogo} alt="ableton_logo" />
        </div>
      </div>
    </footer>
  )
}
export default Footer