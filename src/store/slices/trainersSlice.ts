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
          const i = el[action.payload.time][action.payload.name];
          if (i !== undefined) {
            el[action.payload.time][action.payload.name].ability = !!action.payload.flag;
            setData(
              `trainers/${index}/${action.payload.time}/${action.payload.name}/ability`,
              !!action.payload.flag
            );
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
