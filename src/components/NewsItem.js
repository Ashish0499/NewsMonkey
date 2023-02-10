
import React, { Component } from 'react'

export class NewsItem extends Component {
   
  render() {
    let {title, description, url, newsUrl, author, date} = this.props;
    return (
      <div className="my-3">
        <div className="card">
  <img src={!url ? "https://soranews24.com/wp-content/uploads/sites/3/2023/02/SR-1-1.jpg?w=580&h=305&crop=1": url} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p class="card-text"><small className="text-muted">by { !author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
