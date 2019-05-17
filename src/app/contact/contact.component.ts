import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact-model/contact-interface';
import { ContactDBService } from '../contact-db.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('contactData')
  contactData: Contact;

  alone: boolean;

  constructor(
    private dbSvc: ContactDBService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // console.log(route.snapshot.params.id);
    this.alone = route.snapshot.params.id ? true : false;


  }

  ngOnInit() {}

  delete(): void {
    this.dbSvc.deleteContactById(this.contactData.id).subscribe(
      () => {
        if (this.alone) {
          this.router.navigateByUrl('contacts');
        }
      },
      err => {
        console.error(err);
      }
    );
  }
  update(): void {
    this.router.navigateByUrl('contacts/' + this.contactData.id + '/edit');
  }
}
