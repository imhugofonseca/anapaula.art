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
  font-weight: 100;
  color: #DDD;
  text-transform: uppercase;
`

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const CategoryFooter = styled(Footer)`
  text-align: center;
  color: #222!important;
  padding: 40px 0;
  opacity: 0.7;

  @media screen and (max-width: 468px) {
    padding: 20px;
  }
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
        <Title dangerouslySetInnerHTML={{ __html: category.name }} />
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