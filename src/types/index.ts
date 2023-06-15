export interface IOperator {
  name: string;
  ability: boolean;
}

export interface IOperatorState {
  [key: string]: IOperator[];
}

export interface ITrainer {
  name: string;
  ability: boolean;
}

export interface ITrainerState {
  [key: string]: ITrainer[];
}

export interface IPerson {
  name: string;
  time: string;
  status: string;
  id: number;
  trainer: {
    availability: boolean;
    nameTrainer: string;
  };
  director: {
    availability: boolean;
    nameDirector: string;
  };
}

export interface IScheldueState {
  [key: string]: IPerson[];
}
