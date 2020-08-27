import React from "react"
import { BlogPostTemplate } from "../../templates/blogTemplate"

const BlogPostPreview = ({ entry, widgetFor }) => {
    const tags = entry.getIn(['data', 'tags'])

    return (
        <BlogPostTemplate 
            content={widgetFor('body')}
            description={entry.getIn(['data', 'description'])}
            tags={entry.getIn(['data', 'tags'])}
        />
    )
}

export default BlogPostPreview