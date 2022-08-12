import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private apiService: ApiService) {}

  getPost(id: number): any {
    return this.apiService.get('posts/'+id);
  }
}
