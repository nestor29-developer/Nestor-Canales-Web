import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { PostsService } from './posts.service';

@NgModule({
  imports: [CommonModule],
  providers: [PostsService, ApiService],
})
export class Servicemodule {}
