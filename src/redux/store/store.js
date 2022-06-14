import { combineReducers, createStore } from "redux";
import { guardarDatos } from "../../components/LocalStorage";
import { citasReducers } from "../reducers/citasReducers";

const reducers = combineReducers({
    agendarCitaStore: citasReducers
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(()=>{
    guardarDatos({
        cita: store.getState().agendarCitaStore
    })
})