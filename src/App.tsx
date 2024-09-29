import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/layout'
import Newsist from './components/news/newsList';

function App() {
  const [count, setCount] = useState(0);
  const [news, setNews] = useState([]);

  console.log(import.meta.env)
  useEffect(() => {
    (async () => {
      fetch("https://newsapi.org/v2/everything?q=apple&from=2024-09-28&to=2024-09-28&sortBy=popularity&apiKey=" + import.meta.env.API_KEY2)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.status === "ok") {
            // console.log(data);
            setNews(data?.articles);
          }
        });
    })();
  }, [import.meta.env.API_KEY2]);

  return (
    <>
      <Layout>
        <>
          <h1>Latest News</h1>
          {news.length ? <Newsist newsList={news} /> : "Loading News...."}
        </>
      </Layout>
    </>
  )
}

export default App
