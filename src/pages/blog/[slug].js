import { useRouter } from 'next/router'
import Head from 'next/head'
import { getPostBySlug, getListUrl } from '../../provider/get-posts';
import { markDownToHtml } from '../../utils/';
import { DiscussionEmbed } from 'disqus-react';
import { PostData } from '../../components/Post/';


export default function Post({ post }) {
  const { title, date, text, slug, img, url, introduction, readTime } = post;
  const router = useRouter()
  return (
    <>
      {router.isFallback ? (
        <>Loading…</>
      ) : (
        <>
          <Head>
            <title>
              {title}
            </title>
          </Head>
          <article>
            <h1>
              {title}
            </h1>
            <h2 className="sub-text">
              {introduction}
            </h2>

            <PostData author="Victor Ferraz" date={date} readTime={readTime} />
            <div>
              <img className="post" src={img} />
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: text }}
            />

            <DiscussionEmbed
              shortname='victor'
              config={
                {
                  url: url,
                  identifier: slug,
                  title: title,
                }
              }
            />
          </article>
        </>
      )}
    </>
  )
}

function getUrl( slug ) {
  const dev = process.env.NODE_ENV !== 'production';
  const prefix = (dev)? 'http://localhost/' : 'https://victorferraz/' ;
  return `${prefix}/blog/${slug}`;
}

export async function getStaticProps(data) {
  console.log(data);
  const { params: { slug } } = data;
  const { body, attributes } = await getPostBySlug(slug);
  const { img } = attributes;
  const text = await markDownToHtml(body);
  const url = getUrl(slug);
  return {
    props: {
      post: {
        ...attributes,
        slug,
        img: `/${img}`,
        text
      }
    }
  }
}

export async function getStaticPaths() {
  const urls = await getListUrl()
  return {
    paths:  urls.map((i) => {
      return {
        params: {
          slug: i
        }
      }
    }),
    fallback: false
  };
}
