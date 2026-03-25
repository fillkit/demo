import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar.component';
import { TopNavComponent } from './components/top-nav.component';
import { FillKitService } from './services/fillkit.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SidebarComponent, TopNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  sidebarCollapsed = false;

  constructor(private fillKitService: FillKitService) {
    const saved = localStorage.getItem('fillkit-sidebar-collapsed');
    if (saved) {
      this.sidebarCollapsed = JSON.parse(saved) as boolean;
    }
  }

  ngOnInit(): void {
    this.fillKitService
      .init({
        mode: 'valid',
        watchMode: true,
        refill: true,
        provider: 'local',
        locale: 'en',
        ui: {
          enabled: true,
          position: 'bottom.center',
        },
      })
      .catch(() => {});
  }

  onToggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    localStorage.setItem(
      'fillkit-sidebar-collapsed',
      JSON.stringify(this.sidebarCollapsed)
    );
  }
}
