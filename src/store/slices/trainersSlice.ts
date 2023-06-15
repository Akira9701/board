import { createSlice } from '@reduxjs/toolkit';
import { ITrainerState } from '../../types';
import setData from '../../utils/setData';

const initialState = [] as ITrainerState[];

const trainersSlice = createSlice({
  name: 'trainers',
  initialState,
  reducers: {
    toggleTrainer(state, action) {
      [...state].forEach((el, index) => {
        if (action.payload.time in el) {
          const i = el[action.payload.time].findIndex((item) => item.name === action.payload.name);
          if (i !== -1) {
            el[action.payload.time][i].ability = !!action.payload.flag;
            setData(`trainers/${index}/${action.payload.time}/${i}/ability`, !!action.payload.flag);
          }
        }
        return el;
      });
    },
    setTrainers(state, action) {
      return [...action.payload];
    }
  }
});

export default trainersSlice.reducer;
export const { toggleTrainer, setTrainers } = trainersSlice.actions;
