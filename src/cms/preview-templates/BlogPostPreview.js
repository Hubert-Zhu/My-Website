import React from "react"
import BlogPost from "../../templates/blogTemplate"

const BlogPostPreview = ({ entry, widgetFor }) => {
    const tags = entry.getIn(['data', 'tags'])

    return (
        <BlogPost 
            content={widgetFor('body')}
            description={entry.getIn(['data', 'description'])}
            tags={entry.getIn(['data', 'tags'])}
        />
    )
}

export default BlogPostPreview