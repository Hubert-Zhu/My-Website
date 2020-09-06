import React, { FunctionComponent } from "react"

interface Props {
  content: string
  className: string
}

function HTMLContent({ content, className }: Props) {
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  )
}

function Content({ content, className }: Props) {
  return <div className={className}>{content}</div>
}

export default Content
export { HTMLContent }
