import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignatureComponent } from './signature/signature.component';
import { ImageComponent } from './image/image.component';

const routes: Routes = [
  { path: 'signature', component: SignatureComponent },
  { path: 'image', component: ImageComponent },
  { path: '', redirectTo: '/signature', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
