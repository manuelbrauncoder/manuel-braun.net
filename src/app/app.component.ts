import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {
  Breakpoints,
  BreakpointObserver,
  BreakpointState,
} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  isHandsetPortrait: boolean = false;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit() {
    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe((result) => {
      if (result.matches) {
        console.log('screens matches HandsetLandscape');
        this.isHandsetPortrait = true;
      } else if (!result.matches) {
        this.isHandsetPortrait = false;
      }
    });
  }
}
