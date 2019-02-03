import React from 'react';
import { connect } from '../lib/connect';

class CommentList extends React.PureComponent {
  constructor(props){
    super(props);
    this.unsubscribe = null;
  }
  componentDidMount(){
    this.unsubscribe = this.props.subscribe(state => {
      console.log('commentList: current state is: ', state);
    });
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){
    const { topics, selectedTopic } = this.props;
    if(!selectedTopic || !topics[selectedTopic]){
      return null;
    }
    const comments = topics[selectedTopic];
    return <div>
        <h2>Comments</h2>
        <ul>{comments.map(comment => <li key={comment}>{comment}</li>)}</ul>
      </div>
  }
}

const mapStateToProps = (state) => ({
  topics: state.topicList,
  selectedTopic: state.selectedTopic,
});


export default connect(null, mapStateToProps)(CommentList);
