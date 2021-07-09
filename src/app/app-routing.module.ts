import {CompanyComponent} from './components/company/company.component';
import {ProcessComponent} from './components/process/process.component';
import {ApplicationComponent} from './components/application/application.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddApplicationComponent } from './components/application/add-application/add-application/add-application.component';
import { EditApplicationComponent } from './components/application/edit-application/edit-application/edit-application.component';

const routes: Routes = [
  { path: '', component: CompanyComponent, data: { title: 'Companies' } },
  { path: 'company', component: CompanyComponent, data: { title: 'Companies' } },
  { path: 'process', component: ProcessComponent, data: { title: 'Process' } },
  { path: 'application', component: ApplicationComponent, data: { title: 'Applications' } },
  { path: 'application/add-application', component: AddApplicationComponent, data: {title: 'Create application'}},
  { path: 'application/edit-application/:id', component: EditApplicationComponent, data: {title: 'Edit application'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
