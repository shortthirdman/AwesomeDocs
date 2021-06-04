import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSphereComponent } from './websphere.component';

describe('WebSphereComponent', () => {
  let component: WebSphereComponent;
  let fixture: ComponentFixture<WebSphereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebSphereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSphereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
