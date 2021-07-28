import { Link } from "react-router-dom";
import './Footer.scss';
import React, { useEffect, useState } from "react";
import sanityClient from '../../client';

import { FaStrava, FaTwitter, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {

  const [footer, setData] = useState(null);
  const [socials, setSocials] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "footer"]`
      )
      .then((data) => {
        setData(data[0])
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
    <div className="Footer">
    <div className="Top">

      <div className="philosophy">
        <h2>Program Philosophy:</h2>
        <p>{footer?.quote}</p>
      </div>
      <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/practiceInfo'>practiceInfo</Link>
        <Link to='/faq'>FAQ</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      
    </div>
    <div className="Bottom">
      <div className="buttons">
        {footer?.phone && <a href={"tel:" + socials?.phone}><FaPhone /></a>}
        {footer?.email && <a href={"mailto:" + socials?.email}><MdEmail /></a>}
        {footer?.twitter && <a href={socials?.twitter}><FaTwitter /></a>}
        {footer?.strava && <a href={socials?.strava}><FaStrava /></a>}
      </div>
      <div className="copyright">Copyright © 2021 Brookville XC, All rights reserved</div>
      <div>
        <Link to='/licenses'>Licenses</Link>
      </div>

    </div>
    </div>
  );
}

export default Footer;