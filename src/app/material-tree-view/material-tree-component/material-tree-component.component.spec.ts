import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTreeComponentComponent } from './material-tree-component.component';

describe('MaterialTreeComponentComponent', () => {
  let component: MaterialTreeComponentComponent;
  let fixture: ComponentFixture<MaterialTreeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialTreeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTreeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
