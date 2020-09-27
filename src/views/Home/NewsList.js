import React, { Component } from 'react';

import DataList from '../../components/DataList';
import CustomModal from '../../components/CustomModal';

export default class NewsList extends Component {
  state = {
    isModalOpen: false,
    selectedNewsArticle: {}
  }

  modalState = (news = {}) => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      selectedNewsArticle: news
    });
  }

  render() {
    return (
      <div>
        <CustomModal
          isModalOpen={this.state.isModalOpen}
          changeModalState={this.modalState}
          title={this.state.selectedNewsArticle.title}
          header={this.state.selectedNewsArticle.description}
          description={this.state.selectedNewsArticle.content}
          image={this.state.selectedNewsArticle.urlToImage}
          actionText={"Close"}
        />
        {this.props.news.map((item, index) => (
          <DataList
            key={index}
            header={item.title}
            subHeader={item.publishedAt}
            item={item}
            image={item.urlToImage}
            itemClickFunc={this.modalState}
          />
        ))}
      </div>
    )
  }
}
