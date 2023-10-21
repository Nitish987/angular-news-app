import { Injectable } from '@angular/core';
import Env from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  constructor(private http: HttpClient) { }

  getNews(country: string, category: string): Observable<any> {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=50&apiKey=${Env.API_KEY}`);
  }

  searchNews(query: string): Observable<any> {
    return this.http.get(`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&pageSize=50&apiKey=${Env.API_KEY}`);
  }
}
