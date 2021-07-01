import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
        <Link to='/'>Home</Link>
        <Link to='/practiceInfo'>practiceInfo</Link>
        <Link to='/faq'>FAQ</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/licenses'>Licenses</Link>
    </div>
  );
}

export default Footer;