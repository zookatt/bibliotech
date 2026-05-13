import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEdit } from './button-edit';

describe('ButtonEdit', () => {
  let component: ButtonEdit;
  let fixture: ComponentFixture<ButtonEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonEdit],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
