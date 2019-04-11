import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Práticas Documentação

function Welcome(props){
    return <h3>Disciplinas: {props.name}</h3>
}

function Disc(){
    return (
        <div>
            <ul>
                <li><Welcome name = "PDI"/></li>
                <li><Welcome name = "PW"/></li>
                <li><Welcome name = "ES"/></li>
                <li><Welcome name = "EA"/></li>
            </ul>
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister(); 
