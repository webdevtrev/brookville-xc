import './Home.scss';
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
  const [numPosts, setNumPosts] = useState(3);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        publishedAt,
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
  if(allPostsData){
    allPostsData.sort((a,b)=>(new Date(b.publishedAt)) - (new Date(a.publishedAt)))
  }

  return (
    <div className="Home">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="posts">
      {allPostsData && allPostsData?.map((post,index) => {
        if(index === numPosts){
          return null;
        }
        else{
          return(
          <div key={post.slug.current} className="post">
            <div className="post-details">
              <h2 className="post-title">{post.title}</h2>
              <Link className="post-link" to={'/posts/'+post.slug.current}>Read Post</Link>
            </div>
            <img src={urlFor(post.mainImage).width(400).height(400).url()} alt={"Picture of " + post.title} />
          </div>)
        }
      })}
      </div>
      <div className="show-button">
      {
        allPostsData?.length > 3?
          numPosts <= allPostsData?.length
          ? <button onClick={()=>{setNumPosts(numPosts+3)}}>Show More</button>
          : <button onClick={()=>{setNumPosts(numPosts-3)}}>Show Less</button>
        : null
      }
      </div>
      
    </div>
  );
}

export default Home;