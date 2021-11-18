import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  myForm!: FormGroup;
  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      title: new FormControl(''),
      label: new FormControl('')
    });
  }

  add(): void {
    let todo: Todo = this.myForm.value;
    this.todoService.addTodo(todo).subscribe(() =>{
      this.router.navigate(['/home']);
    });
  }
}
