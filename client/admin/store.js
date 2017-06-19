import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import {router5Middleware, router5Reducer} from 'redux-router5';
import socketMiddleware from './middleware/socketio'

//socketio events
import socketioEvents from './actions/socketio'

//reducers
import breadcrumb from './reducers/breadcrumb';
import user from './reducers/user';
import refinery from './reducers/refinery';
import refineryForm from './reducers/refinery-form';


export default function configureStore(router, initialState = {}) {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        combineReducers({
            router: router5Reducer,
            breadcrumb,
            user,
            refinery,
            refineryForm

        }),
        initialState,
        composeEnhancers(
            applyMiddleware(
                // socketMiddleware,
                thunk,
                router5Middleware(router)
            )
        )
    );

    //bind socket events
    socketioEvents(store);


    window.store = store;
    return store;
}
