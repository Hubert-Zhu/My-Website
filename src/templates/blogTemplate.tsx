import React from "react"
import { graphql, Link } from "gatsby"
import Content, { HTMLContent } from "../components/Content"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import "./style.scss"

export const BlogPostTemplate = ({
  content,
  description,
  tableOfContents,
  contentComponent,
  tags,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div style={{ position: "static" }}>
      {/* fix gatsby-remark-autolink-headers scrolling, let offsetParent be body */}
      <div className="留给相应布局">
        <div className="postify">
          {!!description && (
            <p className="postify__description">{description}</p>
          )}

          {!!tableOfContents && (
            <div
              className={"postify__topic-table"}
              dangerouslySetInnerHTML={{ __html: tableOfContents }}
            />
          )}

          <PostContent content={content} />
        </div>

        {tags && tags.length ? (
          <div style={{ marginTop: `2rem` }}>
            <div>
              {tags.map(tag => (
                <Link key={tag} to={`/archives?search=%23${tag}`}>
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

//export default
const BlogPost = ({ data: { site, post }, pageContext }) => {
  const { title, description, date, tags } = post.frontmatter

  return (
    <Layout
      title={`${title} | ${site.siteMetadata.title}`}
      description={`${description || post.excerpt}`}
    >
      <div className="blog">
        <header className="blog__titlebar">
          <h1>{title}</h1>
        </header>

        <div>
          <div>
            <a href="./" onClick={e => e.preventDefault()}>
              {date}
            </a>
          </div>
        </div>

        <BlogPostTemplate
          content={post.html}
          description={description}
          tableOfContents={post.tableOfContents}
          contentComponent={HTMLContent}
          tags={tags}
        />

        <section>
          <div>
            <div>
              {pageContext.next && (
                <Link to={pageContext.next.path}>
                  <strong>NEWER</strong>
                  <p>{pageContext.next.title}</p>
                </Link>
              )}
            </div>

            <div
              style={{
                alignSelf: "center",
                width: 8,
                height: 8,
                margin: "0 1em",
                borderRadius: "50%",
              }}
            />

            <div>
              {pageContext.prev && (
                <Link to={pageContext.prev.path}>
                  <strong>OLDER</strong>
                  <p>{pageContext.prev.title}</p>
                </Link>
              )}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    post: markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 200)
      tableOfContents
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        slug
      }
    }
  }
`
