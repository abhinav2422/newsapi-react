import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewsSources from './NewsSources';
import { fetchSources } from '../../actions/homeActions';

class Home extends Component {
  state = {
    selectedSource: ''
  }

  componentDidMount() {
    this.props.fetchSources();
  }

  changeNewsSource = (source) => {
    this.setState({
      selectedSource: source
    })
  }

  render() {
    return (
      <div>
        <NewsSources
          sources={this.props.sources}
          selectedSource={this.state.selectedSource}
          changeNewsSource={this.changeNewsSource}
        />
      </div>
    )
  }
}

const matchStateToProps = state => ({
  sources: state.home.sources
})

export default connect(matchStateToProps, { fetchSources })(Home);
