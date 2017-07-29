import React from 'react'
import Link from 'gatsby-link'

const PageTemplate = (props) => {

  return (
    <div>
      <h1>{props.data.wordpressPage.title}</h1>
      
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query pageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }
`