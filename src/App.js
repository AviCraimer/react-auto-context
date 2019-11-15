import React,  {Component} from 'react';
import './App.css';
import Main from './components/Main';
import ContextManager from './components/ContextManager';

const App  = () => {
    return <ContextManager AppComponent={<Main />}/>;
}

export default App ;


// class App  extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             activeProviders: ['ContextContext']
//         }
//         newProvider('ContextContext', this.state, {updateContextProviders: this.updateContextProviders.bind(this)});
//     }

//     updateContextProviders () {


//         const newProviders = [];
//         //Do stuff here to see which providers should be rendered
//         this.setState({activeProviders: ['ContextManagerContext', ...newProviders]} );
//     }

//     renderNestedProviders (AppComponentToBeWrapped) {
//         const {activeProviders} = this.state;

//         let PrevComponent = AppComponentToBeWrapped;
//         activeProviders.forEach( (contextName) => {
//                 PrevComponent  = <ProviderStateContainer children={PrevComponent} contextName={contextName} />
//         });

//         return PrevComponent;
//     }

//     componentDidMount () {


//         // newProvider('' )
//     }



//     render() {

//         return (
//             this.renderNestedProviders(<Main/>)
//         )

//     }
// }


// export default App;
