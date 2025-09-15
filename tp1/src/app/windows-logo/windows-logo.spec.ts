import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsLogo } from './windows-logo';

describe('WindowsLogo', () => {
  let component: WindowsLogo;
  let fixture: ComponentFixture<WindowsLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowsLogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowsLogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
