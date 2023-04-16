import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { rootReducer } from './slices';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { updateCatMood } from './slices/moodSlice';
import { addWidth, subtractWidth } from './slices/sizeSlice';
import { updateColor } from './slices/colorSlice';
import { getMoods } from './middleware/api';

let middleware = [thunk];
if (import.meta.env.DEV) {
	middleware = [...middleware, logger];
}

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware,
});

const persistor = persistStore(store);

const AppProvider = ({ children }) => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>{children}</PersistGate>
		</Provider>
	);
};

export {
	AppProvider,
	store,
	updateCatMood,
	addWidth,
	subtractWidth,
	updateColor,
	getMoods,
};
