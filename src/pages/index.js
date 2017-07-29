import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Header from '../components/header'
import Footer from '../components/footer'
import Slider from '../components/slider'

const HomeFooter = styled(Footer)`
  position: absolute;
  z-index: 4;
  left: 50px;
  bottom: 20px;
  opacity: 0.6;
`;



export default class IndexPage extends React.Component {
  constructor() {
    super()

    this.SLIDER_INTERVAL = 8000

    this.state = {
      currentSlide: 0,
    }
  }

  slide() {
    const currentSlide = this.state.currentSlide
    const nextSlide = currentSlide < 2 ? currentSlide + 1 : 0
    
    this.setState({
      currentSlide: nextSlide
    })
  }


  initSlider() {
    this.interval = setInterval(() => this.slide(), this.SLIDER_INTERVAL)
  }

  componentDidMount() {
    this.initSlider()
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  renderSlider(categories, slides) {
    return (
      <Slider slides={slides} current={this.state.currentSlide}></Slider>
    )
  }

  render() {
    console.log(this.props)
    const categories = this.props.data.allWordpressCategory;
    const pages = this.props.data.allWordpressPage;
    const slides = this.props.data.allWordpressPost.edges;

    const slider = this.renderSlider(categories, slides);

    return(
      <div>
        
        <Header pages={pages} categories={categories} currentPage={this.props.location.pathname}/> 
        {slider}
        <HomeFooter />
      </div>  
    )
  
  }
}

export const pageQuery = graphql`
  query homePage {
    allWordpressCategory {
      edges {
        node {
          id
          description
          name
          slug
          taxonomy
        }
      }
    }
    allWordpressPage {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
    allWordpressPost(limit: 5) {
      edges{
        node {
          id
          title
          slug
          featured_media_url
          format
          categories
        }
      }
    }    
  }
`