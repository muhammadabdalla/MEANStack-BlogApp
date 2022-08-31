import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  newId: number = 0;
  arr: any;
  constructor(private demo: DemoService) {}

  ngOnInit(): void {
    this.demo.getAllUsers().subscribe((data) => {
      this.arr = data;
    });
  }
  addFun(userId: number, title: string, body: string) {
    this.newId = Math.max(...this.arr.map((o: any) => o.id)) + 1;
    this.demo
      .addUser({ id: this.newId, userId, title, body })
      .subscribe((data) => {
        console.log(data);
      });
    alert('post is added');
  }
}
