import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AtfComponent } from '../atf/atf.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { IntersectionObserverService } from '../shared/services/intersection-observer.service';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    AtfComponent,
    AboutMeComponent,
    SkillsComponent,
    ContactComponent,
    PortfolioComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent implements OnInit, OnDestroy {
  @ViewChild('aboutMe', { static: true }) aboutMeSection!: ElementRef;
  @ViewChild('skills', { static: true }) skillsSection!: ElementRef;
  @ViewChild('portfolio', { static: true }) portfolioSection!: ElementRef;
  @ViewChild('atf', { static: true}) atfSection!: ElementRef;

  private aboutMeObserver!: IntersectionObserver;
  private skillsObserver!: IntersectionObserver;
  private portfolioObserver!: IntersectionObserver;
  private atfObserver!: IntersectionObserver;

  atfOptions = {
    root: null,
    threshold: 0.3
  }

  aboutMeOptions = {
    root: null,
    threshold: 0.9,
  }

  skillsOptions = {
    root: null,
    threshold: 0.9,
  }

  portfolioOptions = {
    root: null,
    threshold: 0.4,
  }

  constructor(
    private intersectionObserverService: IntersectionObserverService
  ) {}

  ngOnInit(): void {
    this.observeAboutMe();
    this.observeSkills();
    this.observePortfolio();
    this.observeAtf();
  }

  /**
   * Initializes the IntersectionObserver for the atf section.
   */
  observeAtf() {
    this.atfObserver = this.intersectionObserverService.observe(
      this.atfSection.nativeElement,
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.intersectionObserverService.atfInView = true;            
          } else {
            this.intersectionObserverService.atfInView = false;            
          }
        });
      },this.atfOptions
    );
  }

  /**
   * Initializes the IntersectionObserver for the aboutMe section.
   */
  observeAboutMe() {
    this.aboutMeObserver = this.intersectionObserverService.observe(
      this.aboutMeSection.nativeElement,
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.intersectionObserverService.aboutMeInView = true;
          } else {
            this.intersectionObserverService.aboutMeInView = false;
          }
        });
      },this.aboutMeOptions
    );
  }

  /**
   * Initializes the IntersectionObserver for the skills section.
   */
  observeSkills(){
    this.skillsObserver = this.intersectionObserverService.observe(
      this.skillsSection.nativeElement,
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.intersectionObserverService.skillsInView = true;
          } else {
            this.intersectionObserverService.skillsInView = false;
          }
        });
      }, this.skillsOptions
    );
  }

  /**
   * Initializes the IntersectionObserver for the portfolio section.
   */
  observePortfolio(){
    this.portfolioObserver = this.intersectionObserverService.observe(
      this.portfolioSection.nativeElement,
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.intersectionObserverService.portfolioInView = true;
          } else {
            this.intersectionObserverService.portfolioInView = false;
          }
        });
      }, this.portfolioOptions
    );
  }

  ngOnDestroy(): void {
    this.intersectionObserverService.disconnect(this.aboutMeObserver);
    this.intersectionObserverService.disconnect(this.skillsObserver);
    this.intersectionObserverService.disconnect(this.portfolioObserver);
    this.intersectionObserverService.disconnect(this.atfObserver);
  }
}
