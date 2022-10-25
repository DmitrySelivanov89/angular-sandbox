import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllHabitsComponent } from './components/all-habits/all-habits.component';
import { HabitFormComponent } from './components/habit-form/habit-form.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AllHabitsPageComponent } from './pages/all-habits-page/all-habits-page.component';
import { HabitFormPageComponent } from './pages/habit-form-page/habit-form-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AllHabitsComponent,
    HabitFormComponent,
    ToolbarComponent,
    AllHabitsPageComponent,
    HabitFormPageComponent,
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
export class AppModule {}
