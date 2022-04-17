import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiePrincipalComponent } from './pie-principal.component';

describe('PiePrincipalComponent', () => {
  let component: PiePrincipalComponent;
  let fixture: ComponentFixture<PiePrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiePrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
