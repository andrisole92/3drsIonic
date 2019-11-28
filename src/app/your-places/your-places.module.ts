import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourPlacesPageRoutingModule } from './your-places-routing.module';

import { YourPlacesPage } from './your-places.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourPlacesPageRoutingModule
  ],
  declarations: [YourPlacesPage]
})
export class YourPlacesPageModule {}
