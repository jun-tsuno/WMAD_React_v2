import { createSlice } from '@reduxjs/toolkit';
import { getMoods } from '../middleware/api';

const initialState = {
	moods: [],
	currentMood: undefined,
};

const moodSlice = createSlice({
	name: 'mood',
	initialState,
	reducers: {
		updateCatMood: (state, action) => {
			return { ...state, currentMood: action.payload };
		},
	},
	extraReducers: {
		[getMoods.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.moods = action.payload;
		},
	},
});

export const { updateCatMood } = moodSlice.actions;
export default moodSlice.reducer;
