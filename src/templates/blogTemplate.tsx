// import React from "react"
// import { graphql } from "gatsby"

// export default function Template({
//   data, // this prop will be injected by the GraphQL query below.
// }) {
//   const { markdownRemark } = data // data.markdownRemark holds your post data
//   const { frontmatter, html } = markdownRemark
//   return (
//     <div className="blog-post-container">
//       <div className="blog-post">
//         <h1>{frontmatter.title}</h1>
//         <h2>{frontmatter.date}</h2>
//         <div
//           className="blog-post-content"
//           dangerouslySetInnerHTML={{ __html: html }}
//         />
//       </div>
//     </div>
//   )
// }

// export const pageQuery = graphql`
//   query {
//     markdownRemark{
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         slug
//         title
//       }
//     }
//   }
// `


import React from 'react'
import { graphql, Link } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'


export const BlogPostTemplate = ({
  content,
  description,
  tableOfContents,
  contentComponent,
  tags
}) => {
  const PostContent = contentComponent || Content

  return (
    <section>
      {/* fix gatsby-remark-autolink-headers scrolling, let offsetParent be body */}
      <div style={{ position: 'static' }}>
        <div>
          <div>
            <div>
              {!!description && <p>{description}</p>}
              {!!tableOfContents && (
                <div
                  dangerouslySetInnerHTML={{ __html: tableOfContents }}
                />
              )}
              <PostContent content={content} />
            </div>
            {tags && tags.length ? (
              <div style={{ marginTop: `2rem` }}>
                <div>
                  {tags.map(tag => (
                    <Link
                      key={tag}
                      to={`/archives?search=%23${tag}`}
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
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
      <section>
        <div>
          <Navbar />
        </div>

        <div>
          <div>
            <h1>{title}</h1>
          </div>
        </div>

        <div>
          <div>
            <a href='./' onClick={e => e.preventDefault()}>
              {date}
            </a>
          </div>
        </div>
      </section>

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
              <Link
                to={pageContext.next.path}
              >
                <strong>NEWER</strong>
                <p>{pageContext.next.title}</p>
              </Link>
            )}
          </div>

          <div
            style={{
              alignSelf: 'center',
              width: 8,
              height: 8,
              margin: '0 1em',
              borderRadius: '50%'
            }}
          />

          <div>
            {pageContext.prev && (
              <Link
                to={pageContext.prev.path}
              >
                <strong>OLDER</strong>
                <p>{pageContext.prev.title}</p>
              </Link>
            )}
          </div>
        </div>
      </section>


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
