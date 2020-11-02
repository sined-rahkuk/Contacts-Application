import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactRefComponent } from './contact-ref/contact-ref.component';
import { ContactsViewComponent } from './contacts-view/contacts-view.component';
import { NotExistingPageComponent } from './not-existing-page/not-existing-page.component';
import { NewContactPageComponent } from './new-contact-page/new-contact-page.component';
import { ContactDetailPageComponent } from './contact-detail-page/contact-detail-page.component';
import { ContactsTableComponent } from './contacts-table/contacts-table.component';



const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactsTableComponent },
  { path: 'contacts/:id', component: ContactDetailPageComponent },
  { path: 'contacts/:id/edit', component: NewContactPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact-page', component: ContactRefComponent },
  { path: 'new-contact', component: NewContactPageComponent },
  { path: '**', component: NotExistingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
