import { createSlice } from '@reduxjs/toolkit';
import { IOperatorState } from '../../types';
import setData from '../../utils/setData';

const initialState = [] as IOperatorState[];

const operatorSlice = createSlice({
  name: 'trainers',
  initialState,
  reducers: {
    toggleOperator(state, action) {
      [...state].forEach((el, index) => {
        if (action.payload.time in el) {
          console.log(action.payload);

          // const i = el[action.payload.time].findIndex((item) => item.name === action.payload.name);
          if (action.payload.name !== '-')
            el[action.payload.time][action.payload.name].ability = !!action.payload.flag;
          // setData(`operators/${index}/${action.payload.time}/${i}/ability`, !!action.payload.flag);
        }
        return el;
      });
    },
    setOperators(state, action) {
      return [...action.payload];
    }
  }
});

export default operatorSlice.reducer;
export const { toggleOperator, setOperators } = operatorSlice.actions;
