// import { createStore, applyMiddleware, compose } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import ReduxThunk from "redux-thunk";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import { rootReducer } from "./Reducer/rootReducer";

// // const persistConfig = {
// //   key: "mentorBooking",
// //   storage,
// // };

// // const composeEnhancers =
// //   typeof window === "object" && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_
// //     ? window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({
// //         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
// //       })
// //     : compose;


// // const enhancer = composeEnhancers(
// //   applyMiddleware(ReduxThunk)
// //   // other store enhancers if any
// // );

// // const persistedReducer = persistReducer(persistConfig, rootReducer);

// // export default () => {
// //   let store = createStore(persistedReducer, enhancer);
// //   let persistor = persistStore(store);
// //   return { store, persistor };
// // };

// export default () => {
//     let store = createStore(rootReducer);
//     return {store}
// }