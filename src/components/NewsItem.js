import React, { Component } from "react";

export default class NewsItem extends Component {

  

  render() {
    let {title,imgUrl,desc,newsUrl}=this.props;
    return (
      <>
        <div className="card" style={{width: '18rem'}}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {desc}
            </p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
