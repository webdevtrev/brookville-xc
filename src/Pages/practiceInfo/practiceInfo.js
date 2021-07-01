import React, { useEffect, useState } from "react";
import './practiceInfo.css';
import sanityClient from '../../client';
import {Helmet} from "react-helmet";

function PracticeInfo() {

  const [hsPractice, setHsPractice] = useState(null);
  const [msPractice, setMsPractice] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "practiceInfo"]{
          hsPractice,
          msPractice
    }`
      )
      .then((data) => {
        setHsPractice(data[0].hsPractice)
        setMsPractice(data[0].msPractice)
      })
      .catch(console.error);
  }, []);
  function getDay(day) {
    switch (day.toLowerCase()) {
      case 'mon':
        return 'Monday';
      case 'tues':
        return 'Tuesday';
      case 'weds':
        return 'Wednesday';
      case 'thur':
        return 'Thursday';
      case 'fri':
        return 'Friday';
      case 'sat':
        return 'Saturday';
      case 'sun':
        return 'Sunday';
      default:
        return 'Invalid Day'
    }
  }
  function showPracticeDetails(teamPracticeDetails){
    return teamPracticeDetails?.map((practiceSet) => {
      return (
        <div key={practiceSet._key}>
          <h2><span>{practiceSet.startDate}</span> - <span>{practiceSet.endDate}</span></h2>
          {practiceSet.practiceDays?.map((days) => {
            return (
              <div key={days._key}>
                <span>{days.time} on</span>
                {days.days?.map(day => {
                  return (<span key={days._key+day}>{getDay(day)}</span>)
                })}
              </div>
            )
          })}
        </div>
      )
    })
  }

  return (
    <div className="practiceInfo">
      <Helmet>
        <title>Practice Info</title>
      </Helmet>
      <h1>Practice Times</h1>

      <h2>High School</h2>
      {showPracticeDetails(hsPractice)}

      <h2>Middle School</h2>
      {showPracticeDetails(msPractice)}
    </div>
  );
}

export default PracticeInfo;