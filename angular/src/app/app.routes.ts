import { Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration.component';
import { ContactComponent } from './pages/contact.component';

export const routes: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'contact', component: ContactComponent },
];
