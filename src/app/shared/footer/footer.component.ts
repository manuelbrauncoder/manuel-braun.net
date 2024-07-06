import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TsNgxService } from '../services/ts-ngx.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ScrollToAnchorService } from '../services/scroll-to-anchor.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentLanguage: string;

  constructor(public translationService: TsNgxService, public scrollToAnchorService: ScrollToAnchorService) {
    this.currentLanguage = this.translationService.currentLang;
    this.translationService.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
  }
}
