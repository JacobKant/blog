import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Привет</h1>
    <p>Добро пожаловть на сайт</p>
    <Link to="/articles/">Статьи</Link>
  </Layout>
)

export default IndexPage
