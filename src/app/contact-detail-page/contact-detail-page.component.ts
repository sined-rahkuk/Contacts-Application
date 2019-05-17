import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ContactDBService } from '../contact-db.service';
import { Contact } from '../contact-model/contact-interface';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.css']
})
export class ContactDetailPageComponent implements OnInit {
  contactId: string;
  contactData: Contact;
  constructor(private route: ActivatedRoute, private dbSvc: ContactDBService) {}

  ngOnInit() {
    this.contactId = this.route.snapshot.params.id;
    this.dbSvc
      .getContactById(this.contactId)
      .toPromise()
      .then(contact => {
        this.contactData = contact;
      })
      .catch(err => {
        console.error(`CODE: ${err.status}`);
      });
  }
}
