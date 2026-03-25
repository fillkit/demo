import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DemoBannerComponent } from '../components/demo-banner.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, DemoBannerComponent],
  templateUrl: './registration.component.html',
})
export class RegistrationComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    country: '',
    city: '',
    zipCode: '',
    agreeTerms: false,
    newsletter: false,
  };

  onSubmit(): void {
    console.log('Form submitted:', this.formData);
    alert('Registration form submitted! Check console for data.');
  }
}
