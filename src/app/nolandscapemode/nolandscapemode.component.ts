import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TsNgxService } from '../shared/services/ts-ngx.service';

@Component({
  selector: 'app-nolandscapemode',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './nolandscapemode.component.html',
  styleUrl: './nolandscapemode.component.scss',
})
export class NolandscapemodeComponent {
  currentLanguage: string;

  constructor(public translationService: TsNgxService) {
    this.currentLanguage = this.translationService.currentLang;
    this.translationService.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
  }
}
