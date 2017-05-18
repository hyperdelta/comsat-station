import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {router5Middleware, router5Reducer} from 'redux-router5';

//reducers
import breadcrumb from './reducers/breadcrumb';
import user from './reducers/user';
import refinery from './reducers/refinery';
import refineryForm from './reducers/refinery-form';

export default function configureStore(router, initialState = {}) {
    const createStoreWithMiddleware = applyMiddleware(
        thunk,
        router5Middleware(router)
    )(createStore);

    const store = createStoreWithMiddleware(combineReducers({
        router: router5Reducer,
        breadcrumb,
        user,
        refinery,
        refineryForm

    }), initialState);

    window.store = store;
    return store;
}
