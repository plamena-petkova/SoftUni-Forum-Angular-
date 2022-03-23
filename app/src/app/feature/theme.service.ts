import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ITheme } from '../core/interface';
import { IPost } from '../core/interface';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';

const apiUrl = environment.apiUrl;

@Injectable()

export class ThemeService {

  constructor(private http: HttpClient) { }

  loadThemeList(): Observable<ITheme[]> {
    return this.http.get<ITheme[]>(`${apiUrl}/themes`);
  }

  loadThemeById(id: string): Observable<ITheme<IPost>> {
    return this.http.get<ITheme<IPost>>(`${apiUrl}/themes/${id}`);
  }

}
