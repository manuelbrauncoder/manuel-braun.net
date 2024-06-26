import { Component, inject } from '@angular/core';
import { SkillsService } from '../shared/services/skills.service';
import { CommonModule } from '@angular/common';
import { TsNgxService } from '../shared/services/ts-ngx.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  currentLanguage: string;

  constructor(public translationService: TsNgxService) {
    this.currentLanguage = this.translationService.currentLang;
    this.translationService.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
  }

  skills = inject(SkillsService);
}
