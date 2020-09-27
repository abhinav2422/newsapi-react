import React, { Component } from 'react';

import DataList from '../../components/DataList';

export default class NewsList extends Component {
  openModal = (news) => {
    console.log(news);
  }

  render() {
    return (
      <div>
        {this.props.news.map((item, index) => (
          <DataList
            key={index}
            header={item.title}
            subHeader={item.publishedAt}
            item={item}
            image={item.urlToImage}
            itemClickFunc={this.openModal}
          />
        ))}
      </div>
    )
  }
}
