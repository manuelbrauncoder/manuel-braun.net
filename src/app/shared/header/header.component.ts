import { Component } from '@angular/core';
import { ScrollToAnchorService } from '../services/scroll-to-anchor.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private ScrollToAnchorService: ScrollToAnchorService) {}

  scrollToElement(element: string) {
    this.ScrollToAnchorService.scrollToAnchor(element, -100);
  }
}
