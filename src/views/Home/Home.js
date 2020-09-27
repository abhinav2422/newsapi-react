import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader, Grid, Message } from 'semantic-ui-react';

import NewsSources from './NewsSources';
import NewsList from './NewsList';
import { fetchSources, fetchNews, showFavNews } from '../../actions/homeActions';

class Home extends Component {
  state = {
    selectedSource: '',
    favourite: []
  }

  componentDidMount() {
    this.props.fetchSources();
    this.props.fetchNews();
  }

  changeNewsSource = (source) => {
    window.scrollTo(0, 0);
    if (source === 'fav') {
      this.props.showFavNews(this.state.favourite);
    } else {
      this.props.fetchNews(source);
    }

    this.setState({
      selectedSource: source
    })
  }

  toggleFav = (article) => {
    let updateFav = this.containsObj(this.state.favourite, article);
    this.setState({ favourite: updateFav });
  }

  containsObj = (obj, value) => {
    let flag = 1;
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].title === value.title &&
        obj[i].description === value.description &&
        obj[i].content === value.content) {
        obj.splice(i, 1);
        flag = 0;
      }
    }

    if (flag) {
      obj.push(value);
    }

    return obj;
  }

  render() {
    return (
      <div>
        <Dimmer active={this.props.loading} page>
          <Loader />
        </Dimmer>
        {this.props.error &&
          <div style={{ margin: 'auto', width: '330px', padding: '5px' }}>
            <Message negative>
              <Message.Header>{this.props.error}</Message.Header>
            </Message>
          </div>}
        <Grid columns='equal' divided>
          <Grid.Column width={4}>
            <NewsSources
              sources={this.props.sources}
              selectedSource={this.state.selectedSource}
              changeNewsSource={this.changeNewsSource}
              favourite={this.state.favourite}
            />
          </Grid.Column>
          <Grid.Column>
            <NewsList
              news={this.props.news}
              toggleFav={this.toggleFav}
              favourite={this.state.favourite}
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

export default connect(matchStateToProps, { fetchSources, fetchNews, showFavNews })(Home);
