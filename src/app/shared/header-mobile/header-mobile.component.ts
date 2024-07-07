import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TsNgxService } from './../services/ts-ngx.service';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [CommonModule, TranslateModule, SidebarComponent],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss',
})
export class HeaderMobileComponent {
  showSidebar: boolean = false;
  currentLanguage: string;

  constructor(public translationService: TsNgxService) {
    this.currentLanguage = this.translationService.currentLang;
    this.translationService.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
  }

  /**
   * change sidebar visibility boolean
   * @param state 
   */
  changeSidebarState(state: boolean) {
    this.showSidebar = state;
  }

  /**
   * toggle sidebar
   */
  toggleSidebar() {
    if (this.showSidebar) {
      this.showSidebar = false;
    } else {
      this.showSidebar = true;
    }
  }
}
