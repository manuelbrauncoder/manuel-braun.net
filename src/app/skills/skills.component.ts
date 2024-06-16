import {
  Component,
  inject,
  AfterViewInit,
  ElementRef,
  ViewChild,
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
export class SkillsComponent implements AfterViewInit {
  elementVisible: boolean = false;

  @ViewChild('slideInDiv') slideInElement!: ElementRef;

  skills = inject(SkillsService);

  observerOptions = {
    root: null, // Standard: Ansichtport
    rootMargin: '0px 0px -300px 0px', // 200px Offset vom unteren Rand
    threshold: 0, // 0 bedeutet, dass sobald irgendein Teil des Zielobjekts sichtbar ist, der Callback aufgerufen wird
  };

  constructor() {}

  ngAfterViewInit() {
    this.startObserver();
  }

  startObserver() {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.elementVisible = true;
          console.log('show');
          
        }
      });
    }, this.observerOptions);

    observer.observe(this.slideInElement.nativeElement);
  }
}
