import Head from 'next/head';

import { getAllPosts } from '../provider/get-posts';


const Home = ({posts}) => {
  return (
    <div className="container">
      <Head>
        <title>Victor Ferraz</title>
      </Head>

      <main>
        {posts.map((post, index) => (
          <a href={`/blog/${post.attr.slug}`} key={index}>
            <h1>
              {post.attr.title}
            </h1>
            <p>
              {post.attr.introduction}
            </p>
          </a>
        ))}
      </main>
    </div>
  )
}


export async function getStaticProps({ params }) {
  const posts = await getAllPosts();
  return {
    props: {
      posts: posts
    }
  }
}


export default Home
