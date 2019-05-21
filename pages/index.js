const Home = () => {
  return <div>Welcome to Next.js!</div>;
}

Home.getInitialProps = props => {
  console.log(props.res)
  if (props.res) {
    console.log('setHeader')
    props.res.setHeader('Cache-Control', 'public, s-maxage=30, stale-while-revalidate')
  }
  return {}
}

export default Home;
