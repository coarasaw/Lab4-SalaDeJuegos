import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRecuperarClaveComponent } from './login-recuperar-clave.component';

describe('LoginRecuperarClaveComponent', () => {
  let component: LoginRecuperarClaveComponent;
  let fixture: ComponentFixture<LoginRecuperarClaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRecuperarClaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRecuperarClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
