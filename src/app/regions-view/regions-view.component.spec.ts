import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsViewComponent } from './regions-view.component';

describe('RegionsViewComponent', () => {
  let component: RegionsViewComponent;
  let fixture: ComponentFixture<RegionsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
