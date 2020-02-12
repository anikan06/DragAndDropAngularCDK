import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-component',
  templateUrl: './drag-component.component.html',
  styleUrls: ['./drag-component.component.scss']
})
export class DragComponentComponent implements OnInit {

  constructor() { }

  list1 = [
    {
      'head': 'angular1',
      'src': 'assets/img/angular.png'
    },
    {
      'head': 'animation',
      'src': 'assets/img/animations.png'
    },
    {
      'head': 'augury',
      'src': 'assets/img/augury.png'
    },
    {
      'head': 'cdk',
      'src': 'assets/img/cdk.png'
    },
    {
      'head': 'cli',
      'src': 'assets/img/cli.png'
    },
    {
      'head': 'compiler',
      'src': 'assets/img/compiler.png'
    },
    {
      'head': 'components',
      'src': 'assets/img/components.png'
    },
    {
      'head': 'Dependency Injection',
      'src': 'assets/img/dependency-injection.png'
    },
  ];

  list2 = [
    {
      'head': 'forms',
      'src': 'assets/img/forms.png'
    },
    {
      'head': 'http',
      'src': 'assets/img/http.png'
    },
    {
      'head': 'karma',
      'src': 'assets/img/forms.png'
    },
    {
      'head': 'labs',
      'src': 'assets/img/labs.png'
    },
    {
      'head': 'lazy loading',
      'src': 'assets/img/lazy-loading.png'
    },
    {
      'head': 'material',
      'src': 'assets/img/material.png'
    },
  ];

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex);
    } else {
      moveItemInArray(this.list1, event.previousIndex, event.currentIndex);
    }
  }
}
