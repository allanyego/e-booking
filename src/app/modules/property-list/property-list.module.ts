import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { PropertyListComponent } from './property-list.component';
import { SkeletonComponent } from 'src/app/components/skeleton/skeleton.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [PropertyListComponent, SkeletonComponent],
  exports: [PropertyListComponent]
})
export class PropertyListModule {}
