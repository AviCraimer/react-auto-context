import React, { Component } from 'react';
import {newContext, getContext} from './Context';

const appProviderProps = {

}

export const newProvider = function (contextName, initialState, actions) {
    if ( appProviderProps[contextName] !== undefined) {
        //We maintain a one-to-one relationship betweeen context and provider
        throw new Error ('The provider name: ' + contextName + ' is already in use.');
    }

    let Context;

    if (getContext(contextName) === null) {
        Context = newContext(contextName, {contextName, state: initialState, actions});
    } else {
        //Normally, this shouldn't happen since we create a new context only when we create a new provider
        Context = getContext(contextName);
    }

    const providerProps = {
        contextName: contextName,
        Provider: Context.Provider,
        state: initialState,
        actions
    }

    appProviderProps[contextName] = providerProps;
}


export class ProviderStateContainer  extends Component {
    //Props
    // child, contextName


    constructor(props) {
        super(props);
        const {contextName} = this.props;

        this.providerProps = appProviderProps[contextName];

        if (!this.providerProps) {
            throw new Error ('No provider props found for ' + contextName +  '. Create a provider and context first with then newProvider function.');
        }
        const {actions} = this.providerProps;
        console.log('Provider Props ',this.providerProps)
        this.state = {...this.providerProps.state};
        this.actions = {};
        Object.entries(actions).forEach(([fnName, func]) => {
            console.log("this", this);
            this.actions[fnName] = func.bind(this);
        } );
    }
    render() {
        const {child} = this.props;
        const {Provider, contextName} = this.providerProps;
        return <Provider value={{contextName, state: this.state, actions: this.actions }} children={child ? child : null}  />
    }
}



// export const createProviderElement =  function  ({Provider, value, providerContextName}, child=null) { //
//     return React.createElement(providerContextName, {value},  <Provider value={value} children={child}  />);
// }



