import React from "react"
import { graphql, Link } from "gatsby"

//Components
import Content, { HTMLContent } from "../components/Content"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

//Style
import "./style.scss"
import "./codestyle.scss"

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

          <PostContent className="postify__content" content={content} />

          {tags && tags.length ? (
            <div className="postify__tags">
              {tags.map(tag => (
                <div className="postify__tag">
                  <Link key={tag} to={`/archives?search=%23${tag}`}>
                    #{tag}
                  </Link>
                </div>
              ))}
            </div>
          ) : null}
        </div>
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
        <Navbar />
        <header className="blog__title-container">
          <h1 className="blog__title">{title}</h1>
          <div className="blog__date">{date}</div>
        </header>

        <BlogPostTemplate
          content={post.html}
          description={description}
          tableOfContents={post.tableOfContents}
          contentComponent={HTMLContent}
          tags={tags}
        />

        {/* {<section>
          <div>
            <div>
              {pageContext.next && (
                <Link to={pageContext.next.path}>
                  <strong>NEWER</strong>
                  <p>{pageContext.next.title}</p>
                </Link>
              )}
            </div>

            <div>
              {pageContext.prev && (
                <Link to={pageContext.prev.path}>
                  <strong>OLDER</strong>
                  <p>{pageContext.prev.title}</p>
                </Link>
              )}
            </div>
          </div>
        </section>} */}
      </div>
      <Footer />
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
      tableOfContents(absolute: false)
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
