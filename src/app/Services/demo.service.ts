import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  DB_URL = 'http://localhost:9002/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private MyClient: HttpClient) {}

  getAllUsers() {
    return this.MyClient.get(this.DB_URL);
  }

  getUserByID(id: any) {
    return this.MyClient.get(this.DB_URL + id);
  }

  addUser(data: {
    id: number;
    userId: number;
    title: string;
    body: string;
  }): Observable<any> {
    return this.MyClient.post<any>(this.DB_URL, data, this.httpOptions);
  }

  deleteUser(id: number) {
    console.log(id);
    return this.MyClient.delete(this.DB_URL + id);
  }

  update(obj: { id: number; title: string; body: string }) {
    return this.MyClient.patch(this.DB_URL + obj.id, obj, this.httpOptions);
  }
}
