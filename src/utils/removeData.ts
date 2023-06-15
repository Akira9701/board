import { ref, update } from 'firebase/database';
import dataBase from '../firebase';

export default function setData(query: string, data: any) {
  const updates = {};
  updates[query] = data;
  update(ref(dataBase), updates);
}
