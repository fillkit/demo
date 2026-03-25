import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DemoBannerComponent } from '../components/demo-banner.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, DemoBannerComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    contactMethod: 'email',
  };

  onSubmit(): void {
    console.log('Contact form submitted:', this.formData);
    alert('Message sent! Check console for data.');
  }
}
