import { useRouter } from 'next/router'
import Head from 'next/head'
import { getPostBySlug, getListUrl } from '../../provider/get-posts';
import { markDownToHtml } from '../../utils/';
import { DiscussionEmbed } from 'disqus-react';

export default function Post({ post }) {
  const { title, date, text, slug, img, url } = post;
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
          <article className="mb-32">
            <h1>
              {title}
            </h1>
            <figure>
              <img src={img} />
            </figure>
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

export async function getStaticProps({ params }) {
  const data = await getPostBySlug(params.slug);
  const { title, date, img, slug } = data.attributes;
  const text = await markDownToHtml(data.body);
  const url = getUrl(slug);
  return {
    props: {
      post: {
        title,
        date,
        url,
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
