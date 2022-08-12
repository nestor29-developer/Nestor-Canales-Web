import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { MaterialAngularModule } from 'src/app/shared/utils/material.module';

@NgModule({
  imports: [
    CommonModule,
    DetailRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialAngularModule
  ],
  declarations: [DetailComponent],
  exports: [DetailComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DetailModule {}
