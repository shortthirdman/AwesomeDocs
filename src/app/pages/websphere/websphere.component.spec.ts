import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsphereComponent } from './websphere.component';

describe('WebsphereComponent', () => {
  let component: WebsphereComponent;
  let fixture: ComponentFixture<WebsphereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsphereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsphereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
