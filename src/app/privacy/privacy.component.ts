import { Component } from '@angular/core';
import { ScrollToAnchorService } from '../shared/services/scroll-to-anchor.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {

  constructor(public scrollToAnchorService: ScrollToAnchorService){}
}
