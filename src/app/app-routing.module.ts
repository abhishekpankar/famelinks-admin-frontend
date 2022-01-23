import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authGuard/auth.guard';
import { LayoutComponent } from './shared/layout/layout.component';
import { LoginComponent } from './user-access/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./view/dashboard/dashboard.module').then(mod => mod.DashboardModule),
        data: { title: 'dashboard' },
        // 'canActivate': [AuthGuard],
      },{
        path: 'challenges',
        loadChildren: () => import('./view/challenges/challenges.module').then(mod => mod.ChallengesModule),
        data: { title: 'challenges' },
        // 'canActivate': [AuthGuard]
      },{
        path: 'users',
        loadChildren: () => import('./view/users/users.module').then(mod => mod.UsersModule),
        data: { title: 'users' },
        // 'canActivate': [AuthGuard]
      },
      {
        path: 'reported-data',
        loadChildren: () => import('./view/reported-data/reported-data.module').then(mod => mod.ReportedDataModule),
        data: { title: 'reported-data' },
        // 'canActivate': [AuthGuard]
      },
      {
        path: 'notifications',
        loadChildren: () => import('./view/notification/notification.module').then(mod => mod.NotificationModule),
        data: { title: 'notifications' },
        // 'canActivate': [AuthGuard]
      },
      ]
    },

  { path: '**',   redirectTo: '/login', pathMatch: 'full' },
 ];
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
