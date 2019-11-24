import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'calendar',
    pathMatch: 'full'
  },
  { path: 'calendar', loadChildren: './pages/calendar/calendar.module#CalendarPageModule' },
  { path: 'todo', loadChildren: './pages/todo/todo.module#TodoPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
