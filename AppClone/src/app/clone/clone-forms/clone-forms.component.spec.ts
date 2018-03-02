import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneFormsComponent } from './clone-forms.component';

describe('CloneFormsComponent', () => {
  let component: CloneFormsComponent;
  let fixture: ComponentFixture<CloneFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloneFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
