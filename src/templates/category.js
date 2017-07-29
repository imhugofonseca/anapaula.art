import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Header from '../components/header'
import Footer from '../components/footer'
import Gallery from '../components/gallery'
import Container from '../components/container'

const Title = styled.h1`
  text-align: center;
  padding: 40px 0;
  letter-spacing: 4px;
`

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const CategoryFooter = styled(Footer)`
  text-align: center;
  color: #222;
  padding: 40px 0;
  opacity: 0.7;
`;


const PageTemplate = (props) => {
  const categories = props.data.allWordpressCategory;
  const pages = props.data.allWordpressPage;
  const categoryPosts = props.data.allWordpressPost;
  const category = props.data.wordpressCategory;

  return (
    <Wrapper>
      <Header pages={pages} categories={categories} primary={true} currentPage={props.location.pathname}></Header>
      <Container>
        <Title>{category.name}</Title>
        <Gallery posts={categoryPosts}></Gallery>
      </Container>
      <CategoryFooter />
    </Wrapper>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query categoryQuery($id: String!, $cleanId: Int!) {
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
    wordpressCategory(id: { eq: $id }) {
      name
    }
    allWordpressPost(filter: {categories: { eq: $cleanId }}) {
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