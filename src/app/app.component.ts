import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'telco-test';
  isSidebarActive = true;

  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive;
  }
}
