import { createSlice } from '@reduxjs/toolkit';
import { IScheldueState } from '../../types';
import setData from '../../utils/setData';

const initialState = [] as IScheldueState[];

const scheldueSlice = createSlice({
  name: 'scheldue',
  initialState,
  reducers: {
    changeTrainerStatus(state, action) {
      [...state].forEach((el, index) => {
        if (action.payload.time in el) {
          const i = el[action.payload.time].findIndex((item) => item.id === action.payload.id);
          el[action.payload.time][i].status = action.payload.status;
          // setData(`scheldue/${index}/${action.payload.time}/${i}/status`, action.payload.status);
          if (action.payload.status === 'Пара') {
            el[action.payload.time][i].trainer.availability = true;
            // setData(`scheldue/${index}/${action.payload.time}/${i}/trainer/availability`, true);
          } else {
            el[action.payload.time][i].trainer.availability = false;
            el[action.payload.time][i].trainer.nameTrainer = '-';
            // setData(`scheldue/${index}/${action.payload.time}/${i}/trainer/availability`, false);
            // setData(`scheldue/${index}/${action.payload.time}/${i}/trainer/nameTrainer/`, '-');
          }
        }
      });
    },
    changeTrainerName(state, action) {
      [...state].forEach((el) => {
        if (action.payload.time in el) {
          const i = el[action.payload.time].findIndex((item) => item.id === action.payload.id);
          el[action.payload.time][i].trainer.nameTrainer = action.payload.name;
        }
      });
    },
    changeDirectorStatus(state, action) {
      [...state].forEach((el) => {
        if (action.payload.time in el) {
          const i = el[action.payload.time].findIndex((item) => item.id === action.payload.id);
          el[action.payload.time][i].director.availability =
            !el[action.payload.time][i].director.availability;
        }
      });
    },
    changeDirectorName(state, action) {
      [...state].forEach((el) => {
        if (action.payload.time in el) {
          const i = el[action.payload.time].findIndex((item) => item.id === action.payload.id);
          el[action.payload.time][i].director.nameDirector = action.payload.name;
        }
      });
    },
    changePersonName(state, action) {
      [...state].forEach((el) => {
        if (action.payload.time in el) {
          const i = el[action.payload.time].findIndex((item) => item.id === action.payload.id);
          el[action.payload.time][i].name = action.payload.name;
        }
      });
    },
    addUser(state, action) {
      [...state].forEach((el) => {
        if (action.payload.time in el) {
          el[action.payload.time].push({
            name: action.payload.name,
            time: '10:30',
            status: 'Спортсмен',
            id: Date.now(),
            trainer: {
              availability: false,
              nameTrainer: '-'
            },
            director: {
              availability: false,
              nameDirector: '-'
            }
          });
        }
      });
    },
    removeUser(state, action) {
      [...state].forEach((el) => {
        if (action.payload.time in el) {
          const i = el[action.payload.time].findIndex((item) => item.id === action.payload.id);
          el[action.payload.time].splice(i, 1);
        }
      });
    },
    setScheldue(state, action) {
      return [...action.payload];
    }
  }
});

export default scheldueSlice.reducer;
export const {
  changeTrainerStatus,
  changeTrainerName,
  changeDirectorStatus,
  changeDirectorName,
  addUser,
  changePersonName,
  setScheldue,
  removeUser
} = scheldueSlice.actions;
