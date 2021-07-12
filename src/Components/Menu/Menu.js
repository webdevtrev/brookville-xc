import './Menu.scss';
import { Link } from "react-router-dom";
import { Collapse } from 'react-collapse';
import React, { useEffect, useState } from "react";
import sanityClient from '../../client';

import { FaStrava, FaTwitter, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { VscChromeClose } from 'react-icons/vsc';



function Menu({ header, socials, menuOpen, setMenuOpen }) {

    const [isOpenResults, setIsOpenResults] = useState(false);
    const [isOpenInfo, setIsOpenInfo] = useState(false);

    const toggleResults = () => setIsOpenResults(!isOpenResults);
    const toggleInfo = () => setIsOpenInfo(!isOpenInfo);

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


    function handleClick() {
        setMenuOpen(false);
    }


    return (
        <div className={`menu ${!menuOpen && 'closed'}`}>
            <div className="menu-header">
                <h1>
                    Menu
                        </h1>
                <button className="close" onClick={() => { handleClick() }}><VscChromeClose /></button>
            </div>
            <div className="menu-body">
                <Link onClick={handleClick} to='/'>Home</Link>
                <button onClick={toggleResults}>Results</button>
                <Collapse isOpened={isOpenResults}>
                    <ul>
                        {years?.map((year) => {
                            return <li key={'menu-' + year.year}><Link onClick={() => {
                                handleClick();
                                toggleResults();
                            }} 
                            to={'/results/' + year.year} > {year.year} Results</Link></li>
                        })}
                    </ul>
                </Collapse>
                <button onClick={toggleInfo}>Info</button>
                <Collapse isOpened={isOpenInfo}>
                    <ul>
                        <li><Link onClick={() => {
                            handleClick();
                            toggleInfo();
                        }}
                            to='/practiceInfo'>Practice Info</Link></li>
                        <li><Link onClick={() => {
                            handleClick();
                            toggleInfo();
                        }}
                            to='/faq'>FAQ</Link></li>
                    </ul>
                </Collapse>
                <Link onClick={handleClick} to='/contact'>Coaches</Link>

            </div>
            <div className="menu-footer">
                {header?.phone && <a href={"tel:" + socials?.phone}><FaPhone /></a>}
                {header?.email && <a href={"mailto:" + socials?.email}><MdEmail /></a>}
                {header?.twitter && <a href={socials?.twitter}><FaTwitter /></a>}
                {header?.strava && <a href={socials?.strava}><FaStrava /></a>}

            </div>
        </div>
    );
}

export default Menu;