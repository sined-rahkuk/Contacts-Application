import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact-model/contact-interface';
import { ContactDBService } from '../contact-db.service';
import { ActivatedRoute, Router } from '@angular/router';

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
          console.log('contact fetched from db:');
          this.contact = contact;
        })
        .catch(err => console.error(err));
    } else {
      this.contact = new Contact();
    }
  }
  submitButton() {
    // console.log('ready to submit the contact:');
    // console.log('contact is as follows: ');
    // console.log(this.contact);

    if (this.contact.fname && this.contact.lname && this.contact.tel) {
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
  }
}
