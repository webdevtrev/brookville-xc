import { Link } from "react-router-dom";
import './Navbar.scss';
import {useState, useEffect} from 'react';
import sanityClient from '../../client';

function Navbar() {

    const [years, setYears] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "results"]{
              year
        }`
            )
            .then((data) => {
                setYears(data)
            })
            .catch(console.error);
    }, []);


    return (
        <div className="Navbar-Desktop">
            <ul className="content-wrapper header-nav-list">

                <li className="nav-group"><Link className="nav-item" to='/' >Home</Link></li>

                <li className="nav-group">
                    <button className="nav-item">Results</button>
                    <ul className="dropdown">
                        {years?.map((year)=>{
                            return <li key={year.year}><Link className="nav-item" to={'/results/'+year.year} > {year.year} Results</Link></li>
                        })}
                        
                    </ul>
                </li>

                <li className="nav-group">
                    <button className="nav-item">Info</button>
                    <ul className="dropdown">
                        <li><Link className="nav-item" to='/practiceInfo' >Practice Info</Link></li>
                        <li><Link className="nav-item" to='/faq' >FAQ</Link></li>
                    </ul>
                </li>

                <li className="nav-group"><Link className="nav-item" to='/contact' >Coaches</Link></li>


            </ul>
        </div>
    );
}

export default Navbar;