import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'telco-test';
  isSidebarActive = true;
  imageSrc = 'https://example.com/nonexistent-image.jpg';  // Una imagen que puede no existir
  fallbackImageSrc = 'assets/default-image.jpg';

  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive;
  }
}
