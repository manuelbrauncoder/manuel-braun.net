import { Component } from '@angular/core';
import { ScrollToAnchorService } from '../shared/services/scroll-to-anchor.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  constructor(public scrollToAnchorService: ScrollToAnchorService){}
}
