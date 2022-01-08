import './Menu.scss';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-collapse';
import React, { useState } from 'react';

import { FaStrava, FaTwitter, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { VscChromeClose } from 'react-icons/vsc';

function Menu({ header, socials, menuOpen, setMenuOpen, years }) {
  const [isOpenResults, setIsOpenResults] = useState(false);
  const [isOpenInfo, setIsOpenInfo] = useState(false);

  const toggleResults = () => setIsOpenResults(!isOpenResults);
  const toggleInfo = () => setIsOpenInfo(!isOpenInfo);

  function handleClick() {
    setMenuOpen(false);
    setIsOpenInfo(false);
    setIsOpenResults(false);
  }

  return (
    <div className={`menu ${!menuOpen && 'closed'}`}>
      <div className='menu-header'>
        <h1>Menu</h1>
        <button className='close' onClick={handleClick}>
          <VscChromeClose />
        </button>
      </div>
      <div className='menu-body'>
        <Link onClick={handleClick} to='/'>
          Home
        </Link>
        <button onClick={toggleResults}>Results</button>
        <Collapse isOpened={isOpenResults}>
          <ul>
            {years?.map((year) => {
              return (
                <li key={'menu-' + year}>
                  <Link onClick={handleClick} to={'/results/' + year}>
                    {' '}
                    {year} Results
                  </Link>
                </li>
              );
            })}
          </ul>
        </Collapse>
        <button onClick={toggleInfo}>Info</button>
        <Collapse isOpened={isOpenInfo}>
          <ul>
            <li>
              <Link onClick={handleClick} to='/practiceInfo'>
                Practice Info
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to='/faq'>
                FAQ
              </Link>
            </li>
          </ul>
        </Collapse>
        <Link onClick={handleClick} to='/contact'>
          Coaches
        </Link>
      </div>
      <div className='menu-footer'>
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
      </div>
    </div>
  );
}

export default Menu;
