import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return [
      {
        id: 1,
        title: 'First Todo this is test todo to check the lenght',
        completed: false
      },
      {
        id: 2,
        title: 'Second Todo',
        completed: false
      },
      {
        id: 3,
        title: 'Third Todo',
        completed: true
      }
    ];
  }
}
