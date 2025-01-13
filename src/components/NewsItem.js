import React, { Component } from "react";

export default class NewsItem extends Component {

  

  render() {
    let {title,imgUrl,desc,newsUrl,author,date}=this.props;
    return (
      <>
        <div className="card" style={{width: '18rem'}}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {desc}
            </p>
            <p class="card-text"><small class="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
