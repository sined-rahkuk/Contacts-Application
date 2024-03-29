import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContactRefComponent } from './contact-ref/contact-ref.component';
import { AboutComponent } from './about/about.component';
import { ContactsViewComponent } from './contacts-view/contacts-view.component';
import { NotExistingPageComponent } from './not-existing-page/not-existing-page.component';
import { ContactDBService } from './contact-db.service';
import { ContactComponent } from './contact/contact.component';
import { NewContactPageComponent } from './new-contact-page/new-contact-page.component';
import { ContactDetailPageComponent } from './contact-detail-page/contact-detail-page.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatFormFieldModule
} from '@angular/material';
import { ContactsTableComponent } from './contacts-table/contacts-table.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactRefComponent,
    AboutComponent,
    ContactsViewComponent,
    NotExistingPageComponent,
    ContactComponent,
    NewContactPageComponent,
    ContactDetailPageComponent,
    ContactsTableComponent

    // AboutComponent,
    // ContactComponent,
    // HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule
  ],
  exports: [],
  providers: [ContactDBService],
  bootstrap: [AppComponent]
})
export class AppModule {}
