export class Workout {
  name: string;
  type: WorkoutType;
  strength?: IStrength;
  endurance?: IEndurance;
  timestamp?: number;
  $key?: string;
}

export interface IStrength {
  reps: number;
  sets: number;
  weight: number;
}

export interface IEndurance {
  distance: number;
  duration: number;
}

export type WorkoutType = 'strength' | 'endurance';
