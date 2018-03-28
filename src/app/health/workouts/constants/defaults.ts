import { IEndurance, IStrength, Workout, WorkoutType } from '../../models/workout';

export const DEFAULT_TYPE: WorkoutType = 'strength';

export const DEFAULT_ENDURANCE: IEndurance = {
  distance: 0,
  duration: 0,
};

export const DEFAULT_STRENGTH: IStrength = {
  reps: 0,
  sets: 0,
  weight: 0,
};

export const DEFAULT_WORKOUT: Workout = {
  name: '',
  type: DEFAULT_TYPE,
  endurance: DEFAULT_ENDURANCE,
  strength: DEFAULT_STRENGTH,
};
