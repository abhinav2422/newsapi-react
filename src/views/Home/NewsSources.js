import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

import DataList from '../../components/DataList';

export default class NewsSources extends Component {
  render() {
    return (
      <div>
        <div
          className={`list-item ${this.props.selectedSource === '' ? 'selectedItem' : ''}`}
          onClick={() => { this.props.changeNewsSource('') }}
        >
          <List celled relaxed>
            <List.Item>
              <List.Content className="list-item-data">
                <List.Header>All Sources</List.Header>
              </List.Content>
            </List.Item>
          </List>
        </div>
        {this.props.sources.map(source => (
          <DataList
            key={source.id}
            header={source.name}
            sourceId={source.id}
            selectedSource={this.props.selectedSource}
            changeNewsSource={this.props.changeNewsSource}
          />
        ))}
      </div>
    )
  }
}
