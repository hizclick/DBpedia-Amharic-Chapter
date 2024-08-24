import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteContainerComponent } from './site-container/site-container.component';

const routes: Routes = [
  

  {path: 'documentations',
    loadChildren: () => import('./documentations/documentations.module').then(m => m.DocumentationsModule) 
  },
  {path:'', component:SiteContainerComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
