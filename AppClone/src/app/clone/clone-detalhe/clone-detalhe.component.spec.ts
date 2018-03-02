import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneDetalheComponent } from './clone-detalhe.component';

describe('CloneDetalheComponent', () => {
  let component: CloneDetalheComponent;
  let fixture: ComponentFixture<CloneDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloneDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
