import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IPost } from '../core/interface';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';

const apiUrl = environment.apiUrl;


@Injectable()
export class PostService {
 
  constructor(private http: HttpClient) { }

  loadPostList(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${apiUrl}/posts`);
  }


}
