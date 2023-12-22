
import React from 'react';
import Header from './HomeHeader';
import Navbar from './HomeNavbar';
import BlogSection from './BlogSection';
import BlogPostsSection from './BlogPostSection';
import BlogPostsSection2 from './BlogPostSection2';
import Footer from './HomeFooter';
import '../theme/Card.css'; 


const Home2012 = () => {
  return (
    <div>
     <Header/>
     <Navbar/>
     <BlogPostsSection2/>
     <Footer/>
    </div>
  );
};

export default Home2012;