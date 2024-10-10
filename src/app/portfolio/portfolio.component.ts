import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TsNgxService } from '../shared/services/ts-ngx.service';
import { TranslateModule } from '@ngx-translate/core';
import { Project01Component } from "./projects/project-01/project-01.component";
import { Project02Component } from "./projects/project-02/project-02.component";
import { Project03Component } from "./projects/project-03/project-03.component";
import { Project04Component } from "./projects/project-04/project-04.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule, Project01Component, Project02Component, Project03Component, Project04Component],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  currentLanguage: string;

  joinVersion: 'js' | 'angular' = 'angular';

  constructor(public translationService: TsNgxService) {
    this.currentLanguage = this.translationService.currentLang;
    this.translationService.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
  }

  changeVersion(version: 'js' | 'angular'){
    this.joinVersion = version;
  }
}
