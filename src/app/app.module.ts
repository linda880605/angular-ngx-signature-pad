import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignatureComponent } from './signature/signature.component';
import { NgxSignaturePadModule } from '@eve-sama/ngx-signature-pad';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    SignatureComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSignaturePadModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
