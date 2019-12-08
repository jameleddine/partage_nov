import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjoutComponent } from './ajout/ajout.component';
import { EditComponent } from './edit/edit.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {path:'',component:LayoutComponent,children:[
    {path:'',component:DashboardComponent},
    {path:'ajout',component:AjoutComponent},
    {path:'edit/:id',component:EditComponent},
    {path:'exercice',component:ContainerComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
