import React from 'react'
import Sidebar from './Sidebar'

export const Layout = ({ posts, children }) => (
  <section className="flex">
    <Sidebar posts={posts} />
    <article>
      {children}
    </article>
  </section>
)

export default Layout