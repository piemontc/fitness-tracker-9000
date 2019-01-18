import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrackingComponent } from './tracking/tracking.component';
import { TrackingBikeComponent } from './tracking/tracking-bike/tracking-bike.component';
import { TrackingRowerComponent } from './tracking/tracking-rower/tracking-rower.component';
import { TrackingBikeAddComponent } from './tracking/tracking-bike-add/tracking-bike-add.component';
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
import { WeeklyChallengeComponent } from './weekly-challenge/weekly-challenge.component';
import { WeeklyChallengeBikeComponent } from './weekly-challenge/weekly-challenge-bike/weekly-challenge-bike.component';
import { WeeklyChallengeRowerComponent } from './weekly-challenge/weekly-challenge-rower/weekly-challenge-rower.component';
import { AuthGuard } from './core/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { UpdateGoalsComponent } from './update-goals/update-goals.component';
import { TrackingEllipticalComponent } from './tracking/tracking-elliptical/tracking-elliptical.component';
import { TrackingEllipticalAddComponent } from './tracking/tracking-elliptical-add/tracking-elliptical-add.component';
import { TrackingEllipticalDeleteComponent } from './tracking/tracking-elliptical-delete/tracking-elliptical-delete.component';
import { StatsEllipticalComponent } from './stats/stats-elliptical/stats-elliptical.component';
import { StatsEllipticalStridesComponent } from './stats/stats-elliptical-strides/stats-elliptical-strides.component';
import { StatsEllipticalMinsComponent } from './stats/stats-elliptical-mins/stats-elliptical-mins.component';
import { GoalsEllipticalComponent } from './goals/goals-elliptical/goals-elliptical.component';
import { WeeklyChallengeEllipticalComponent } from './weekly-challenge/weekly-challenge-elliptical/weekly-challenge-elliptical.component';
import { WeeklyChallengeRunningComponent } from './weekly-challenge/weekly-challenge-running/weekly-challenge-running.component';
import { SearchComponent } from './search/search.component';
import { SearchLastComponent } from './search/search-last/search-last.component';
import { SearchFullComponent } from './search/search-full/search-full.component';
import { SearchEmailComponent } from './search/search-email/search-email.component';
import { SearchFirstComponent } from './search/search-first/search-first.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SetScheduleComponent } from './schedule/set-schedule/set-schedule.component';
import { SuggestedComponent } from './schedule/suggested/suggested.component';
import { StatsMainComponent } from './stats/stats-main/stats-main.component';
import { SetScheduleCreateComponent } from './schedule/set-schedule-create/set-schedule-create.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tracking', component: TrackingComponent, canActivate: [AuthGuard] },
  {path: 'tracking/bike', component: TrackingBikeComponent, canActivate: [AuthGuard] },
  {path: 'tracking/bike/add', component: TrackingBikeAddComponent, canActivate: [AuthGuard] },
  {path: 'tracking/bike/delete/:id', component: TrackingBikeDeleteComponent, canActivate: [AuthGuard] },
  {path: 'tracking/rower', component: TrackingRowerComponent, canActivate: [AuthGuard] },
  {path: 'tracking/rower/add', component: TrackingRowerAddComponent, canActivate: [AuthGuard] },
  {path: 'tracking/rower/delete/:id', component: TrackingRowerDeleteComponent, canActivate: [AuthGuard] },
  {path: 'tracking/running', component: TrackingRunningComponent, canActivate: [AuthGuard] },
  {path: 'tracking/running/add', component: TrackingRunningAddComponent, canActivate: [AuthGuard] },
  {path: 'tracking/running/delete/:id', component: TrackingRunningDeleteComponent, canActivate: [AuthGuard] },
  {path: 'tracking/elliptical', component: TrackingEllipticalComponent, canActivate: [AuthGuard] },
  {path: 'tracking/elliptical/add', component: TrackingEllipticalAddComponent, canActivate: [AuthGuard] },
  {path: 'tracking/elliptical/delete/:id', component: TrackingEllipticalDeleteComponent, canActivate: [AuthGuard] },
  {path: 'stats', component: StatsMainComponent, canActivate: [AuthGuard] },
  {path: 'stats/totals', component: StatsComponent, canActivate: [AuthGuard] },
  {path: 'stats/totals/bike', component: StatsBikeComponent, canActivate: [AuthGuard] },
  {path: 'stats/totals/bike/miles', component: StatsBikeMilesComponent, canActivate: [AuthGuard] },
  {path: 'stats/totals/bike/minutes', component: StatsBikeMinsComponent, canActivate: [AuthGuard] },
  {path: 'stats/totals/elliptical', component: StatsEllipticalComponent, canActivate: [AuthGuard] },
  {path: 'stats/totals/elliptical/strides', component: StatsEllipticalStridesComponent, canActivate: [AuthGuard] },
  {path: 'stats/totals/elliptical/minutes', component: StatsEllipticalMinsComponent, canActivate: [AuthGuard] },
  {path: 'stats/totals/rower', component: StatsRowerComponent, canActivate: [AuthGuard] },
  {path: 'stats/totals/rower/miles', component: StatsRowerMilesComponent, canActivate: [AuthGuard] },
  {path: 'stats/totals/rower/minutes', component: StatsRowerMinsComponent, canActivate: [AuthGuard] },
  {path: 'stats/totals/running', component: StatsRunningComponent, canActivate: [AuthGuard] },
  {path: 'stats/totals/running/miles', component: StatsRunningMilesComponent, canActivate: [AuthGuard] },
  {path: 'stats/totals/running/minutes', component: StatsRunningMinsComponent, canActivate: [AuthGuard] },
  {path: 'stats/goals', component: GoalsComponent, canActivate: [AuthGuard] },
  {path: 'stats/goals/bike', component: GoalsBikeComponent, canActivate: [AuthGuard] },
  {path: 'stats/goals/elliptical', component: GoalsEllipticalComponent, canActivate: [AuthGuard] },
  {path: 'stats/goals/rower', component: GoalsRowerComponent, canActivate: [AuthGuard] },
  {path: 'stats/goals/running', component: GoalsRunningComponent, canActivate: [AuthGuard] },
  {path: 'weekly-challenge', component: WeeklyChallengeComponent, canActivate: [AuthGuard] },
  {path: 'weekly-challenge/bike', component: WeeklyChallengeBikeComponent, canActivate: [AuthGuard] },
  {path: 'weekly-challenge/rower', component: WeeklyChallengeRowerComponent, canActivate: [AuthGuard] },
  {path: 'weekly-challenge/running', component: WeeklyChallengeRunningComponent, canActivate: [AuthGuard] },
  {path: 'weekly-challenge/elliptical', component: WeeklyChallengeEllipticalComponent, canActivate: [AuthGuard] },
  {path: 'profile/:uid', component: ProfileComponent, canActivate: [AuthGuard] },
  {path: 'update-goals', component: UpdateGoalsComponent, canActivate: [AuthGuard] },
  {path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  {path: 'search/last', component: SearchLastComponent, canActivate: [AuthGuard] },
  {path: 'search/full', component: SearchFullComponent, canActivate: [AuthGuard] },
  {path: 'search/email', component: SearchEmailComponent, canActivate: [AuthGuard] },
  {path: 'search/first', component: SearchFirstComponent, canActivate: [AuthGuard] },
  {path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuard] },
  {path: 'schedule/set', component: SetScheduleComponent, canActivate: [AuthGuard] },
  {path: 'schedule/set/create', component: SetScheduleCreateComponent, canActivate: [AuthGuard] },
  {path: 'schedule/suggested', component: SuggestedComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
