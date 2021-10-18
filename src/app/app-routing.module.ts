import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdleLogOutComponent } from './idle-log-out/idle-log-out.component';


const routes: Routes = [
{ path: 'employeeDetails', loadChildren: () => import('./table/table.module').then(m => m.TableModule)},
{ path: '', redirectTo:"employeeDetails", pathMatch:"full" },{path:"IdleLogOut",component:IdleLogOutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
