import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, publishedAt, source} = this.props; //destructuring
    return (
      <div className='my-3'>
        <div className="card">
            <div className="container">
              <span className="badge rounded-pill bg-danger" style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>{source}</span>
            </div>
            <img src={!imageUrl?"https://assets-prd.ignimgs.com/2024/06/03/eldenring-shadow-fp-blogroll-1717445459923.jpg?width=1280":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} target = "_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read</a>
                <p className="card-text my-2"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(publishedAt).toGMTString()}</small></p>
            </div>
        </div>
      </div>
    )
  }
}