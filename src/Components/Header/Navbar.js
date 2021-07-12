import { Link } from "react-router-dom";
import './Navbar.scss';

function Navbar() {
    return (
        <div className="Navbar-Desktop">
            <ul class="content-wrapper header-nav-list">

                <li class="nav-group"><Link className="nav-item" to='/'>Home</Link></li>

                <li class="nav-group">
                    <button class="nav-item">Results</button>
                    <ul class="dropdown">
                        <li><a class="nav-item" href="">2020 Results</a></li>
                        <li><a class="nav-item" href="">2019 Results</a></li>
                        <li><a class="nav-item" href="">2018 Results</a></li>
                        <li><a class="nav-item" href="">2017 Results</a></li>
                    </ul>
                </li>

                <li class="nav-group">
                    <button class="nav-item">Info</button>
                    <ul class="dropdown">
                        <li><a class="nav-item" href="">Meet Schedule</a></li>
                        <li><a class="nav-item" href="">Practice Times</a></li>
                        <li><a class="nav-item" href="">Parent Guide</a></li>
                        <li><a class="nav-item" href="">Varsity Letter Criteria</a></li>
                    </ul>
                </li>

                <li class="nav-group"><Link className="nav-item" to='/contact'>Coaches</Link></li>


            </ul>
        </div>
    );
}

export default Navbar;