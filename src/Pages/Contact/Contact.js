import React, { useEffect, useState } from "react";
import sanityClient from '../../client';
import imageUrlBuilder from "@sanity/image-url";
import './Contact.css';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function Contact() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "coach"]{
        name,
        title,
        slug,
        image{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  console.log(allPostsData)

  return (
    <div className="Contact">
      <h1>Meet the coaches!</h1>
        {allPostsData&&allPostsData.map((coach)=>
          <div className="coach" key={coach.slug}>
            <h2 className="name">{coach.name}</h2>
            <h3 className="title">{coach.title}</h3>
            <img src={urlFor(coach.image).width(200).url()} alt={"Picture of "+coach.name} />
          </div>
        )}
    </div>
  );
}

export default Contact;