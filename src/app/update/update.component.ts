import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from '../Services/demo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  userId: number = 0;
  id: number = 0;

  constructor(private myActivated: ActivatedRoute, private demo: DemoService) {}

  ngOnInit(): void {}

  update(title: string, body: string) {
    this.userId = this.myActivated.snapshot.params['userId'];
    this.id = this.myActivated.snapshot.params['id'];

    this.demo.update({ id: this.id, title, body }).subscribe((data) => {
      console.log(data);
      alert(`Post ${this.id}`);
    });
  }
}
