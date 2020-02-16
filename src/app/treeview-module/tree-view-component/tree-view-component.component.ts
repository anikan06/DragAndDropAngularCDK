import { Component, OnInit } from '@angular/core';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-tree-view-component',
  templateUrl: './tree-view-component.component.html',
  styleUrls: ['./tree-view-component.component.scss']
})
export class TreeViewComponentComponent implements OnInit {

  config = TreeviewConfig.create({
    hasAllCheckBox: false,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 400
});

  items;

  constructor(
    private sharedService: SharedServiceService
  ) { }

  ngOnInit() {
    this.items = this.sharedService.getBooks();
  }

  onFilterChange(value: string) {
    console.log('filter:', value);
  }

}
