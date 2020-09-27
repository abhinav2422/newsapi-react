import React, { Component } from 'react';
import { Image, List } from 'semantic-ui-react';

class DataList extends Component {
  render() {
    const { image, header, subHeader, selectedSource, sourceId, changeNewsSource } = this.props;
    return (
      <div
        className={`list-item ${selectedSource === sourceId ? 'selectedItem' : ''}`}
        onClick={() => { changeNewsSource(sourceId) }}
      >
        <List celled relaxed>
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
