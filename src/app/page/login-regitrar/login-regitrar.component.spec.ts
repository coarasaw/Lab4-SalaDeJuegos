import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegitrarComponent } from './login-regitrar.component';

describe('LoginRegitrarComponent', () => {
  let component: LoginRegitrarComponent;
  let fixture: ComponentFixture<LoginRegitrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegitrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegitrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
