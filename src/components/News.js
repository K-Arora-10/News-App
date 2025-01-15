import React, { Component } from "react";
import NewsItem from "./NewsItem.js";
import Loading from "./Loading.js";
import InfiniteScroll from "react-infinite-scroll-component";
// import PropTypes from 'prop-types';

export default class News extends Component {
  static defautProps = {
    category: "business",
  };

  capitalizeFirstLetter = (val) => {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  };

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - News Monkey`;
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=0ba2828fbf3e409b983b74325db0d7dc&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  top = ()=>{
    window.scrollTo(0, 0);
  }

  fetchMoreData = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apiKey=0ba2828fbf3e409b983b74325db0d7dc&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      page: this.state.page + 1,
      
    });
  }

  render() {
    return (
      <>
        <center>
          <h2
            className={`my-4 text-${
              this.props.mode === "dark" ? "light" : "dark"
            }`}
          >
            News - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
            Headlines
          </h2>
        </center>
        <center>
          
            {this.state.loading && <Loading/>}

            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              // style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
              // inverse={true} //
              hasMore={this.state.articles.length!==this.state.totalResults}
              loader={<Loading/>}
              style={{overflow:"hidden"}}
              // scrollableTarget="scrollableDiv"
            >
              
            <div className="container">

              <div className="row">
                {this.state.articles.map((element) => {
                  return (
                    <div key={element.url} className="col-md-4 my-3">
                      <NewsItem
                        title={element.title}
                        desc={element.description}
                        imgUrl={
                          !element.urlToImage
                          ? "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
                          : element.urlToImage
                        }
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        />
                    </div>
                  );
                })}
              </div>
            </div>
            </InfiniteScroll>
            <br />
            <br />
            <button type="button" className="btn btn-dark" style={{position:"fixed",bottom:"20px",right:"20px"}} onClick={this.top}>&uarr;</button>
          
        </center>
      </>
    );
  }
}
