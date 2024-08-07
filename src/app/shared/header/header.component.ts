import { Component } from '@angular/core';
import { ScrollToAnchorService } from '../services/scroll-to-anchor.service';
import { TsNgxService } from './../services/ts-ngx.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IntersectionObserverService } from '../services/intersection-observer.service';

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
    public translationService: TsNgxService,
    private router: Router,
    public intersectionObserverService: IntersectionObserverService
  ) {
    this.currentLanguage = this.translationService.currentLang;
    this.translationService.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
  }

  /**
   * open route ''
   * then scroll to element with id
   * @param element to scroll to
   */
  scrollToElement(element: string) {
    this.router.navigate(['']);
    setTimeout(() => {
      this.ScrollToAnchorService.scrollToAnchor(element, -100);
    }, 50);
  }
}
