import './Results.scss'

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client.js";
import {fileUrl} from "../../fileUrl";


export default function OnePost() {
  const [results, setResults] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'results' && year == ${slug}]{
          meet
       }`,
        { slug }
      )
      .then((data) => setResults(data[0]))
      .catch(console.error);
  }, [slug]);

  let meetArray = results?.meet;
  meetArray = meetArray?.sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
  });


  if (!results) return <div>Loading...</div>;

  return (
    <div className="results">
    <h1>{slug}</h1>
    <div className="results-wrapper">
      
        {meetArray?.map((meet)=>{
          
          let month = meet.date.split('-')[1];
          let day = meet.date.split('-')[2];
          
            
          let link = meet.file!==undefined?`${fileUrl(meet.file?.asset?._ref)}`:meet.url;
          return(
            <div className="meet">
              <a className="link" href={link} target="_blank" rel="noreferrer">{month}/{day} {meet.meet}</a>
            </div>
          )
        })}
    </div>
    </div>
  );
}