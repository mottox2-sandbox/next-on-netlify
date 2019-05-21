const Home = () => {
  return <div>Welcome to Next.js!</div>;
}

Home.getInitialProps = async props => {
  if (props.res) {
    props.res.setHeader('Cache-Control', 'public, s-maxage=30, stale-while-revalidate')
  }
  return {}
}

export default Home;
