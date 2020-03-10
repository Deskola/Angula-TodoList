import { TodoDataService } from './../service/data/todo-data.service'
import { Component, OnInit } from '@angular/core';


export class Todo{
	constructor(
		public id: number,
		public description: string,
		public targetDate: Date,
		public done: boolean ,
	){}
}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
	
  todos:Todo[]
  //= [
  //		new Todo(1, 'Become a Cyber Security Engineer', new Date(), false),
  //		new Todo(2, 'Become a Data Scientist', new Date(), false),
  //		new Todo(3, 'Become a Software Engoneer', new Date(), false),
  //		new Todo(4, 'Become a Deep learning fellow', new Date(), false),
  //		new Todo(5, 'Become a Quantum Computer Programmer', new Date(), false),
  		//{id: 1,description: 'Become a Cyber Security Engineer'},
  		//{id: 2,description: 'Become a Data Scientist'},
  		//{id: 3,description: 'Become a Software Engoneer'},
  		//{id: 4,description: 'Become a Deep learning fellow'},
  		//{id: 5,description: 'Become a Quantum Computer Programmer'},
 // ];
  constructor(private todoservice:TodoDataService ) { }

  ngOnInit() {
    this.todoservice.getAllTodos('drizla').subscribe(
      response => {
        console.log(response)
        this.todos = response
      }
    )
  }

}
