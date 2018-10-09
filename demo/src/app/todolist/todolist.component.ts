import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  newTask = '';
  tasks = [
  ];

  constructor() { }

  ngOnInit() {

    try {
      this.tasks = JSON.parse(localStorage.tasks); // FIXME
    } catch {}
  }

  addTask() {
    const task = this.newTask.trim();
    if (task) {
      this.tasks.push(task);

      // save to localstorage
      localStorage.tasks = JSON.stringify(this.tasks);
    }
    this.newTask = '';
  }

  deleteTask(index) {
    // TODO.....
    //const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    // save to localstorage
    localStorage.tasks = JSON.stringify(this.tasks);
  }

}
