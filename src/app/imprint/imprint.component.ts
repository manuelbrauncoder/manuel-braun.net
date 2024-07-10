import { Component } from '@angular/core';
import { ScrollToAnchorService } from '../shared/services/scroll-to-anchor.service';
import { TsNgxService } from '../shared/services/ts-ngx.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  currentLanguage: string;

  constructor( public translationService: TsNgxService, public scrollToAnchorService: ScrollToAnchorService){
    this.currentLanguage = this.translationService.currentLang;
    this.translationService.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
  }
}
