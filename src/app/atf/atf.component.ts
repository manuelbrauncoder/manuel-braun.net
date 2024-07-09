import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TsNgxService } from '../shared/services/ts-ngx.service';
import { ScrollToAnchorService } from '../shared/services/scroll-to-anchor.service';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss',
})
export class AtfComponent {
  currentLanguage: string;

  constructor(
    public translationService: TsNgxService,
    private scrollToAnchorService: ScrollToAnchorService,
    private renderer: Renderer2
  ) {
    this.currentLanguage = this.translationService.currentLang;
    this.translationService.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
  }

  /**
   * scroll to element with offset
   * @param element 
   */
  scrollToElement(element: string) {
    this.scrollToAnchorService.scrollToAnchor(element, -100);
  }
}


