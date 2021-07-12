import './Header.css';
import React, { useEffect, useState } from "react";
import sanityClient from '../../client';
import imageUrlBuilder from "@sanity/image-url";

import Navbar from './Navbar'

import {FaStrava, FaTwitter, FaPhone} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {GrMenu} from 'react-icons/gr';
import {VscChromeClose} from 'react-icons/vsc'

import logo from '../../assets/devil_head.png'

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

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
        {header?.phone && <a href={"tel:" + socials?.phone}><FaPhone/></a>}
        {header?.email && <a href={"mailto:" + socials?.email}><MdEmail/></a>}
        {header?.twitter && <a href={socials?.twitter}><FaTwitter/></a>}
        {header?.strava && <a href={socials?.strava}><FaStrava/></a>}


        <button className="menu-button" onClick={()=>{setMenuOpen(true)}}><GrMenu/></button>

      </div>


    <div className={`menu ${!menuOpen&&'closed'}`}>
      <div className="menu-header">
        {/* <img src={logo} alt={header?.title} /> */}
        <h1>
          Menu
        </h1>
        <button className="close" onClick={()=>{setMenuOpen(false)}}><VscChromeClose/></button>
      </div>
      <div className="menu-body">
        
      </div>
      <div className="menu-footer">
          {header?.phone && <a href={"tel:" + socials?.phone}><FaPhone/></a>}
          {header?.email && <a href={"mailto:" + socials?.email}><MdEmail/></a>}
          {header?.twitter && <a href={socials?.twitter}><FaTwitter/></a>}
          {header?.strava && <a href={socials?.strava}><FaStrava/></a>}
        
      </div>
    </div>
    </div>
    <Navbar />
    </>
  );
}

export default Header;