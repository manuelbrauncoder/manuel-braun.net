import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { NolandscapemodeComponent } from "./nolandscapemode/nolandscapemode.component";
import { FooterComponent } from './shared/footer/footer.component';
import {
  Breakpoints,
  BreakpointObserver,
  BreakpointState,
} from '@angular/cdk/layout';
import { FooterMobileComponent } from './shared/footer-mobile/footer-mobile.component';
import { HeaderMobileComponent } from './shared/header-mobile/header-mobile.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FooterMobileComponent, HeaderMobileComponent, NolandscapemodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  breakpointsToObserve = [Breakpoints.TabletPortrait, Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape]

  isMobilePortrait: boolean = false;
  isHandsetLandscape: boolean = false;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit() {
    this.initObserver();
    this.initAos();
  }

  initObserver(){
    this.responsive.observe(this.breakpointsToObserve).subscribe((result) => {
      if (result.breakpoints[Breakpoints.TabletPortrait] || result.breakpoints[Breakpoints.HandsetPortrait]) {
        this.isMobilePortrait = true;        
      } else if (!result.breakpoints[Breakpoints.TabletPortrait] || !result.breakpoints[Breakpoints.HandsetPortrait]) {
        this.isMobilePortrait = false;
      }
      if (result.breakpoints[Breakpoints.HandsetLandscape]) {
        this.isHandsetLandscape = true;
      } else if(!result.breakpoints[Breakpoints.HandsetLandscape]) {
        this.isHandsetLandscape = false;        
      }
    });
  }

  initAos(){
    AOS.init({
      duration: 500,
      delay: 400,
      easing: 'ease-out',
      once: true
    });
  }
}
