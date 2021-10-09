import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HabitFormComponent} from './habit-form/habit-form.component';
import {AllHabitsComponent} from './all-habits/all-habits.component';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import { AllHabitsPageComponent } from './all-habits-page/all-habits-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AllHabitsComponent,
    HabitFormComponent,
    ToolbarComponent,
    AllHabitsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
