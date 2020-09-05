import React from "react"

const HTMLContent = ({ content, className } : { content:string, className:string}) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className } : { content:string, className:string}) => (
  <div className={className}>{content}</div>
)

export default Content
export { HTMLContent }