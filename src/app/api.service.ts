import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  // private apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=3';

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
