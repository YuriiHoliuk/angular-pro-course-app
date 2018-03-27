import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './containers/app/app.component';
import { Store } from './store';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HealthModule } from './health/health.module';

const ROUTES: Routes = [
  {
    path:       '',
    pathMatch:  'full',
    redirectTo: 'auth'
  },
  {
    path:         'auth',
    loadChildren: './auth/auth.module#AuthModule'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports:      [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule,
    HealthModule,
  ],
  providers:    [
    Store
  ],
  bootstrap:    [AppComponent]
})
export class AppModule {
}
