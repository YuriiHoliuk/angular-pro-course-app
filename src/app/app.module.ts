import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// store
import { Store } from './store';

// feature modules
import { AuthModule } from './auth/auth.module';
import { HealthModule } from './health/health.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';

const ROUTES: Routes = [];

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
