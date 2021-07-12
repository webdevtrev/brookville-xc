import './Header.scss';
import React, { useEffect, useState } from "react";
import sanityClient from '../../client';

import Navbar from './Navbar';
import Menu from '../Menu/Menu';

import { FaStrava, FaTwitter, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { GrMenu } from 'react-icons/gr';

import logo from '../../assets/devil_head.png';


function Header() {

  const [header, setData] = useState(null);
  const [socials, setSocials] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "header"]`
      )
      .then((data) => {
        setData(data[1])
      })
      .catch(console.error);
    sanityClient
      .fetch(
        `*[_type == "socialLinks"]`
      )
      .then((data) => {
        setSocials(data[0])
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="Header">
        <div className="logo">
          <img src={logo} alt={header?.title} />
        </div>
        <div className="title">
          <h1 className="shadow">{header?.title}</h1>
          <h1>{header?.title}</h1>
        </div>
        <div className="buttons">
          {header?.phone && <a href={"tel:" + socials?.phone}><FaPhone /></a>}
          {header?.email && <a href={"mailto:" + socials?.email}><MdEmail /></a>}
          {header?.twitter && <a href={socials?.twitter}><FaTwitter /></a>}
          {header?.strava && <a href={socials?.strava}><FaStrava /></a>}


          <button className="menu-button" onClick={() => { setMenuOpen(true) }}><GrMenu /></button>

        </div>

        <Menu
          header={header}
          socials={socials}
          setMenuOpen = {setMenuOpen}
          menuOpen={menuOpen} 
        />


        
      </div>
      <Navbar />
    </>
  );
}

export default Header;