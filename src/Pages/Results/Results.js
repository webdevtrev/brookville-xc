import './Results.scss'

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client.js";


export default function OnePost() {
  const [results, setResults] = useState(null);
  const { slug } = useParams();
  console.log(slug)

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

  console.log(results)

  if (!results) return <div>Loading...</div>;

  return (
    <div className="results">
        
    </div>
  );
}