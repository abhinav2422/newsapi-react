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

  containsObj = (obj, value) => {
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].title === value.title &&
        obj[i].description === value.description &&
        obj[i].content === value.content) {
        return true;
      }
    }

    return false;
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
          item={this.state.selectedNewsArticle}
          icon={'star'}
          iconAction={this.props.toggleFav}
          iconColor={this.containsObj(this.props.favourite, this.state.selectedNewsArticle) ? 'yellow' : null}
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
            listFuncIcon={'star'}
            listFunc={this.props.toggleFav}
            listFuncIconColor={this.containsObj(this.props.favourite, item) ? 'yellow' : null}
          />
        ))}
      </div>
    )
  }
}
