import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InquiryFormPageRoutingModule } from './inquiry-form-routing.module';

import { InquiryFormPage } from './inquiry-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InquiryFormPageRoutingModule
  ],
  declarations: [InquiryFormPage]
})
export class InquiryFormPageModule {}
