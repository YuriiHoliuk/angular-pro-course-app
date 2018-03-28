import { Pipe, PipeTransform } from '@angular/core';
import { IEndurance, IStrength, Workout } from '../../models/workout';

@Pipe({
  name: 'workout'
})
export class WorkoutPipe implements PipeTransform {

  private static strengthInfo(strength: IStrength): string {
    return `Weight: ${strength.weight}kg, Reps: ${strength.reps}, Sets: ${strength.sets}`;
  }

  private static enduranceInfo(endurance: IEndurance): string {
    return `Distance: ${endurance.distance}km, Duration: ${endurance.duration}mins`;
  }

  transform(value: Workout): string {
    switch (value.type) {
      case 'strength':
        return WorkoutPipe.strengthInfo(value.strength);
      case 'endurance':
        return WorkoutPipe.enduranceInfo(value.endurance);
    }
  }
}
