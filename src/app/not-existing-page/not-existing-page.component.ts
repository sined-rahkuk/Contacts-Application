import { Component, OnInit } from '@angular/core';
import { ContactDBService } from '../contact-db.service';

@Component({
  selector: 'app-not-existing-page',
  templateUrl: './not-existing-page.component.html',
  styleUrls: ['./not-existing-page.component.css']
})
export class NotExistingPageComponent implements OnInit {
  time: string;
  constructor(private timeSvc: ContactDBService) { }

  ngOnInit() {
    this.time = this.timeSvc.getTime();
  }

}
