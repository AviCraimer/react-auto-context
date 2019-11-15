import React,  {Component} from 'react';
import {newProvider, ProviderStateContainer} from './ContextProvider';

class ContextManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeProviders: ['ContextManagerContext']
        }
        newProvider('ContextManagerContext', {}, {updateContextProviders: this.updateContextProviders.bind(this)});
    }

    updateContextProviders (contextName, addRemove) { //string, bool
        const {activeProviders} = this.state;
        if (contextName === 'ContextManagerContext') {
            throw new Error ("Cannot change ContextManagerContext provider");
        }

        const i = activeProviders.indexOf(contextName);
        let newProviders = [...activeProviders];
        if (i > -1 && addRemove === false) { // contains name to be removed
            //Remove
            newProviders.splice(i,1);
        } else if (i === -1 && addRemove) { // Does not contain name to be added
            newProviders.push(contextName);
        }

        this.setState({activeProviders: newProviders} );
    }

    renderNestedProviders (AppComponentToBeWrapped) {
        const {activeProviders} = this.state;

        let PrevComponent = AppComponentToBeWrapped;
        activeProviders.forEach( (contextName) => {
                PrevComponent  = <ProviderStateContainer children={PrevComponent} contextName={contextName} />
        });

        return PrevComponent;
    }

    render() {
        return this.renderNestedProviders(this.props.AppComponent);
    }
}


export default ContextManager;
