import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'

const Post = ({ post }) => {
  const title = `${post.title} | Next on Netlify`
  const description = "Next.jsをNetlify上で動かすデモです。"
  return <div>
    <Head>
      <title>{title}</title>
      <meta property="og:description" content={description}/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="https://avatars1.githubusercontent.com/u/7007253?s=460&v=4"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:creator" content="@mottox2"/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
      <meta name="description" content={description}/>
    </Head>
    <Link href="/">
      <a>HOME</a>
    </Link>
    <h1>{post.title}</h1>
    <p>{post.description}</p>
  </div>;
}

Post.getInitialProps = async props => {
  if (props.res) {
    console.log('setHeader')
    props.res.setHeader('Cache-Control', 'public, s-maxage=30, stale-while-revalidate')
  }

  console.log('[renderApp]', props.asPath, props.query, props.req && props.req.query.id)
  const id = props.req ? props.req.query.id : props.query.id

  const { data } = await axios.get(`https://netlify-json-api.netlify.com/posts/${id}`)

  return { post: data }
}

export default Post;
