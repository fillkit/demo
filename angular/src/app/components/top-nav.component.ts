import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FrameworkLink {
  readonly label: string;
  readonly href: string;
}

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-nav.component.html',
})
export class TopNavComponent {
  readonly activeFramework = 'Angular';
  mobileOpen = false;
  readonly frameworks: readonly FrameworkLink[] = [
    { label: 'React', href: '/react/' },
    { label: 'Vue', href: '/vue/' },
    { label: 'Angular', href: '/angular/' },
    { label: 'HTML', href: '/html/' },
    { label: 'Extension', href: '/anywhere/' },
  ];
}
