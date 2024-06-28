import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NolandscapemodeComponent } from './nolandscapemode.component';

describe('NolandscapemodeComponent', () => {
  let component: NolandscapemodeComponent;
  let fixture: ComponentFixture<NolandscapemodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NolandscapemodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NolandscapemodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
