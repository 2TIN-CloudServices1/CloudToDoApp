import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  myForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      title: new FormControl(''),
      label: new FormControl('')
    });
  }

}
