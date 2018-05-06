import React, { Fragment} from 'react'
import Link from 'gatsby-link'

import PostListing from '../components/Posts/PostListing'

const IndexPage = ({ data }) => (
  <div>
    <h2>Posts</h2>
    {data.post.edges.map(({ node }) => <PostListing key={node.id} post={node} />)}
  </div>
)

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    post: allMarkdownRemark {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            date(fromNow:false, formatString:"MMM DD YYYY")
          }
          html
          excerpt
        }
      }
    }
  }
`
