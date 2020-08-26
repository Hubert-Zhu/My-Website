import React from "react"
import { Link } from "gatsby"
import "./style.scss"

const PostItem = React.memo(({ post }) => {
  const { title, date, description, tags, slug } = post.frontmatter

  return (
    <div className="post-item">
      <Link to={slug}>
        <div className="post-item__title">{title}</div>
        <div className="post-item__date">{date}</div>
        <div className="post-item__description">{description}</div>
        <div className="post-item__tags">
          {tags.map((tag, index)=>(
            <div className={"post-item__tag"} key={index}>#{tag}</div>
          ))}
        </div>
      </Link>
    </div>
  )
})

const PostList = React.memo(({ posts }) => {
  return (
    <div className="post-list">
      {posts.map(({ node: post }) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  )
})


export default PostList