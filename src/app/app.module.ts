import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatProgressBarModule, MatListModule, MatRadioModule, MatSliderModule, MatCardModule, MatCardContent } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { TrackingBikeComponent } from './tracking/tracking-bike/tracking-bike.component';
import { TrackingRowerComponent } from './tracking/tracking-rower/tracking-rower.component';
import { TrackingComponent } from './tracking/tracking.component';
import { TrackingBikeAddComponent } from './tracking/tracking-bike-add/tracking-bike-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TrackingRowerAddComponent } from './tracking/tracking-rower-add/tracking-rower-add.component';
import { TrackingBikeDeleteComponent } from './tracking/tracking-bike-delete/tracking-bike-delete.component';
import { TrackingRowerDeleteComponent } from './tracking/tracking-rower-delete/tracking-rower-delete.component';
import { TrackingRunningComponent } from './tracking/tracking-running/tracking-running.component';
import { TrackingRunningAddComponent } from './tracking/tracking-running-add/tracking-running-add.component';
import { TrackingRunningDeleteComponent } from './tracking/tracking-running-delete/tracking-running-delete.component';
import { StatsComponent } from './stats/stats.component';
import { StatsBikeComponent } from './stats/stats-bike/stats-bike.component';
import { StatsRowerComponent } from './stats/stats-rower/stats-rower.component';
import { StatsRunningComponent } from './stats/stats-running/stats-running.component';
import { StatsBikeMilesComponent } from './stats/stats-bike-miles/stats-bike-miles.component';
import { StatsBikeMinsComponent } from './stats/stats-bike-mins/stats-bike-mins.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalsBikeComponent } from './goals/goals-bike/goals-bike.component';
import { GoalsRowerComponent } from './goals/goals-rower/goals-rower.component';
import { GoalsRunningComponent } from './goals/goals-running/goals-running.component';
import { StatsRowerMilesComponent } from './stats/stats-rower-miles/stats-rower-miles.component';
import { StatsRowerMinsComponent } from './stats/stats-rower-mins/stats-rower-mins.component';
import { StatsRunningMilesComponent } from './stats/stats-running-miles/stats-running-miles.component';
import { StatsRunningMinsComponent } from './stats/stats-running-mins/stats-running-mins.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { WeeklyChallengeComponent } from './weekly-challenge/weekly-challenge.component';
import { WeeklyChallengeBikeComponent } from './weekly-challenge/weekly-challenge-bike/weekly-challenge-bike.component';
import { WeeklyChallengeRowerComponent } from './weekly-challenge/weekly-challenge-rower/weekly-challenge-rower.component';
import { CoreModule } from './core/core.module';
import { AuthGuard } from './core/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { UpdateGoalsComponent } from './update-goals/update-goals.component';
import { TrackingEllipticalComponent } from './tracking/tracking-elliptical/tracking-elliptical.component';
import { TrackingEllipticalAddComponent } from './tracking/tracking-elliptical-add/tracking-elliptical-add.component';
import { TrackingEllipticalDeleteComponent } from './tracking/tracking-elliptical-delete/tracking-elliptical-delete.component';
import { StatsEllipticalComponent } from './stats/stats-elliptical/stats-elliptical.component';
import { StatsEllipticalMinsComponent } from './stats/stats-elliptical-mins/stats-elliptical-mins.component';
import { StatsEllipticalStridesComponent } from './stats/stats-elliptical-strides/stats-elliptical-strides.component';
import { GoalsEllipticalComponent } from './goals/goals-elliptical/goals-elliptical.component';
import { WeeklyChallengeEllipticalComponent } from './weekly-challenge/weekly-challenge-elliptical/weekly-challenge-elliptical.component';
import { WeeklyChallengeRunningComponent } from './weekly-challenge/weekly-challenge-running/weekly-challenge-running.component';
import { SearchComponent } from './search/search.component';
import { SearchFirstComponent } from './search/search-first/search-first.component';
import { SearchLastComponent } from './search/search-last/search-last.component';
import { SearchFullComponent } from './search/search-full/search-full.component';
import { SearchEmailComponent } from './search/search-email/search-email.component';
import { FooterComponent } from './footer/footer.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SuggestedComponent } from './schedule/suggested/suggested.component';
import { SetScheduleComponent } from './schedule/set-schedule/set-schedule.component';
import { StatsMainComponent } from './stats/stats-main/stats-main.component';
import { SetScheduleCreateComponent } from './schedule/set-schedule-create/set-schedule-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrackingBikeComponent,
    TrackingRowerComponent,
    TrackingComponent,
    TrackingBikeAddComponent,
    TrackingRowerAddComponent,
    TrackingBikeDeleteComponent,
    TrackingRowerDeleteComponent,
    TrackingRunningComponent,
    TrackingRunningAddComponent,
    TrackingRunningDeleteComponent,
    StatsComponent,
    StatsBikeComponent,
    StatsRowerComponent,
    StatsRunningComponent,
    StatsBikeMilesComponent,
    StatsBikeMinsComponent,
    GoalsComponent,
    GoalsBikeComponent,
    GoalsRowerComponent,
    GoalsRunningComponent,
    StatsRowerMilesComponent,
    StatsRowerMinsComponent,
    StatsRunningMilesComponent,
    StatsRunningMinsComponent,
    WeeklyChallengeComponent,
    WeeklyChallengeBikeComponent,
    WeeklyChallengeRowerComponent,
    ProfileComponent,
    UpdateGoalsComponent,
    TrackingEllipticalComponent,
    TrackingEllipticalAddComponent,
    TrackingEllipticalDeleteComponent,
    StatsEllipticalComponent,
    StatsEllipticalMinsComponent,
    StatsEllipticalStridesComponent,
    GoalsEllipticalComponent,
    WeeklyChallengeEllipticalComponent,
    WeeklyChallengeRunningComponent,
    SearchComponent,
    SearchFirstComponent,
    SearchLastComponent,
    SearchFullComponent,
    SearchEmailComponent,
    FooterComponent,
    ScheduleComponent,
    SuggestedComponent,
    SetScheduleComponent,
    StatsMainComponent,
    SetScheduleCreateComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressBarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatListModule,
    MatRadioModule,
    MatSliderModule,
    MatCardModule
  ],
  providers: [
    AuthGuard,
    TrackingBikeDeleteComponent,
    TrackingRowerDeleteComponent,
    TrackingRunningDeleteComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
