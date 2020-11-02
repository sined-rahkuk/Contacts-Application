import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact-model/contact-interface';
import { ContactDBService } from '../contact-db.service';
import { ActivatedRoute, Router } from '@angular/router';

import * as hash from 'object-hash';
@Component({
  selector: 'app-new-contact-page',
  templateUrl: './new-contact-page.component.html',
  styleUrls: ['./new-contact-page.component.css']
})
/*
  This component at this moment of development is being used both by
  new-contact operation and update-contact operation.

  Should I change the way it works?
*/
export class NewContactPageComponent implements OnInit {
  // name = 'HELL';
  contact: Contact;
  // valid = false;
  initialChecksum: string;
  curChecksum: string;

  constructor(
    private dbSvc: ContactDBService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    /* FIXME:
    TEMP SOLUTION;
    we gotta fetch contact's data from the variable outside,
    rather than calling on back-end every time */

    // console.log(this.route.snapshot);
    if (this.route.snapshot.params.id) {
      // console.log('imhere! ive found param id');
      this.dbSvc
        .getContactById(this.route.snapshot.params.id)
        .toPromise()
        .then(contact => {
          // console.log('contact fetched from db');
          this.contact = contact;
          this.initialChecksum = hash(this.contact);
          console.log(this.initialChecksum);
        })
        .catch(err => console.error(err));
    } else {
      this.contact = new Contact();
      this.initialChecksum = hash(this.contact);
    }
  }
  submitButton() {
    // console.log('ready to submit the contact:');
    // console.log('contact is as follows: ');
    // console.log(this.contact);

    console.log('succeed!');

    // Am I creating the brand new contact
    // or just updating existing one?
    if (this.route.snapshot.params.id) {
      this.dbSvc
        .updateContact(this.contact)
        .toPromise()
        .then(() => this.router.navigateByUrl('/'));
    } else {
      this.dbSvc.saveContact(this.contact);
      this.router.navigateByUrl('/');
    }
  }

  onKey($event) {
    this.curChecksum = hash(this.contact);
    console.log(
      `initial: ${this.initialChecksum}\ncurrent: ${this.curChecksum}`
    );

    if (
      this.contact.fname.length &&
      this.contact.lname.length &&
      this.contact.tel.length
    ) {
      if (this.curChecksum !== this.initialChecksum) {
        // this.valid = true;
        document.getElementById('submitContact').classList.remove('hidden');
      } else {
        document.getElementById('submitContact').classList.add('hidden');
      }
    } else {
      document.getElementById('submitContact').classList.add('hidden');
    }

    // this.valid = false;
  }
}
