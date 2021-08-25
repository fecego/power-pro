import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondClickComponent } from './second-click.component';

describe('SecondClickComponent', () => {
  let component: SecondClickComponent;
  let fixture: ComponentFixture<SecondClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
