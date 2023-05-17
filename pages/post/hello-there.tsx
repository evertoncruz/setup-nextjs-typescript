import Image from 'next/image'
import Head
 from 'next/head';
const Hello: React.FC = () => (
  <>
    <Head>
      <title>Hello there :: Blog</title>
      <meta property="og:title" content="Hello there :: Blog"/>
    </Head>
    <article>
      <h1>Hello There!</h1>
      <Image
        src="/post/hello-there/blog.png"
        alt="Imagem com computador e um copo de café"
        width={640}
        height={427} />
      <p>Image by something!</p>
    </article>
  </>
)

export default Hello;