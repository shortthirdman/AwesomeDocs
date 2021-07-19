import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMinderComponent } from './siteminder.component';

describe('SiteMinderComponent', () => {
  let component: SiteMinderComponent;
  let fixture: ComponentFixture<SiteMinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteMinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteMinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
