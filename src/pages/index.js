import Head from 'next/head';

import { getAllPosts } from '../provider/get-posts';
import { PostData } from '../components/Post/';


const Home = ({posts}) => {
  return (
    <div className="container">
      <Head>
        <title>Victor Ferraz</title>
      </Head>

        {posts.map((post, index) => (
          <article key={index}>
            <a href={`/blog/${post.attr.slug}`} >
              <h1>
                {post.attr.title}
              </h1>
              <PostData author="Victor Ferraz" date={post.attr.date} readTime={post.attr.readTime} />
              <img className="post" src={`/${post.attr.img}`} />
              <p>
                {post.attr.introduction}
              </p>
            </a>
          </article>
        ))}
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
