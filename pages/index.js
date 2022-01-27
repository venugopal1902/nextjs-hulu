import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav.jsx';
import Header from '../components/Header.jsx';
import requests from '../utils/requests.js';
import Results from '../components/Results.jsx';

export default function Home({results}) {
  // console.log(results);
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
      </Head>
      <body>
        <Header/>
        <Nav />
        {/* Results */}
        <Results results={results}/>
      </body>
    </div>
  );
}

export async function getServerSideProps(context){
  const genre = context.query.genre;
  const request = await fetch( `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}` ).then((res)=>res?.json());
  return{
    props:{
      results : request?.results,
    }
  }
}
