import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddWorkerComponent } from './components/add-worker/add-worker.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { ListServiceComponent } from './components/list-service/list-service.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { ServiceComponent } from './components/service/service.component';
import { RequestComponent } from './components/request/request.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RequestDetailsComponent } from './components/request-details/request-details.component';
import { RequestMComponent } from './components/request-m/request-m.component';
import { RequestAppComponent } from './components/request-app/request-app.component';
import { RequestMDetailComponent } from './components/request-m-detail/request-m-detail.component';
import { OutputGraphComponent } from './charts/output-graph/output-graph.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WidgetPieComponent } from './widgets/widget-pie/widget-pie.component';

const routes: Routes = [

  {path : 'main-nav', component : MainNavComponent , children : [
    { path: '', redirectTo: 'output-graph', pathMatch: 'full' },
    {path : 'home', component:HomeComponent},
    {path : 'addWorker', component:AddWorkerComponent},
    {path : 'addService', component:AddServiceComponent},
    {path : 'listUser', component : ListUserComponent},
    {path : 'listService', component : ListServiceComponent},
    {path : 'invoice', component : InvoiceComponent},
    {path : 'service', component : ServiceComponent},
    {path : 'output-graph', component : OutputGraphComponent},
    {path : 'request-app', component : RequestAppComponent},
    {path : 'request', component : RequestComponent},
    {path : 'request-m', component : RequestMComponent},
    {path : 'request-m-detail', component : RequestMDetailComponent},
    {path : 'request-details', component : RequestDetailsComponent},
    {path : 'profile', component : ProfileComponent},
    {path : 'widget-pie', component : WidgetPieComponent}
  ]},
  
 {path : 'login', component:LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
