import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
//  存储机制，可换成其他机制，当前使用sessionStorage机制
import storageSession from 'redux-persist/lib/storage/session';
//localStorage机制
// import storage from 'redux-persist/lib/storage'; 

// 数据对象
// 使用persistReducer时需要指定persistConfig，这一项就是你需要缓存的数据处理项，它有着黑白名单的处理方式，还需要一个storage的协助：
const persistConfig = {
  key: 'root', // 必须有的
  storage: storageSession, // 缓存机制
  blacklist: [] // reducer 里不持久化的数据,除此外均为持久化数据
}
// 或者
// const persistConfig = {
//   key: 'root', // 必须有的
//   storage: storageSession, // 缓存机制
//   whitelist: ['name', 'age'] // reducer 里持久化的数据,除此外均为不持久化数据
// }
const myPersistReducer = persistReducer(persistConfig, reducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(myPersistReducer, composeEnhancers(
//   applyMiddleware(thunk)
// ));
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));
// const store = createStore(myPersistReducer)

export const persistor = persistStore(store)
export default store;