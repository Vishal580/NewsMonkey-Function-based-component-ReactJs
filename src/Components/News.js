import React, {useState, useEffect} from 'react';
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTodalResults] = useState(0);
  // document.title = `${props.category} - NewsMonkey`;

  const updateNews = async() => {
    props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedata = await data.json();
    props.setProgress(70);
    console.log(parsedata);
    setArticles(parsedata.articles);
    setTodalResults(parsedata.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect (() =>{
    updateNews();
  }, [])

  // const handlePrevclick = async () => {
  //   setPage(page - 1);
  //   updateNews();
  // };

  // const handleNextclick = async () => {
  //   setPage(page + 1);
  //   updateNews();
  // };

  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    setArticles(articles.concat(parsedata.articles));
    setTodalResults(parsedata.totalResults);
  };

  return (
    <>
      <h1 className="text-center">
        NewsMonkey - Top {props.category} Headlines
      </h1>
      {loading && <Spinner/>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={articles.length < totalResults && <Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => {
              return (
                <div className="col-md-4" key={`${element.url}-${index}`}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="d-flex justify-content-between">
        <button disabled = {state.page<=1}type="button" className="btn btn-dark" onClick={handlePrevclick}>&larr; Previous</button>
        <button disabled = {state.page + 1 > Math.ceil(state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextclick}>Next &rarr;</button>
      </div> */}
    </>
    )
}

News.defaultProps = {
  country: "us",
  pageSize: "6",
  category: "sports",
};

News.PropType = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;