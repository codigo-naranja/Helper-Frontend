import {createStore, combineReducers} from "redux"
import users from "./reducers/users"

const reducers = combineReducers({
    users
})

const store = createStore(reducers)

export default store