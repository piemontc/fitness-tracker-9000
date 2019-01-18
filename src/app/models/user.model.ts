import { Activity } from './activity.model';

export class User {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName?: string = "";
  photoURL?: string = "";
  friends?: string[] = [];
  bikeMinGoal?: number = 0;
  bikeMileGoal?: number = 0;
  rowerMinGoal?: number = 0;
  rowerStrokeGoal?: number = 0;
  runningMinGoal?: number = 0;
  runningMileGoal?: number = 0;
  ellipticalMinGoal?: number = 0;
  ellipticalStrideGoal?: number = 0;
  activities?: Activity[] = []
}
