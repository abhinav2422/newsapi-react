import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader, Grid } from 'semantic-ui-react';

import NewsSources from './NewsSources';
import NewsList from './NewsList';
import { fetchSources, fetchNews } from '../../actions/homeActions';

class Home extends Component {
  state = {
    selectedSource: ''
  }

  componentDidMount() {
    this.props.fetchSources();
    this.props.fetchNews();
  }

  changeNewsSource = (source) => {
    this.props.fetchNews(source);

    this.setState({
      selectedSource: source
    })
  }

  render() {
    return (
      <div>
        <Dimmer active={this.props.loading} page>
          <Loader />
        </Dimmer>
        <Grid columns='equal' divided>
          <Grid.Column width={4}>
            <NewsSources
              sources={this.props.sources}
              selectedSource={this.state.selectedSource}
              changeNewsSource={this.changeNewsSource}
            />
          </Grid.Column>
          <Grid.Column>
            <NewsList
              news={this.props.news}
            />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const matchStateToProps = state => ({
  loading: state.home.loading,
  sources: state.home.sources,
  news: state.home.news,
  error: state.home.error
})

export default connect(matchStateToProps, { fetchSources, fetchNews })(Home);
