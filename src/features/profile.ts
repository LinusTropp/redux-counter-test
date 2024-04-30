import { createAction, createReducer } from "@reduxjs/toolkit";


const changeAlias = createAction<string>('change alias');
const changeName = createAction<string>('change name');
const changeProfile = createAction<Profile>('change profile');
const resetProfile = createAction('reset profile');

const actions = {changeAlias, changeName, changeProfile, resetProfile};

export interface Profile {
	alias : string;
	namn : string;
}

const initialState : Profile = {
	alias : '',
	namn : ''
};

const profileReducer = createReducer(initialState, builder => {
	builder
			.addCase(changeAlias, (state, action) => ({
			...state,
			alias: action.payload,
	  		}))
			.addCase(changeName, (state, action) => 
				({...state, namn : action.payload})
			)
			.addCase(changeProfile, (state, action) => 
			(action.payload	))
			.addCase(resetProfile, (state, action) => initialState)
			
})

export {actions, profileReducer};