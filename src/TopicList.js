import React from 'react';
import { connect } from '../lib/connect';
import { selectTopic } from './actions';

class TopicList extends React.PureComponent {
  constructor(props){
    super(props);
    this.unsubscribe = null;
    this.state = {
      selectedTopic: ''
    }
  }
  componentDidMount(){
    this.unsubscribe = this.props.subscribe(state => {
      console.log('TopicList: current state is: ', state);
    });
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  handleTopic(topic) {
    this.setState({
      selectedTopic: topic,
    }, () => {
      this.props.setTopic(topic);
    });

  }


  render(){
    const { topics } = this.props;
    if(!topics){
      return null;
    }
    return (
      <div>
        <h2>Topics</h2>
        <h3>Click on a topic to select one</h3>
        <ul>{topics.map(topic => (<li key={topic} onClick={evt => {this.handleTopic(topic)}}>{topic}</li>))}</ul>
        <p>Selected Topic: {this.state.selectedTopic}</p>
        <button onClick={() => this.handleTopic('')}>Reset Topic</button>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  topics: Object.keys(state.topicList)
});

const mapDispatchToProps = dispatch => ({
  setTopic: topic => {
    dispatch(selectTopic(topic));
  }
});

export default connect(mapDispatchToProps, mapStateToProps)(TopicList);
