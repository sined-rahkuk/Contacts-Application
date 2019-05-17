import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact-model/contact-interface';

@Injectable({
  providedIn: 'root'
})
export class ContactDBService {
  serverUrl: string;
  constructor(private http: HttpClient) {
    this.serverUrl = 'http://localhost:8080';
  }
  // test
  getTime(): string {
    return new Date().toLocaleTimeString();
  }

  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.serverUrl}/contacts`);
  }
  getContactById(id: string): Observable<Contact> {
    return this.http.get<Contact>(`${this.serverUrl}/contacts/${id}`);
  }
  deleteContactById(id: string) {
    return this.http.delete(`${this.serverUrl}/contacts/${id}`);
  }
  updateContact(contact: Contact) {
    return this.http.put(`${this.serverUrl}/contacts/${contact.id}`, contact);
  }
  saveContact(contact: Contact) {
    console.log(contact);
    return this.http.post(`${this.serverUrl}/contacts`, contact).subscribe();
  }
}
// "header": 'Access-Control-Allow-Origin'
