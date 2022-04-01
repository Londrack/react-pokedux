import { setError } from "../actions";

export const logActions = store => next => actionInfo => {
    console.log('disparando: ', actionInfo);
    next(actionInfo);
}

export const reportError = store => next => actionInfo => {
    const action = actionInfo;
    if (action?.type === setError){
        console.error(action.payload);
    }
}