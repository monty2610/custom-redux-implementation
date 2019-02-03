export function addTopic(topicName, commentList){
  return {
    type: 'ADD_TOPIC',
    topicName,
    commentList
  };
}

export function selectTopic(topic){
  return {
    type: 'SET_TOPIC',
    topic,
  };
}
