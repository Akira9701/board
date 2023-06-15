import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableAdminItem from './tableItems/tableItem';
import { RootState } from '../../store';
import getData from '../../utils/getData';
import { IScheldueState } from '../../types';
import { setScheldue } from '../../store/slices/scheduleSlice';
import { setTrainers } from '../../store/slices/trainersSlice';
import { setOperators } from '../../store/slices/operatorsSlice';

const TableAdmin = () => {
  const dispatch = useDispatch();
  const scheldue = useSelector((state: RootState) => state.scheldue);
  const trainers = useSelector((state: RootState) => state.trainers);
  const directors = useSelector((state: RootState) => state.operators);

  useEffect(() => {
    getData('scheldue/').then((res: IScheldueState[]) => dispatch(setScheldue(res)));
    getData('trainers/').then((res: IScheldueState[]) => dispatch(setTrainers(res)));
    getData('operators/').then((res: IScheldueState[]) => dispatch(setOperators(res)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className='table_section'>
      <div className='table_name-container'>
        <div className='table_name-wrap'>
          <div className='table_col-name'>
            <p>time</p>
          </div>
          <div className='table_col-name'>
            <p>number</p>
          </div>
          <div className='table_col-name'>
            <p>name</p>
          </div>
          <div className='table_col-name'>
            <p>system</p>
          </div>
          <div className='table_col-name'>
            <p>video</p>
          </div>
          <div className='table_col-name'>
            <p>a/d</p>
          </div>
        </div>

        <div className='table_name-wrap'>
          <div className='table_col-name'>
            <p>time</p>
          </div>
          <div className='table_col-name'>
            <p>number</p>
          </div>
          <div className='table_col-name'>
            <p>name</p>
          </div>
          <div className='table_col-name'>
            <p>system</p>
          </div>
          <div className='table_col-name'>
            <p>video</p>
          </div>
          <div className='table_col-name'>
            <p>a/d</p>
          </div>
        </div>
      </div>
      <div className='table_items-container'>
        {scheldue.length > 0 &&
          trainers.length > 0 &&
          directors.length > 0 &&
          scheldue.map((el, index) => {
            return (
              <TableAdminItem
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                data={el}
                trainers={trainers[index]}
                directors={directors[index]}
              />
            );
          })}
      </div>
    </section>
  );
};

export default TableAdmin;
