import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasHomeComponent } from './compras-home.component';

describe('ComprasHomeComponent', () => {
  let component: ComprasHomeComponent;
  let fixture: ComponentFixture<ComprasHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
