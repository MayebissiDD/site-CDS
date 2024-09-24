import React from 'react'
import AppBar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from './content-blog/HeroSection'
import FeaturedArticlesSection from './content-blog/FeaturedArticlesSection'
import LatestArticlesSection from './content-blog/LatestArticlesSection'
import BlogCategoriesSection from './content-blog/BlogCategoriesSection'
import ArticleListSection from './content-blog/ArticleListSection'
import PopularTagsSection from './content-blog/PopularTagsSection'
import NewsletterSignupSection from './content-blog/NewsletterSignupSection'
import BlogCTASection from './content-blog/BlogCTASection'

function Blog() {
  return (
    <>
    <AppBar/>
    {/* Content start */}
    <HeroSection/>
    <FeaturedArticlesSection/>
    <LatestArticlesSection/>
    <BlogCategoriesSection/>
    <ArticleListSection/>
    <PopularTagsSection/>
    <NewsletterSignupSection/>
    <BlogCTASection/>
    {/* Content end */}
    <Footer/>
    </>
  )
}

export default Blog