import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/projects' },
  { path: 'projects', component: ProjectsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
