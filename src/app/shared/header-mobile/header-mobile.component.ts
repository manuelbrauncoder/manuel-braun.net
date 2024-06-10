import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToAnchorService } from './../services/scroll-to-anchor.service';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss',
})
export class HeaderMobileComponent {
  showSidebar: boolean = false;

  constructor(private ScrollToAnchorService: ScrollToAnchorService) {}

  scrollToElement(element: string) {
    this.ScrollToAnchorService.scrollToAnchor(element, -100);
    this.toggleSidebar();
  }

  toggleSidebar() {
    if (this.showSidebar) {
      this.showSidebar = false;
    } else {
      this.showSidebar = true;
    }
  }
}
