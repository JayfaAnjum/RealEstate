import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { PersistGate } from "redux-persist/integration/react";

import { authApi } from "./services/authApi";
import authReducer from "./slices/authSlice"; 


const rootReducer = combineReducers({
  auth: authReducer,                  
  [authApi.reducerPath]: authApi.reducer, 
});

// 2️⃣ Persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // only auth slice will be persisted
};

// 3️⃣ Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4️⃣ Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }).concat(authApi.middleware),
});

// 5️⃣ Persistor
export const persistor = persistStore(store);
