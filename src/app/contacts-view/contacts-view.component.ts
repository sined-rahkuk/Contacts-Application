import { Component, OnInit } from '@angular/core';
import { ContactDBService } from '../contact-db.service';
import { Observable } from 'rxjs';
import { Contact } from '../contact-model/contact-interface';

@Component({
  selector: 'app-contacts-view',
  templateUrl: './contacts-view.component.html',
  styleUrls: ['./contacts-view.component.css']
})
export class ContactsViewComponent implements OnInit {
  result: Contact[];
  constructor(private dbSvc: ContactDBService) {}

  ngOnInit() {
    this.dbSvc.getAllContacts().subscribe(contacts => this.result = contacts);
  }
}

