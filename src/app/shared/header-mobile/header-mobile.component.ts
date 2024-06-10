import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss',
})
export class HeaderMobileComponent {
  showSidebar: boolean = false;

  toggleSidebar(){
    if (this.showSidebar) {
      this.showSidebar = false;
    } else {
      this.showSidebar = true;
    }
  }
}
