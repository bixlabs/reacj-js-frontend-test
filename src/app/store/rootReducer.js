import { combineReducers } from "redux"
import testReducer from "../../features/sandbox/testReducer"
import checkoutReducer from "../../features/checkout/checkoutReducer"
import servicesReducer from "../../features/services/servicesReducer"

const rootReducer = combineReducers({
    test: testReducer,
    checkout: checkoutReducer,
    services: servicesReducer,
})

export default rootReducer