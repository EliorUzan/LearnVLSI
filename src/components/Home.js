import React from 'react';
import '../css/css_vars.css'
import '../css/Home.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
const host = "http://localhost:3001"

const firstBlogPost_header = "initial-roles-in-the-industry"
const secondBlogPost_header = "big-companies-in-israel-semiconductor-industry"
const thirdBlogPost_header = "placeHolder3"
const fourthBlogPost_header = "placeHolder4"

const firstBlogPost = await axios.get(`${host}/blogPosts/showPost/${firstBlogPost_header}`);
const firstBlogPost_homePageSummary = await axios.get(`${host}/blogPosts/blogPostItems/${firstBlogPost.data.home_page_summary_HTML}`);
console.log(firstBlogPost_homePageSummary)
const Home = () => {
  return (
    <div className="home-container">
      <h1>פוסטים אחרונים</h1>
      <div>
      <Link to="/initial-roles-in-the-industry" className='home-blog_post_link'><h2 className='home-blog_post_link'>תפקידי כניסה לתעשייה</h2></Link>
      <div className="home-blog_post_summary" dangerouslySetInnerHTML={{ __html: firstBlogPost_homePageSummary.data }} />
      {/* Add more content here */}
      </div>
    </div>
  );
};

export default Home;
