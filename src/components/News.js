import React, { Component } from "react";
import NewsItem from "./NewsItem.js";
import Loading from "./Loading.js";
// import PropTypes from 'prop-types';

export default class News extends Component {
  static defautProps = {
    category : 'business',
    
  }
  

  constructor() {
    super();

    this.state = {
      articles:[],
      loading : false,
      page:1
    };
  }

  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=0ba2828fbf3e409b983b74325db0d7dc&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData= await data.json();
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false});
  }

  handleNextClick = async ()=>{
    window.scrollTo(0, 0);
    if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=0ba2828fbf3e409b983b74325db0d7dc&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data=await fetch(url);
      let parsedData= await data.json();
      this.setState({articles:parsedData.articles,page:this.state.page+1,loading:false});
    }
  }

  handlePrevClick = async ()=>{
    window.scrollTo(0, 0);
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=0ba2828fbf3e409b983b74325db0d7dc&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data=await fetch(url);
    let parsedData= await data.json();
    this.setState({articles:parsedData.articles});
    this.setState({page:this.state.page-1})
  }

  render() {
    return (
      <>
        <center>
          <h2 className={`my-4 text-${this.props.mode==="dark"?"light":"dark"}`}>News</h2>
        </center>
        <center>
          <div className="container my-5">
            {this.state.loading && <Loading/>}
            <div className="row">
              {!this.state.loading && this.state.articles.map((element)=>{
                return <div key={element.url} className="col-md-4 my-3">
                  <NewsItem
                    title={element.title}
                    desc={element.description}
                    imgUrl={!element.urlToImage?"https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg":element.urlToImage}
                    newsUrl={element.url}
                  />
              </div>
              })}
             
            </div>
            <br /><br />
            <div className="d-flex justify-content-between">
              <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
              <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
          </div>
        </center>
      </>
    );
  }
}
