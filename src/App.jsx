import { useEffect, useState } from "react";
import './styles/app2.css'
import {Header} from "./components/Header/header";
import { Article } from "./components/Article/Article";
import { ThreeDots } from "react-loader-spinner";
//import { Counter } from "./components/Counter/Counter";
import axios from "axios";

function App () {

  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get("https://api.spaceflightnewsapi.net/v4/articles/?format=json");
      const newsData = response.data.results;

      setNews(newsData);
    }

    loadNews();

  }, []);

  
  return(
    <>
    <Header />
    
    <section id="articles-list">
      {news.length === 0 ? (
        <div style={{ height: '400px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <ThreeDots 
            height="80"
            width='80'
            color="white"
          />
        </div>
      ) : news.map((article) => {
        return(
          <Article key={article.id}
            title={article.title} 
            provider={article.news_site}
            description = {article.summary}
            thumbnail = {article.image_url}
            url = {article.url}
          />
        );
      })}
    </section>

    {/* <Counter /> */}
    
    </>
      
  );
  

}

export default App;
