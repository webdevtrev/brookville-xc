import React, { useEffect, useState } from "react";
import sanityClient from '../../client';
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import './Contact.scss';
import { Helmet } from "react-helmet";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function Contact() {
  const [allPostsData, setAllPosts] = useState(null);
  let sortedData = [];

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "coach"]{
          name,
          title,
          team,
          slug,
          phone,
          email,
          image{
            asset->{
            _id,
            url
            }
          },
          bio
        }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  // Sorts the coaches so that it is high school to middle school and in each team it is head coach first then assistant coaches
  if (allPostsData) {
    sortedData = allPostsData.sort((a, b) => (a.title < b.title) ? 1 : -1).sort((a, b) => (a.team > b.team) ? 1 : -1);
    allPostsData.sort((a, b) => {
      if (a.team > b.team) {return 1}
      if (a.team <= b.team) { return -1 }
      if(a.title < b.title){
          return 1
      }
      else{
        return -1
      }
    });
    console.log(sortedData);
  }


  return (
    <div className="Contact">
      <Helmet>
        <title>Coaches</title>
      </Helmet>
      <h1>Meet the coaches!</h1>
      {sortedData && sortedData.map((coach, index) =>
        <div className={`coach ${index % 2 ? 'even' : 'odd'}`} key={coach.slug}>
          <div className="info">
            <h2 className="name">{coach.name}<span className="coach-title">{`(${coach.team.toUpperCase()} ${coach.title})`}</span></h2>
            
            <BlockContent
              blocks={coach.bio}
              projectId={sanityClient.projectId}
              dataset={sanityClient.dataset}
            />
            {coach.phone && <div className="coach-phone">Phone: {coach.phone}</div>}
            {coach.email && <div className="coach-email">Email: {coach.email}</div>}
          </div>
          <div className="image-container">
            <img className="image" src={urlFor(coach.image).width(400).height(400).url()} alt={"Picture of " + coach.name} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;