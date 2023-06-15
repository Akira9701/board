import { ref, child, get } from 'firebase/database';
import dataBase from '../firebase';
import { IScheldueState } from '../types';

function getData(query: string): Promise<IScheldueState> {
  const dbRef = ref(dataBase);
  return get(child(dbRef, query))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      }

      return false;
    })
    .catch((error) => {
      console.error(error);
    });
}

export default getData;
