import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { HomeObservable } from './home.observable';
import { MaterialAngularModule } from 'src/app/shared/utils/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    MaterialAngularModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [HomeComponent],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [HomeObservable],
})
export class HomeModule {}
