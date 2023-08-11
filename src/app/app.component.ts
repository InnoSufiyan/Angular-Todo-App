import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';
  todos: any[] = [];
  addTask(task: any) {
    this.todos.push({
      id: this.todos.length,
      name: task.value,
    });
    console.log(this.todos, '==>>todos');
  }

  removeTodo(id: number) {
    console.log(id, '==>>id');
    this.todos = this.todos.filter((todo) => todo.id != id);
  }
}
