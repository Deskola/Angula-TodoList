import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
	
  todos = [
  		{id: 1,description: 'Become a Cyber Security Engineer'},
  		{id: 2,description: 'Become a Data Scientist'},
  		{id: 3,description: 'Become a Software Engoneer'},
  		{id: 4,description: 'Become a Deep learning fellow'},
  		{id: 5,description: 'Become a Quantum Computer Programmer'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
