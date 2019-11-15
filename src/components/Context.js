import React, {createContext} from 'react';

const appContexts = {}


export const newContext = function (contextName, defaultValue) { // String
    if ( appContexts[contextName] !== undefined) {
        throw new Error ('The context name: ' + contextName + ' is already in use.');
    }

    appContexts[contextName] =  createContext(defaultValue);
    return appContexts[contextName];
}

export const getContext = function (contextName) {
    if (appContexts[contextName] === undefined) {
        return null;
    } else {
        return appContexts[contextName];
    }
}




