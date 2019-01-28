import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'


const posts = get(this, 'props.data.allContentfulBlogPost.edges')

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi Gatsby</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <h3><Link to="/blog/">Go to the blog</Link></h3>
  </Layout>
)

export default IndexPage


export const pageQuery = graphql`
  query HomeQuery {
  allContentfulBlogPost {
    edges {
      node {
        id
        title
        slug
      }
    }
  }
  }
`
