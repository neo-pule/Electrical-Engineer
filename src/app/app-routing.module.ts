import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddWorkerComponent } from './components/add-worker/add-worker.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { ListServiceComponent } from './components/list-service/list-service.component';
import { ListUserComponent } from './components/list-user/list-user.component';
const routes: Routes = [
  {path : '', component:HomeComponent},
 {path : 'login', component:LoginComponent},
 {path : 'addWorker', component:AddWorkerComponent},
 {path : 'addService', component:AddServiceComponent},
 {path : 'listUser', component : ListUserComponent},
 {path : 'listService', component : ListServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
