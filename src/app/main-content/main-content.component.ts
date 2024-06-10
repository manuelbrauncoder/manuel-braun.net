import { Component } from '@angular/core';
import { AtfComponent } from '../atf/atf.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AtfComponent, AboutMeComponent, SkillsComponent, ContactComponent, PortfolioComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

  
}
