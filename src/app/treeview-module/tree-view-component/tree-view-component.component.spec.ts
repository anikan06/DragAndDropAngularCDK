import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeViewComponentComponent } from './tree-view-component.component';

describe('TreeViewComponentComponent', () => {
  let component: TreeViewComponentComponent;
  let fixture: ComponentFixture<TreeViewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeViewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
