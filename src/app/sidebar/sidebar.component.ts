import { Component, Output, EventEmitter } from '@angular/core';
import { ScrollToAnchorService } from '../shared/services/scroll-to-anchor.service';
import { TsNgxService } from '../shared/services/ts-ngx.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  currentLanguage: string;

  @Output() showSidebar = new EventEmitter<boolean>();

  constructor(
    private ScrollToAnchorService: ScrollToAnchorService,
    public translationService: TsNgxService,
    private router: Router
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
      this.showSidebar.emit(false);
    }, 50);

  }

  /**
   * change language
   * @param lang string for language
   */
  changeLanguage(lang: string) {
    this.translationService.changeLanguage(lang);
    this.showSidebar.emit(false);
  }
}
