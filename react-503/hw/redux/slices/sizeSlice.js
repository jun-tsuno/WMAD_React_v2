import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	size: 320,
};

const sizeSlice = createSlice({
	name: 'size',
	initialState,
	reducers: {
		addWidth: (state, action) => {
			return { ...state, size: state.size + 10 };
		},
		subtractWidth: (state, action) => {
			if (state.size <= 100) return;
			return { ...state, size: state.size - 10 };
		},
	},
});

export const { addWidth, subtractWidth } = sizeSlice.actions;
export default sizeSlice.reducer;
