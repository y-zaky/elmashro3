//core imports
import { applyMiddleware , createStore } from "redux"

// middleware
import logger from "redux-logger"

//reducers
import reducer from "./reducers"

const middleware = applyMiddleware(logger())

// export default createStore(reducer, middleware)
const store = createStore(reducer, middleware)

store.subscribe( () => console.log('store changed', store.getState() ) )
store.dispatch({type:"GET_TRENDING_ITEMS", payload:"XBOXXX"})