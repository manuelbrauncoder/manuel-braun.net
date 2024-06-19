import {
  Component,
  inject
} from '@angular/core';
import { SkillsService } from '../shared/services/skills.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
 

  

  skills = inject(SkillsService);
}