import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
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
