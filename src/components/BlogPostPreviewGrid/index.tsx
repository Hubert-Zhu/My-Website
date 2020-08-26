  
import { Link } from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'

import styles from './blog-post-preview-grid.module.css'

const List = styled.ul`
  list-style: none;
  padding: 0;
`

function BlogPostPreviewGrid (props) {
  return (
    <ul className="List">
      {props.nodes &&
        props.nodes.map(node => (
          <li key={node.id}>
            <BlogPostPreview {...node} />
          </li>
        ))}
    </ul>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid