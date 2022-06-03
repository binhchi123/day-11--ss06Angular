// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-todo',
//   templateUrl: './todo.component.html',
//   styleUrls: ['./todo.component.css']
// })
// export class TodoComponent implements OnInit {
//   todoList: any = [];
//   todo: any = {
//     name: '',
//     status: false
//   }
//   constructor() { }

//   ngOnInit(): void {
//     this.getTodoLocalSt();
//   }
//   getTodoLocalSt() {
//     if (localStorage.getItem('hihi')) {
//       let data: any = localStorage.getItem('hihi');
//       this.todoList = JSON.parse(data);
//     } else {
//       this.todoList = [];
//     }
//   }
//   addTodo(): void {
//     this.todoList.push(this.todo);
//     localStorage.setItem('hihi', JSON.parse(this.todoList));
//     this.getTodoLocalSt();
//   }
//   update(i: number): void {
//     let data = this.todoList.find((item: any, key: number) => {
//       return key == i;
//     });
//     data.status = true;
//     localStorage.setItem('hihi', JSON.stringify(this.todoList))
//     this.getTodoLocalSt();

//   }

// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  work: any = {
    ten: '',
    status: false
  };
  arrWorkList: any = [];
  constructor() { }

  ngOnInit(): void {
    this.getListLocalStorage();
  }
  getListLocalStorage() {
    if (localStorage.getItem("ArrList") == null || localStorage.getItem("ArrList") == "") {
      this.arrWorkList = [];
    } else {
      let data: any = localStorage.getItem("ArrList");
      this.arrWorkList = JSON.parse(data);
    }
  }
  addWork() {
    if (this.work.ten == '') {
      alert('Hãy nhập tên công việc');
    } else {
      this.arrWorkList.push(this.work);
      localStorage.setItem('ArrList', JSON.stringify(this.arrWorkList));
      this.getListLocalStorage();
    }
  }
  delete(i: number) {
    this.getListLocalStorage();
    this.arrWorkList.splice(i, 1);
    localStorage.setItem('ArrList', JSON.stringify(this.arrWorkList));
    this.getListLocalStorage();
  }
  update(i: number) {
    let data = prompt("Hãy điền tên công việc bạn muốn cập nhật");
    this.getListLocalStorage();
    this.arrWorkList[i].ten = data;
    localStorage.setItem('ArrList', JSON.stringify(this.arrWorkList));
  }
}
