import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BashComponent } from './bash.component';

describe('BashComponent', () => {
  let component: BashComponent;
  let fixture: ComponentFixture<BashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
