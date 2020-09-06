import React from "react"
import { graphql, withPrefix, useStaticQuery } from "gatsby"

//Components
import Navbar from "../../components/Navbar"
import IconTitle from "../../components/IconTitle"
import PostList from "../../components/PostList"
import Footer from "../../components/Footer"

//Image
import blogIcon from "../../images/blogs/blog-icon.svg"
import "./style.scss"


interface Props{
  data:{
    posts: {
      edges: any
    }
  }
}


const Blogs = ({ data: { posts }} : Props) => {

  return (
    <div>
      <Navbar />
      <div className={"blogs"}>
        <IconTitle title={"Personal Blogs"} Icon={blogIcon}/>
        <PostList posts={posts.edges}/>
      </div>
      <Footer />
    </div>
  )
}

export default Blogs

export const blogQuery = graphql`
  query BlogQuery {
    posts:allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            tags
            title
            description
            slug
          }
        }
      }
    }
  }
`

// import React, { useState } from 'react'
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
// import { parse as qsParse } from 'query-string'
// import Layout from '../components/Layout'
// import Navbar from '../components/Navbar'
// import PostList from '../components/PostList'

// const ArchivesPage = ({ data: { site, posts }, location }) => {
//   const [searchText, setSearchText] = useState(
//     (qsParse(location.search).search || '').trim()
//   )

//   return (
//     <Layout title={`Archives | ${site.siteMetadata.title}`}>
//       <Navbar />
//       <section className='section'>
//         <div className='container'>
//           <div className='field'>
//             <div className='control is-large'>
//               <input
//                 className='input is-large'
//                 type='text'
//                 value={searchText}
//                 onChange={e =>
//                   setSearchText((e.currentTarget.value || '').trim())
//                 }
//                 placeholder='Preceding "#" to match tags.'
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       <PostList text={searchText} posts={posts} setSearchText={setSearchText} />
//     </Layout>
//   )
// }

// ArchivesPage.propTypes = {
//   location: PropTypes.shape({
//     search: PropTypes.string
//   }),
//   data: PropTypes.shape({
//     site: PropTypes.shape({
//       siteMetadata: PropTypes.shape({
//         title: PropTypes.string
//       })
//     }),
//     posts: PostList.propTypes.posts
//   })
// }

// export default ArchivesPage

// export const archivesPageQuery = graphql`
//   query ArchivesQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     posts: allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] }
//       filter: {
//         fields: { draft: { ne: true } }
//         frontmatter: { layout: { eq: "blog-post" } }
//       }
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 200)
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//             tags
//           }
//         }
//       }
//     }
//   }
// `