---
layout: blog-post
date: 2020-08-18T12:50:53.112Z
title: Build Gatsby Website 1：Why Gatsby
description: >
 Gatsby is a React-based open source framework. After building my personal website by using Gatsby, I start to like the way it manages data and become a fan of GraphQL. Gatsby is very esay to get started. Even for developers who just start to use Gatsby or React, Gatsby's official documents are super detailed, even a bit too basic.  This article is to share my experience with Gatsby and GraphQL. It is for readers who have a React foundation and want to get overview about Gatsby and GraphQL. If you find and error in this blog, I am sorry and please issue on my Github.
slug: "1"
tags:
  - Gatsby
---


## Preface 

After learning Front-end development for over one year. I feel it is the time to share feeling and experience about Frontend. Writing blogs might be the best way to do that, so I have started plan and developed this site 2 months ago. 👨‍💻

I have to confess that I am still a beginner or junior developer in this field. As Einstein says "The The more I learn, the more I realize how much I don't know". However, There's always a first time for everything, so I still want to write my first tech blog, which is a bold choice from my perspective.  

Visitors! If you find any mistake in this blog, please contact me. I sencerely sorry for that. I will change them as soon as possible to avoid misleading other beginners. I hope there will not be too much error in this series of blog.🤣


## Why choose Gatsby

After I searched for several days, there are many ways to make a personal website, such as [Jekyll](https://jekyllrb.com), [Hexo](https://hexo.io),  [VuePress](https://vuepress.vuejs.org/), [Gatsby](https://www.gatsbyjs.org/) etc. 

At this time, I saw some companys require their employees to learn [GraphQL](https://graphql.org/). Gatsby has a built-in GraphQL system and based on React. Then, I found that it has powerful ecosystem based with over 2,000 plugins, which engaged me. 

During searching, I found that some plugins that can transfer markfown file to HTML. By using [Netlify CMS](https://netlifycms.org), I could store all the blog data on Github and get better UI interface.

## Project Structure

To init the Gatsby project, I used [Gatsby Default Starter](https://github.com/gatsbyjs/gatsby-starter-default).

The file structure for default project is listed below

- `/src/pages` Components in the directory will be generated with the same name link
- `/src/templates` The directory contains template for rendering data, such as Markdown file
- `/src/components` Shared Comonpents
- `/static` Document for static resources(skip Webpack Packaging)
- `/gatsby-config.js` configuature two stuff：
  1. `siteMetadata` Global Information
  2. `plugins` Configure plug-ins
- `/gatsby-node.js` can call  [Gatsby node APIs](https://www.gatsbyjs.org/docs/node-apis/) to do achieve some task automatically.In this project is used to：
  1. Generate pages by using the template from `src/temaplates` and data from markdown file.
  2. Configuare link for new pages
- `/gatsby-browser.js` for [Gatsby browers APIs](https://www.gatsbyjs.org/docs/browser-apis/)
- `/gatsby-ssr.js` For SSR(not been used in this project)

For my project, there are additional files
- `/src/cms` This file is for Netlify CMS. It connect CMS with certain templates.
- `/src/image` Image document
- `markdown-pages`  Tempolarily stores blog markdown file
- `/static/admin` Netlify CMS configuartion

Next blog, I will talk about GraphQL and how to use it in Gatsby