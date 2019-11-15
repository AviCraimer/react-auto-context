import React from 'react';
import {getContext} from './Context';



// class ContextConsumer extends Component {
//     //Props
//     //ContextName, child
//     constructor(props) {
//         super(props);

//         this.state = {  }
//         this.Consumer = getContext(props.contextName);
//     }
//     render() {
//         const {Consumer} = this;
//         const {child} = this.props;
//         if (Consumer === null) {return null}

//         return (
//            <Consumer>
//                {value => }
//            </Consumer> );
//     }
// }


const ContextConsumer = function ({contextName, ContextConnected}) {

    const manager = useContext(getContext(ContextManagerContext));
    const {activeProviders} = manager.state;
    const {updateContextProviders} =  manager.actions;

    updateContextProviders(contextName, true);

    const Context = getContext(contextName);
    if (Context === null) {
        return null;
    }
    const value = useContext(MyContext);


    return <ContextConnectedComponent value={value} />
}

export default ContextConsumer