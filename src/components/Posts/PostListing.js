import React from 'react'
import styled from 'styled-components'

const PostListigWrapper = styled.div`
  h2 {
    color: gray;
    font-size: 30px;
  }
`

const PostListing = ({ post }) => (
  <PostListigWrapper>
    <h2>{post.frontmatter.title}</h2>
    <span>{post.frontmatter.date}</span>
    <p>{post.excerpt}</p>
    {/*<div dangerouslySetInnerHTML={{*/}
      {/*__html: post.exerpt*/}
    {/*}} />*/}
  </PostListigWrapper>
)

export default PostListing
