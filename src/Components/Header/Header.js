import './Header.scss';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [years, setYears] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "header"]`)
      .then((data) => {
        setData(data[1]);
      })
      .catch(console.error);

    sanityClient
      .fetch(`*[_type == "socialLinks"]`)
      .then((data) => {
        setSocials(data[0]);
      })
      .catch(console.error);

    sanityClient
      .fetch(
        `*[_type == "results"]{
              year
        }`
      )
      .then((data) => {
        setYears(
          data.map((year) => {
            return year.year;
          })
        );
      })
      .catch(console.error);
  }, []);

  years?.sort();

  return (
    <div className='Header-Wrapper'>
      <div className='Header'>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt={header?.title} />
          </Link>
        </div>
        <div className='title'>
          <h1 className='shadow'>{header?.title}</h1>
          <h1>{header?.title}</h1>
        </div>
        <div className='buttons'>
          {header?.phone && (
            <a aria-label='Phone' href={'tel:' + socials?.phone}>
              <FaPhone />
            </a>
          )}
          {header?.email && (
            <a aria-label='Email' href={'mailto:' + socials?.email}>
              <MdEmail />
            </a>
          )}
          {header?.twitter && (
            <a aria-label='Twitter' href={socials?.twitter}>
              <FaTwitter />
            </a>
          )}
          {header?.strava && (
            <a aria-label='Strava' href={socials?.strava}>
              <FaStrava />
            </a>
          )}

          <button
            className='menu-button'
            onClick={() => {
              setMenuOpen(true);
            }}
          >
            <GrMenu />
          </button>
        </div>

        <Menu
          header={header}
          socials={socials}
          setMenuOpen={setMenuOpen}
          menuOpen={menuOpen}
          years={years}
        />
      </div>
      <Navbar years={years} />
    </div>
  );
}

export default Header;
