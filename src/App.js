import React from 'react';
import {createStore, combineReducers} from '../lib/redux';
import { topicList, selectedTopic } from './reducer';
import { addTopic } from './actions';
import { Provider } from '../lib/connect';
import TopicList from './TopicList';
import CommentList from './CommentList';

const store = createStore(combineReducers({
  topicList,
  selectedTopic
}));

store.dispatch(addTopic("js", ["js is a great langauage", "js: dynamic in nature"]));
store.dispatch(addTopic("java", ["java is awesome", "java: write once use anywhere"]));

const App = () => (<Provider store={store}>
                      <TopicList />
                      <CommentList />
                    </Provider>);

export default App;
