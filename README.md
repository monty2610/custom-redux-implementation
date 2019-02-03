This project contains example code to implement redux like functionality and example code to use the same.
lib - contains redux code
  - redux.js - export createStore method, which will return function to dispatch event, get the current state and 
               a subscribe method to subscribe for store change.
  - connect.js - export Provider component which will provide store to all childrens and a connect HOC which will bind 
                 dispatch and state props with the component.
                 
                 
 src - contains example code
