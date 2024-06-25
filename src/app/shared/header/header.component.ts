import { Component } from '@angular/core';
import { ScrollToAnchorService } from '../services/scroll-to-anchor.service';
import { TsNgxService } from './../services/ts-ngx.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentLanguage: string;

  constructor(
    private ScrollToAnchorService: ScrollToAnchorService,
    public translationService: TsNgxService
  ) {
    this.currentLanguage = this.translationService.currentLang;
    this.translationService.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
  }

  scrollToElement(element: string) {
    this.ScrollToAnchorService.scrollToAnchor(element, -100);
  }
}
