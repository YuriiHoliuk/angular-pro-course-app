import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';

// services
import { MealsService } from './services/meals.service';
import { WorkoutsService } from './services/workouts.service';

// components
import { ListItemComponent } from './components/list-item/list-item.component';

// pipes
import { JoinPipe } from './pipes/join.pipe';
import { WorkoutPipe } from './pipes/workout.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFireDatabaseModule,
  ],
  declarations: [
    ListItemComponent,
    JoinPipe,
    WorkoutPipe,
  ],
  exports: [
    ListItemComponent,
    JoinPipe,
    WorkoutPipe,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        MealsService,
        WorkoutsService,
      ]
    };
  }
}
