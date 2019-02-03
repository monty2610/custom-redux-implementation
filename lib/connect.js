import React from 'react';

const StoreContext = React.createContext({});

export class Provider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      storeState: props.store.getState(),
    }
  }
  componentDidMount(){
    this.props.store.subscribe(state => {
      this.setState({
        storeState: state,
      })
    })
  }
  render(){
    const {children, store} = this.props;
    return <StoreContext.Provider value={{state: this.state.storeState, dispatch: store.dispatch, subscribe: store.subscribe }}>{children}</StoreContext.Provider>;
  }
}
export const connect = (dispatchPropsFunc, statePropsFunc) => {
  return (WrappedComponent) => {
    return class extends React.PureComponent {
      render(){
        return <StoreContext.Consumer>
          {({dispatch, state, subscribe}) => {
            const stateProps = statePropsFunc ? statePropsFunc(state) : {};
            const dispatchProps = dispatchPropsFunc ? dispatchPropsFunc(dispatch) : {};
            return <WrappedComponent {...this.props} {...stateProps} {...dispatchProps} {...{subscribe}} />
          }}
        </StoreContext.Consumer>
      }
    }
  }
}

