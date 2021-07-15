import { Link } from "react-router-dom";
import './Footer.scss';

function Footer() {
  return (
    <div className="Footer">

<div class="philosophy">
                <h2>Program Philosophy:</h2>
                <p>Everyone is important in Cross Country!  Nobody sits the bench.  Every runner is different in natural ability and talent. Regardless of your starting talent, everyone can become better with consistent intelligent training.</p>
                <p>The skills learned in cross country can be used by athletes to become the following:</p>
                <ol>
                    <li>Better students</li>
                    <li>Better runners  </li>
                    <li>Better teammates </li>
                    <li>Productive adults</li>
                </ol>
            </div>
            <div className="links">
  <Link to='/'>Home</Link>
          <Link to='/practiceInfo'>practiceInfo</Link>
          <Link to='/faq'>FAQ</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/licenses'>Licenses</Link>
            </div>
        
    </div>
  );
}

export default Footer;