import React, { Component } from 'react';
import { Image, List, Icon } from 'semantic-ui-react';

class DataList extends Component {
  render() {
    const {
      image,
      header,
      subHeader,
      item,
      itemClickFunc,
      customClass,
      listFunc,
      listFuncIcon,
      listFuncIconColor
    } = this.props;
    return (
      <div
        className={`list-item ${customClass}`}
      >
        <List celled relaxed selection>
          <List.Item>
            {image && <Image avatar src={image} onClick={() => { itemClickFunc(item) }} />}
            <List.Content className="list-item-data" onClick={() => { itemClickFunc(item) }}>
              <List.Header>{header}</List.Header>
              {subHeader}
            </List.Content>
            {listFuncIcon &&
              <List.Content floated='right' onClick={() => { listFunc(item) }}>
                <Icon color={listFuncIconColor} name={listFuncIcon} />
              </List.Content>}
          </List.Item>
        </List>
      </div>
    )
  }
}

export default DataList;
