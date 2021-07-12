import './Home.css';
import { useEffect, useState } from 'react';
import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function Home() {

  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
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

  return (
    <div className="Home">
      <Helmet>
        <title>Home</title>
      </Helmet>
      {allPostsData && allPostsData?.map((post) => {
        return(
        <div key={post.slug.current} className="post">
          <h2 className="title">{post.title}</h2>
          <img src={urlFor(post.mainImage).width(400).height(400).url()} alt={"Picture of " + post.title} />
          <Link to={'/posts/'+post.slug.current}>Read Post</Link>
        </div>)
      })}
    </div>
  );
}

export default Home;