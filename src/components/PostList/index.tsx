import React from "react"

//Components
import { Link } from "gatsby"

//Style
import "./style.scss"
import { string, any } from "prop-types"

interface PostItemProps {
    post: {
      frontmatter:{
        title: string
        date: any
        description: string
        tags: string[]
        slug: string
      }
    }
}

const PostItem = React.memo(({ post }: PostItemProps) => {
  const { title, date, description, tags, slug } = post.frontmatter

  return (
    <div className="post-item">
      <Link to={slug}>
        <div className="post-item__title">{title}</div>
        <div className="post-item__date">{date}</div>
        <div className="post-item__description">{description}</div>
        <div className="post-item__tags">
          {tags.map((tag:string, index:number)=>(
            <div className={"post-item__tag"} key={index}>#{tag}</div>
          ))}
        </div>
      </Link>
    </div>
  )
})



const PostList = React.memo(({ posts } : { posts: Array<any> }) => {
  return (
    <div className="post-list">
      {posts.map(({ node }) => (
        <PostItem key={node.id} post={node} />
      ))}
    </div>
  )
})


export default PostList