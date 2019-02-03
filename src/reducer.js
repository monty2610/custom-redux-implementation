const initialTopicList = {};
export function topicList(state = initialTopicList, action) {
  switch(action.type) {
    case 'ADD_TOPIC':
      return Object.assign(state, {
        [action.topicName]: action.commentList
      });
    default:
      return state;
  }
}

// lastAction reducer
const initialSelectedTopic = '';

export function selectedTopic(state = initialSelectedTopic, action) {
  switch(action.type) {
    case 'SET_TOPIC':
      return action.topic;
    default:
      return state;
  }
}
