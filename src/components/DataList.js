import React, { Component } from 'react';
import { Image, List } from 'semantic-ui-react';

class DataList extends Component {
  render() {
    const {
      image,
      header,
      subHeader,
      item,
      itemClickFunc,
      customClass
    } = this.props;
    return (
      <div
        className={`list-item ${customClass}`}
        onClick={() => { itemClickFunc(item) }}
      >
        <List celled relaxed selection>
          <List.Item>
            {image && <Image avatar src={image} />}
            <List.Content className="list-item-data">
              <List.Header>{header}</List.Header>
              {subHeader}
            </List.Content>
          </List.Item>
        </List>
      </div>
    )
  }
}

export default DataList;
