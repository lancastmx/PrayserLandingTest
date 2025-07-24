import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContructorLandingPagesComponent } from './contructor-landing-pages.component';

describe('ContructorLandingPagesComponent', () => {
  let component: ContructorLandingPagesComponent;
  let fixture: ComponentFixture<ContructorLandingPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContructorLandingPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContructorLandingPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
