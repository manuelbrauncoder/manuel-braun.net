import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToAnchorService } from './../services/scroll-to-anchor.service';
import { TsNgxService } from './../services/ts-ngx.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss',
})
export class HeaderMobileComponent {
  showSidebar: boolean = false;
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
    this.toggleSidebar();
  }

  changeLanguage(lang: string) {
    this.translationService.changeLanguage(lang);
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
