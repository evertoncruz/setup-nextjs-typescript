import { InferGetStaticPropsType } from 'next' 
import Head from 'next/head'
import Header from '@components/Header'
import Navigation from '@components/Navigation'
import { getPostList } from '@shared/util'
import Link from 'next/link'

type PostListProps = string[]

function Home({posts}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navigation />
        <Header />
        {posts.length > 0 && (
          <ul>
            {posts.map((slug) => (
              <li key={slug}>
                <Link legacyBehavior href={`post/${slug}`}>
                  <a>
                    {slug.replace(/-/g, ' ')}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const posts: PostListProps = getPostList()
  return {
    props: {
      posts
    }
  }
}

export default Home