import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from 'src/app/shared/data-types/Event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  public addEvent(e: Event): Observable<Event> {
    const url = 'http://localhost:8131/addEvent';
    return this.http.post<Event>(url, e);
  }

  public removeEvent(e: Event): Observable<Event[]> {
    const url ='http://localhost:8131/deleteEvent/';
    return this.http.post<any>(url, e);
  }

  public getEvent(id): Observable<Event> {
    const url ='http://localhost:8131/event';
    return this.http.post<Event>(url, id);
  }

  public getEvents(): Observable<Event[]> {
    const url ='http://localhost:8131/allEvents';
    return this.http.get<Event[]>(url);
  }

  public getEventsByUserId(id: string): Observable<Event[]> {
    const url =`http://localhost:8131/userEvents/${id}`;
    return this.http.get<Event[]>(url);
  }

}
